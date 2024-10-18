from rest_framework import serializers
from ..models.blog import Blog

class BlogSerializer(serializers.ModelSerializer):
    images = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    videos = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    subscribers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = '__all__'