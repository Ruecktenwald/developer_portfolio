from rest_framework import viewsets
from ..models.blog import Blog
from ..serializers.blog_serializer import BlogSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer