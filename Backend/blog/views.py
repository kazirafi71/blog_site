from django.shortcuts import render, HttpResponse
from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# Create your views here.


@api_view(['GET', 'POST'])
def PostList(request):

    if request.method == 'GET':
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', "DELETE"])
def post_details(request, pk):
    try:
        post = Post.objects.get(pk=pk)

    except Post.DoesNotExist:
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        ss = PostSerializer(post)
        return Response(ss.data)

    elif request.method == 'PUT':

        ss = PostSerializer(post, data=request.data)
        if ss.is_valid():
            ss.save()
            return Response(ss.data, status=status.HTTP_201_CREATED)

        return Response(ss.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
