from django.urls import path, re_path
from first_app import views

urlpatterns = [
    re_path('^$', views.index, name='index')
]
