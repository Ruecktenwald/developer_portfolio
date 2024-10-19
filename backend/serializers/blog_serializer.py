# backend/serializers/blog_serializer.py

from rest_framework import serializers
from ..models.blog import Blog
from ..models.image import Image
from ..models.video import Video

class BlogSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    video_url = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'author', 'created_at', 'image_url', 'video_url']

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.file.url if obj.image.file else None
        return None

    def get_video_url(self, obj):
        if obj.video:
            return obj.video.file.url if obj.video.file else None
        return None
