from django.shortcuts import render

from rest_framework.views import APIView

from .serializers import TaskSerializer
from .serializers import UserSerializer

from .models import Task
from .models import User

class TaskView(APIView):
    queryset = Task.objects.all()
    serializer = TaskSerializer

class UserView(APIView):
    queryset = User.objects.all()
    serializer = UserSerializer
