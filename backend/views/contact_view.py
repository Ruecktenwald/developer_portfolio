from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def contact_view(request):
    if request.method == 'POST':
        data = request.data
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Check if any field is missing
        if not name or not email or not message:
            logger.warning("Missing fields in contact form data")
            return Response({"error": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Send email
            send_mail(
                subject=f'New Contact Form Submission from {name}',
                message=f'Name: {name}\nEmail: {email}\n\nMessage:\n{message}',
                from_email=email,
                recipient_list=['ruecktenwald@gmail.com'],
                fail_silently=False,
            )
            logger.info(f"Contact form submitted by {email}")
            return Response({"message": "Message sent successfully."}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return Response({"error": "An error occurred while sending the message."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
