from django.contrib import admin
from .models.blog import Blog
from .models.image import Image
from .models.project import Project
from .models.video import Video
from backend.models.blog_feed_subscriber import BlogFeedSubscriber

admin.site.register(Blog)
admin.site.register(Image)
admin.site.register(Project)
admin.site.register(Video)
admin.site.register(BlogFeedSubscriber) 