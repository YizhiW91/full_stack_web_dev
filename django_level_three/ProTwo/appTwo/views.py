from django.shortcuts import render
from django.http import HttpResponse
from appTwo.models import User
from appTwo.forms import UserForm

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

def register(request):
    form = UserForm()
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            print("form saved!")
        else:
            print('not valid')

    return render(request,'appTwo/user_registry.html',context={'form':form})
