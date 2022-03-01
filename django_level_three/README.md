# Django Forms

### How to use form in django.
Django has form classes.
```python
from django import forms
class FormName(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    text = forms.CharField(widget=forms.Textarea)
```
Then you can import the Form to the views.py, then return the render(request, 'x.html', {'form': form})
Here we need to use POST/GET to transmit data between the webpage to backend.

### Validation of the data
Django.core provides built-in validators, but you can also write your own validators(callables) and parse it in as a list.

Another thing to notice is if the form is connecting to a Model, you can add a class meta inside the form objects, with some field options. Check details online.
```python
class FormName(forms.Form):
    class Meta:
        model = MyModel
        #some field options here
        # exclude, include, or __all__
    name = forms.CharField()
    email = forms.EmailField()
    verify_email = forms.EmailField(label='enter your email again')
    # myvalidator is a func defined by user
    text = forms.CharField(widget=forms.Textarea, validators=[myvalidator])
    # built-in validator
    botcatcher = forms.CharField(required = False, widget=forms.HiddenInput, validators=[validators.MaxLengthValidator(0)])

```

### Use the form in the templates
The takeaway here is you need to add {% csrf_token %}, this is the built-in django security mechanism.

```html
<form class="" method="post">
  {{form.as_p}}
  {% csrf_token %}
  <input type="submit" class="btn btn-primary" name="" value="Click me!">
</form>
```

### Take the value from the POST request
Need to check if the request is a POST, if yes, use the request to initialize the form and then you can access the data.
```python
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
```

### Save the form to db
Just do model object.save()
