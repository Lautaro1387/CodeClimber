from django.urls import path
from . import views
# ver con extensión Thunder Client
urlpatterns = [
    path('', views.apiOverview, name='apiOverview'),
    path('users', views.users, name='users'),
    path('user/<str:user_id>', views.user_detail, name='user_detail'),
    path('quiz', views.quiz, name='quiz'),
    path('quiz/<str:category>', views.quiz_category, name='quiz_category'),
    path('quiz/<str:category>/<int:quiz_id>', views.quiz_category_id, name='quiz_category_id'),
]