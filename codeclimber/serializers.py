from rest_framework import serializers
from .models import User, Task, Friends, Ranking, Messages

class serializer(serializers.ModelSerializer):