from rest_framework import serializers
from backend.models.blog import Blog
from django.contrib.auth.models import User

class BlogSubscribeSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("User with this email does not exist.")
        return value
