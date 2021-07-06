from django.shortcuts import render, HttpResponse
from .models import Post
from .serializers import PostSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.




@csrf_exempt
def PostList(request):

    if request.method == 'GET':
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.error, status=400)




@csrf_exempt
def post_details(request,pk):
    try:
        post=Post.objects.get(pk=pk)

    except Post.DoesNotExist:
        return HttpResponse(status=400)    


    if request.method == 'GET':
        ss=PostSerializer(post)
        return JsonResponse(ss.data)

    elif request.method =='PUT':
        data=JSONParser().parse(request)
        ss=PostSerializer(post,data=data)
        if ss.is_valid():
            ss.save()
            return JsonResponse(ss.data,status=201)

        return JsonResponse(ss.errors,status=400)


    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=204)
