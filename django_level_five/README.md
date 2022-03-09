# Django User model

### Django password management

* Do not put password as plain text in code
* Django has SHA-256 hash encrypt built in, to use the django built-in user management
need to make sure the applications are included:
  * 'django.contrib.auth'
  * 'django.contrib.contenttypes'
* Some useful libraries
  * bcrypt
  * django[argon2]
* To add hashers to the project, add this to the settings.py:
```python
  PASSWORD_HASHERS = [
      'django.contrib.auth.hashers.PBKDF2PassordHasher',
      'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
      'django.contrib.auth.hashers.BCryptPasswordHasher',
      'django.contrib.auth.hashers.Argon2PasswordHasher',
      'django.contrib.auth.hashers.PBKDF2SHA1PassordHasher',
  ]
```

### Django auth User model

* Do not name your model as User, it overshadows built-in User
* To extend on the User model, do:
```python
  from django.contrib.auth.models import User

  # Create your models here.
  class UserProfileInfo(models.models):
      user = models.OneToOneField(User)
      # addtion info here
      test = models.TextField()
```

### Django log in/out
There are a lot of built-in tools to be used for user log in/out. The login_required is a decorators you can apply on the views.
```python
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
```


### Other
* To work with pictures, pillow library is recommended to be used.
