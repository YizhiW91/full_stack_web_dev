# Django Models

* Django comes with SQLite. Can switch to different engines by updating settings.py "ENGINE" parameter.
* The orm classes are host in models.py, which are the subclass of django.db.modles.Model

* To create the SQlite database, need to run the following commands
  * python manage.py migrate
  * python manage.py makemigrations appname
  * python manage.py migrate

* To test the database, we can use Faker library
  * We can create a populate script to add data to the library
    * To start the database with app settings, use
    ```python
    import os
    import django
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sec_project.settings')
    django.setup()
    ```
  * use Faker().methods() to create different data
  * Then we can run the unittest or go to admin page to double check the data


* In order to use Admin to easy access the database, need to register the Model in the admin.py file by
  ```python
  admin.site.register(Modelx)
  ```
  * To create superusers, use
  ```python
  python manage.py createsuperuser
  ```

* __MTV with model__
