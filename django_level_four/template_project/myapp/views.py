from django.shortcuts import render

# Create your views here.
def index(request):
    context = {'text': "hello world",
                'number': 100}
    return render(request, 'myapp/index.html', context)

def other(request):
    return render(request, 'myapp/other.html')

def relative(request):
    return render(request, 'myapp/relative_url.html')
