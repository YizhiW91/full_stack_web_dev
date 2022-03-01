from django.shortcuts import render
from .forms import FormName
# Create your views here.


def index(request):
    return render(request, 'myapp/index.html')

def form_name_view(request):
    form = FormName()
    if request.method == 'POST':
        form = FormName(request.POST)

        if form.is_valid():
            # do something here
            print("Validation passed!")
            print('name: ' + form.cleaned_data['name'])
            print('email: ' + form.cleaned_data['email'])
            print('text: ' + form.cleaned_data['text'])
    return render(request, 'myapp/form_page.html', {'form': form})
