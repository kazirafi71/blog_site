from django.contrib import admin
from .models import Post

# Register your models here.

# admin.site.register(Post)


@admin.register(Post)
class PostModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')
