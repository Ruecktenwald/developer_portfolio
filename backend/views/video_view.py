from rest_framework import viewsets
from ..models.video import Video
from ..serializers.video_serializer import VideoSerializer

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer