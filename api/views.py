from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, QuestionSerializer
from .models import User, Question

@api_view(['GET'])
def apiOverview(request):
    """
    returns a list of all the endpoints
    """

    api_urls = {
        'users': 'users/',
        'user_detail': 'user/user_id',
        #'friends_list': 'user/<str:user_id>/friends',
        'quiz': 'quiz/',
        'quiz_category': 'quiz/category',
        'quiz_category_id': 'quiz/category/id',
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

@api_view(['GET', 'POST'])
def quiz(request):
    """
    returns a list of all quizes available
    """
    
    if request.method == 'GET':
        quizes = Question.objects.all()
        serializer = QuestionSerializer(quizes, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET'])
def quiz_category(request, category):
    """
    returns all the questions and options that have the specific category
    """
    questions = Question.objects.filter(category=category)
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def quiz_category_id(request, category, quiz_id):
    """
    returns all the questions and options that have the specific category and the specific id
    create all the questions and options that have the specific category and the specific id
    """
    try:
        question = Question.objects.filter(id=quiz_id, category=category)
    except Question.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = QuestionSerializer(question, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(category=category, id=quiz_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)