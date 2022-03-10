# Django Class based views

### Class based views
Most of time,  Django view is used as class based view.

Here is a example of simple class based view:
```python
from django.views.generic import View
from django.http import HttpResponse

class CBView(View):
    def get(self, request):
        return HttpResponse("class based response")
```

When using the class based view, we need to set up the urls calling class.__as_view()__
```python
urlpatterns = [
    path('', views.CBView.as_view()),
]
```

### Class based Template views
This is the most common case of django view.

Here is a simple example of TemplateView injection:
```python
class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        # calling parent
        context = super().get_context_data(**kwargs)
        # assign user based response
        context['injectme'] = 'BASIC INJECTION!'
        return context
```

### Detail/List views
Those two views are for showing the model information

* ListView is to show an list of model objects
* DetailView shows __a__ model object

### CRUD
Check those on Django website
  * CreateView
  * UpdateView
  * DeleteView
