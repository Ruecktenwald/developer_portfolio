from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ForeignKey('Image', on_delete=models.SET_NULL, null=True, blank=True, related_name='blogs')  # Many-to-one with Image
    video = models.ForeignKey('Video', on_delete=models.SET_NULL, null=True, blank=True, related_name='blogs')  # Many-to-one with Video

    def __str__(self):
        return self.title
