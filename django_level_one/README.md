# Lesson 1 Learning

## Create Django Application

#### To start the project, use
```bash
django-admin startproject my_project
```
The command will create two level folders
  * my_project
    * my_project
      * asgi.py
      * settings.py -> for managing settings, like templates, static files, database connections, etc
      * urls.py  -> for managing urls from different apps
      * wsgi.py
    * manage.py


#### To run the server, use
```bash
python manage.py runserver
```
This command will start the server on 127.0.0.1:8000


#### To create new app, use
```bash
python manage.py startapp my_app
```
my_app will be in a parallel folder as my_project.


## Steps to link the app to the project
Several steps to register the app to the project. Here is how:

* Modify settings.py
  * add app name to INSTALLED_APPS
  * create templates folder and add it to TEMPLATES.DIR in settings.py
  * create static folder and add it to settings.py, like:
    * STATIC_URL = '/static/'
    * STATICFILES_DIRS = [BASE_DIR / 'static', ]
* Register urls
  * Good practice is to create a urls.py under the app, using urlpatterns to host sub urls
  * Add the app urls into project/urls.py


## Render the template
So far, the learning is "{{}}" is for text input, "{% %}" is for static files or logic.
