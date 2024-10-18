from django.db import models

class Image(models.Model):
    file = models.ImageField(upload_to='images/')
    alt_text = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.alt_text or "Image"
