from rest_framework import viewsets

from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """Full CRUD for to-do items: list, create, retrieve, update, delete."""

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
