from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import user, task, friends, ranking, messages

def index(request):
    context = [
        user = user.objects.all(),
    ]
    return render(request, 'index.html', context)

# to be updated
#def forAPI(APIView):
#    def get(self, request, *args, **kwargs):
#        data = {
#            'username': 'admin',
#            'years_active': '10',
#        }
#        return Response(data)