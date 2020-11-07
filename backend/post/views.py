from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets, permissions

from .serializers import PostSerializer
from post.models import Post


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]  # added

    def get_queryset(self):  # added
        return self.request.user.post.all()

    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)