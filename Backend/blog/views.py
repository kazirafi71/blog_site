from django.shortcuts import render, HttpResponse
from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import APIView
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets
# Create your views here.


class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()


# class BlogList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):

#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

#     def get(self, request):
#         return self.list(request)

#     def post(self, request):
#         return self.create(request)


# class BlogListDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin):

#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#     lookup_field = 'id'

#     def get(self, request, id):
#         return self.retrieve(request, id=id)

#     def put(self, request, id):
#         return self.update(request, id=id)

#     def delete(self, request, id):
#         return self.destroy(request, id=id)


# @api_view(['GET', 'POST'])
# def PostList(request):

#     if request.method == 'GET':
#         post = Post.objects.all()
#         serializer = PostSerializer(post, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = PostSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', "DELETE"])
# def post_details(request, pk):
#     try:
#         post = Post.objects.get(pk=pk)

#     except Post.DoesNotExist:
#         return HttpResponse(status=status.HTTP_400_BAD_REQUEST)

#     if request.method == 'GET':
#         ss = PostSerializer(post)
#         return Response(ss.data)

#     elif request.method == 'PUT':

#         ss = PostSerializer(post, data=request.data)
#         if ss.is_valid():
#             ss.save()
#             return Response(ss.data, status=status.HTTP_201_CREATED)

#         return Response(ss.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         post.delete()
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)
