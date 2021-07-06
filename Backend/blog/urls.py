

from django.urls import path
from .views import PostList

urlpatterns = [
    path('all-posts', PostList)
]
