from django.db import models

class Image(models.Model):
    file = models.ImageField(upload_to='images/')
    project = models.OneToOneField('Project', on_delete=models.CASCADE, null=True, blank=True, related_name='project_image')  # One-to-one with Project

    def __str__(self):
        return f"Image for {self.project.title}" if self.project else "Unassigned Image"
