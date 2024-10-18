from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend.models.blog import Blog
from django.contrib.auth.models import User

@api_view(['POST'])
def favorite_blog_view(request, blog_id):
    try:
        blog = Blog.objects.get(pk=blog_id)
        user = request.user

        if user in blog.favorites.all():
            blog.favorites.remove(user)
            message = "Blog post removed from favorites."
        else:
            blog.favorites.add(user)
            message = "Blog post added to favorites."

        return Response({"message": message}, status=status.HTTP_200_OK)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found."}, status=status.HTTP_404_NOT_FOUND)
