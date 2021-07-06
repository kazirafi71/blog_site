

from django.urls import path, include
from .views import BlogViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

#PostList, post_details,BlogList, BlogListDetails

router = DefaultRouter()
router.register('all-posts', BlogViewSet, basename="all-posts")
router.register('users', UserViewSet, basename="users")


urlpatterns = [
    path('api/', include(router.urls))
    # path('all-posts', BlogList.as_view()),
    # path('all-posts/<int:id>/', BlogListDetails.as_view()),
    # path('all-posts', PostList),
    # path('all-posts/<int:pk>/', post_details)
]
