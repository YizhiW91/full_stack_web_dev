from django.shortcuts import render
from django.http import HttpResponse
from appTwo.models import User

# Create your views here.
def index(request):
    return HttpResponse("<em>My Second Project</em>")

def help(request):
    helpdict = {'help_insert':'HELP PAGE, please go to user to see more user info'}
    return render(request,'appTwo/help.html',context=helpdict)

def user(request):
    my_users = User.objects.all()
    user_dict = {'users':my_users}
    return render(request,'appTwo/user.html',context=user_dict)
