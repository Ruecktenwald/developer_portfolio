from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from backend.models.blog_feed_subscriber import BlogFeedSubscriber

@api_view(['POST'])
def subscribe_to_blog_feed(request):
    email = request.data.get('email')
    if not email:
        return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
    subscriber, created = BlogFeedSubscriber.objects.get_or_create(email=email)
    if created:
        return Response({"message": "Subscribed successfully"}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "Already subscribed"}, status=status.HTTP_200_OK)

@api_view(['POST'])
def unsubscribe_from_blog_feed(request):
    email = request.data.get('email')
    try:
        subscriber = BlogFeedSubscriber.objects.get(email=email)
        subscriber.delete()
        return Response({"message": "Unsubscribed successfully"}, status=status.HTTP_200_OK)
    except BlogFeedSubscriber.DoesNotExist:
        return Response({"error": "Email not found"}, status=status.HTTP_404_NOT_FOUND)
