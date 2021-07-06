

from django.urls import path
from .views import BlogList, BlogListDetails

#PostList, post_details,

urlpatterns = [
    path('all-posts', BlogList.as_view()),
    path('all-posts/<int:id>/', BlogListDetails.as_view()),
    # path('all-posts', PostList),
    # path('all-posts/<int:pk>/', post_details)
]
