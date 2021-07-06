from rest_framework import serializers
from .models import Post


# class PostSerializer(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     description = serializers.CharField(max_length=400)

#     def create(self, validated_data):
#         return Post.objects.create(validated_data)

#     def update(self, instance, validated_data):
#         instance.title = validated_data.get('title', instance.title)
#         instance.description = validated_data.get(
#             'description', instance.description)


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields=['title', 'description','id']
