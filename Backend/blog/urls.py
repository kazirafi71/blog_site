

from django.urls import path, include
from .views import BlogViewSet
from rest_framework.routers import DefaultRouter

#PostList, post_details,BlogList, BlogListDetails

router = DefaultRouter()
router.register('all-posts', BlogViewSet, basename="all-posts")


urlpatterns = [
    path('', include(router.urls))
    # path('all-posts', BlogList.as_view()),
    # path('all-posts/<int:id>/', BlogListDetails.as_view()),
    # path('all-posts', PostList),
    # path('all-posts/<int:pk>/', post_details)
]
