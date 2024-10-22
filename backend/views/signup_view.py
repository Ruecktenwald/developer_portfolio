import logging
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.db import IntegrityError

logger = logging.getLogger(__name__)

@api_view(['POST'])
def signup_view(request):
    logger.info(f"Received data: {request.data}")  # Log the received data

    if request.method == 'POST':
        data = request.data
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Check if any field is missing
        if not username or not email or not password:
            logger.warning("Missing fields in signup data")
            return Response({"error": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if a user with the given username or email already exists
        if User.objects.filter(username=username).exists():
            logger.warning(f"Username '{username}' already exists.")
            return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            logger.warning(f"Email '{email}' already exists.")
            return Response({"error": "Email already exists."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Create the user
            user = User.objects.create_user(username=username, email=email, password=password)
            logger.info(f"User {username} created successfully.")
            return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)
        except IntegrityError as e:
            logger.error(f"Integrity error creating user: {str(e)}")
            return Response({"error": "An error occurred while creating the user."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"Error creating user: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
