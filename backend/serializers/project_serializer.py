from rest_framework import serializers
from ..models.project import Project
from ..models.image import Image
from ..models.video import Video

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.PrimaryKeyRelatedField(queryset=Image.objects.all(), allow_null=True)
    video = serializers.PrimaryKeyRelatedField(queryset=Video.objects.all(), allow_null=True)

    class Meta:
        model = Project
        fields = '__all__'
