import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.project import Project
from ..serializers.project_serializer import ProjectSerializer

logger = logging.getLogger(__name__)

class FeaturedProjectView(APIView):
    def get(self, request):
        try:
            project = Project.objects.filter(is_featured=True).first()
            if project:
                serializer = ProjectSerializer(project)
                return Response(serializer.data)
            else:
                return Response({"error": "No featured project found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logger.error(f"Error fetching featured project: {str(e)}")
            return Response({"error": "An error occurred while fetching the featured project."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
