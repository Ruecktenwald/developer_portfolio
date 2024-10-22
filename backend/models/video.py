from django.db import models

class Video(models.Model):
    file = models.FileField(upload_to='videos/')
    project = models.ForeignKey('Project', on_delete=models.CASCADE, null=True, blank=True, related_name='project_videos')  # Many-to-one with Project
    blog = models.ForeignKey('Blog', on_delete=models.CASCADE, null=True, blank=True, related_name='blog_videos')  # Many-to-one with Blog

    def __str__(self):
        if self.project:
            return f"Video for Project: {self.project.title}"
        elif self.blog:
            return f"Video for Blog: {self.blog.title}"
        else:
            return "Unassigned Video"
