from django.db.models.signals import post_save
from django.dispatch import receiver
from backend.models.blog import Blog
from backend.models.blog_feed_subscriber import BlogFeedSubscriber
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from smtplib import SMTPException
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
import dns.resolver

# Function to check if the email's domain has MX records
def check_mx_record(email):
    domain = email.split('@')[-1]
    try:
        records = dns.resolver.resolve(domain, 'MX')
        return bool(records)
    except (dns.resolver.NoAnswer, dns.resolver.NXDOMAIN, dns.resolver.NoNameservers):
        return False
    except Exception as e:
        print(f"Error resolving MX records for {domain}: {e}")
        return False

@receiver(post_save, sender=Blog)
def notify_subscribers_on_new_blog(sender, instance, created, **kwargs):
    if created:
        subscribers = BlogFeedSubscriber.objects.all()
        for subscriber in subscribers:
            try:
                # Validate email format and domain MX records before attempting to send
                validate_email(subscriber.email)
                if not check_mx_record(subscriber.email):
                    print(f"MX record validation failed for: {subscriber.email}")
                    raise ValidationError("Invalid MX record.")

                print(f"Email validation passed for: {subscriber.email}")

                # Load the HTML template and create a plain text version
                html_message = render_to_string('emails/new_blog_notification.html', {'blog': instance})
                plain_message = strip_tags(html_message)

                # Send email to subscriber
                send_mail(
                    subject=f'New Blog Post: {instance.title}',
                    message=plain_message,  # Plain text version for email clients that don't support HTML
                    from_email='ruecktenwald@gmail.com',
                    recipient_list=[subscriber.email],
                    fail_silently=False,
                    html_message=html_message,  # HTML message for richer presentation
                )
                print(f"Email sent successfully to: {subscriber.email}")

            except (SMTPException, ValidationError) as e:
                # Log the error for future investigation
                print(f"Failed to send email to {subscriber.email}: {e}")

                # Remove invalid email from the database
                try:
                    subscriber.delete()
                    print(f"Deleted invalid email: {subscriber.email}")
                except Exception as delete_error:
                    print(f"Failed to delete {subscriber.email} from the database: {delete_error}")
