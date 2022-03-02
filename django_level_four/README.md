# Relative URLs with templates

### URL templates:

Here are some style of url templates:
```html
<!-- naive way -->
<a href="basicapp/thankyou"></a>
<!-- thanku is in the url file, not common -->
<a href="{% url 'thanku' %}"></a>
<!-- more robust, but you need to put app_name in the urls.py file in each application, in this case, basicapp/urls.py -->
<a href="{%url'basicapp:thankyou'%}"></a>
```

The takeaway is to __add app_name__ in urls.py if the third style is needed;

### Template inheritance

The base usually is
  * navbar
  * other repetitive components

Once we designed the base, we can extend the base and use it anywhere. Example:

This is the base html:
```html
<body>
  {% block body_block%}
  {% endblock %}
</body>
```

This is the child who extends the base: __extends__ not extend
```html
<!DOCTYPE html>
{% extends 'basic_app/base.html'%}
{% block body_block}
<!-- somehtml -->
{% endblock %}
```

Everything in the body_block in the child will be moved to base.


### Template filters
Template filters controls the injected value to the webpage. There are many built-in filters, check here:
[Link to filters](https://docs.djangoproject.com/en/4.0/ref/templates/builtins/#filters)

Some simple example:
```html
<!-- upper case -->
{{ some_text | upper }}
<!-- title  -->
{{ some_text | title }}
<!-- add number -->
{{ number | add:"99"}}
```

To create customized filter, this is what you can do:
First, create a file that hold the template tags:
```text
polls/
    __init__.py
    models.py
    templatetags/
        __init__.py
        poll_extras.py
    views.py
```
Remeber to register the app in settings.py, and you need to **put the libraries under templates**
```python
TEMPLATES = [
{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [os.path.join(BASE_DIR, 'templates'), ],
    'APP_DIRS': True,
    'OPTIONS': {
        'context_processors': [
            'django.template.context_processors.debug',
            'django.template.context_processors.request',
            'django.contrib.auth.context_processors.auth',
            'django.contrib.messages.context_processors.messages',
        ],
        # this
        'libraries': {
            'my_tags': 'app.templatetags.blog_tags',
        }
    },
},
```

Then create the template filter:
```python
from django import template
# register
register = template.Library()

def mycut(value, arg):
    return value.replace(arg, '')

register.filter('mycut', mycut)
```
Then you can load it as at the top of the html
```
{% load poll_extras %}
```
