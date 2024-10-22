# project_view.py

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from backend.models.project import Project
from backend.serializers.project_serializer import ProjectSerializer
from rest_framework import status 

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

@api_view(['GET'])
def get_featured_project(request):
    try:
        # Filter the projects based on `is_featured` instead of `featured`
        featured_project = Project.objects.filter(is_featured=True).first()
        if not featured_project:
            return Response({"message": "No featured project found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProjectSerializer(featured_project)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)