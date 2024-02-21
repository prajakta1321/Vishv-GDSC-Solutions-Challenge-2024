"""
URL configuration for first_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ml_app import views as ml_views
from translator_app import views as translator_views
from django.urls import include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('predict/', ml_views.my_view, name='process_json'),
    path('google-auth/', ml_views.google_auth, name='google_auth_callback'),
    path('translate/', translator_views.translate_text, name='translate_text'),
    path('health/', include('health_check.urls')),
]
