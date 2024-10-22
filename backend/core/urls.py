from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from backend.views.project_view import ProjectViewSet, get_featured_project
from backend.views.blog_view import BlogViewSet
from backend.views.image_view import ImageViewSet
from backend.views.video_view import VideoViewSet
from backend.views.home_view import home
from backend.views.contact_view import contact_view
from backend.views.signup_view import signup_view
from backend.views.blog_feed_subscribe_view import blog_feed_subscribe_view
from backend.views.favorite_blog_view import favorite_blog_view
from backend.views.subscription_views import subscribe_to_blog_feed, unsubscribe_from_blog_feed
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register('projects', ProjectViewSet)
router.register('blogs', BlogViewSet)
router.register('images', ImageViewSet)
router.register('videos', VideoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin page route
    path('', home, name='home'),  # Home page route
    path('api/', include(router.urls)),
    path('api/signup/', signup_view, name='signup'),  # User sign-up route
    path('api/contact/', contact_view, name='contact'),
    path('api/blog-feed/subscribe/', blog_feed_subscribe_view, name='blog-feed-subscribe'),
    path('api/blogs/<int:blog_id>/favorite/', favorite_blog_view, name='blog-favorite'),
    path('api/featured-project/', get_featured_project, name='featured-project'),
    path('api/subscribe/', subscribe_to_blog_feed, name='subscribe'),
    path('api/unsubscribe/', unsubscribe_from_blog_feed, name='unsubscribe'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
