from rest_framework import viewsets
from ..models.image import Image
from ..serializers.image_serializer import ImageSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer