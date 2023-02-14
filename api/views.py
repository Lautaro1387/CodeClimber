from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer, QuizSerializer

from .models import User, Quiz

@api_view(['GET'])
def apiOverview(request):
    """
    returns a list of all the endpoints
    """

    api_urls = {
        'users': 'users/',
        'user_detail': 'user/<str:user_id>',
        #'friends_list': 'user/<str:user_id>/friends',
        'quizes': 'quizes/',
        'quiz_detail': 'quiz/<str:quiz_id>',
        #'ranking': 'ranking/'
    }

    return Response(api_urls)
    
@api_view(['GET', 'POST'])
def users(request):
    """
    return a list of all registered users order by their ID
    also can register a user
    """
    if request.method == 'GET':
        users = User.objects.all().order_by('id')
        serializer = UserSerializer(users, many=True) # many=True because it's not singular
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, user_id):
    """
    returns the user information based on the provided <user_id>
    updates the user information with the provided data
    deletes the user information associated with the provided user id
    """
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#api_view(['GET'])
#def friends_list(request, user_id):
#    try:
#        user = User.objects.get(id=user_id)
#    except User.DoesNotExist:
#        return Response(status=status.HTTP_404_NOT_FOUND)
#    

@api_view(['GET', 'POST'])
def quizes(request):
    """
    returns a list of all quizes available with details such as name, description and order
    adds a new quiz to the list of quizes
    """

    if request.method == 'GET':
        quizes = Quiz.objects.all()
        serializer = QuizSerializer(quizes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = QuizSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def quiz_detail(request, quiz_id):
    """
    returns the information about the quiz that have the specific id
    updates the user’s progress
    """
    try: 
        quiz = Quiz.objects.get(id=quiz_id)
    except Quiz.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = QuizSerializer(quiz)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        points = request.data.get('points')
        is_complete = request.data.get('is_complete')

        quiz.points = points
        quiz.is_complete = is_complete
        quiz.save()
        serializer = QuizSerializer(quiz)
        return Response(QuizSerializer.data)