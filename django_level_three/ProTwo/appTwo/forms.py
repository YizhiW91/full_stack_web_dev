from django import forms
from appTwo.models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        exclude = ["id"]
