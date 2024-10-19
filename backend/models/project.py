from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ForeignKey('Image', on_delete=models.SET_NULL, null=True, blank=True, related_name='projects')  # Many-to-one with Image
    video = models.ForeignKey('Video', on_delete=models.SET_NULL, null=True, blank=True, related_name='projects')  # Many-to-one with Video
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title
