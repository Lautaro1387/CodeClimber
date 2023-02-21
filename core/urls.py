from django.urls import path, include, re_path
from django.contrib import admin

from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/', include('api.urls')),

    path('admin/', admin.site.urls),

    path('home/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('signup/', TemplateView.as_view(template_name='index.html')),
    path('profile/', TemplateView.as_view(template_name='index.html')),
    path('quiz/', TemplateView.as_view(template_name='index.html')),
    path('ranking/', TemplateView.as_view(template_name='index.html')),
]