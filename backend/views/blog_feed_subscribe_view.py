from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend.models.blog_feed_subscriber import BlogFeedSubscriber
from backend.serializers.blog_subscribe_serializer import BlogSubscribeSerializer

@api_view(['POST'])
def blog_feed_subscribe_view(request):
    serializer = BlogSubscribeSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        subscriber, created = BlogFeedSubscriber.objects.get_or_create(email=email)
        if created:
            return Response({"message": "Subscription successful."}, status=status.HTTP_201_CREATED)
        return Response({"message": "You are already subscribed."}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
