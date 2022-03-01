from django import forms
from django.core import validators
from myapp.models import MyModel

def myvalidator(*args):
    pass

class FormName(forms.Form):
    class meta:
        model = MyModel
        #some field options here
    name = forms.CharField()
    email = forms.EmailField()
    verify_email = forms.EmailField(label='enter your email again')
    text = forms.CharField(widget=forms.Textarea, validators=[myvalidator])
    # built-in validator
    botcatcher = forms.CharField(required = False, widget=forms.HiddenInput,validators=[validators.MaxLengthValidator(0)])

    # manual validation
    # def clean_botcatcher(self):
    #     botcatcher = self.cleaned_data['botcatcher']
    #     if len(botcatcher):
    #         raise forms.ValidationError("GOTCHA BOT!")
    #     return botcatcher

    def clean(self):
        all_clean_data = super().clean()
        email = all_clean_data['email']
        verify_email = all_clean_data['verify_email']

        if email != verify_email:
            raise forms.ValidationError("Make sure email matches")
