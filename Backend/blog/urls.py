

from django.urls import path
from .views import PostList, post_details

urlpatterns = [
    path('all-posts', PostList),
    path('all-posts/<int:pk>', post_details)
]
