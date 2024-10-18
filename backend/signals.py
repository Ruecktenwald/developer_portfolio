from django.db.models.signals import post_save
from django.dispatch import receiver
from backend.models.blog import Blog
from backend.models.blog_feed_subscriber import BlogFeedSubscriber
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from smtplib import SMTPException

@receiver(post_save, sender=Blog)
def notify_subscribers_on_new_blog(sender, instance, created, **kwargs):
    if created:
        subscribers = BlogFeedSubscriber.objects.all()
        for subscriber in subscribers:
            try:
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
            except SMTPException as e:
                # Log the error for future investigation
                print(f"Failed to send email to {subscriber.email}: {e}")
