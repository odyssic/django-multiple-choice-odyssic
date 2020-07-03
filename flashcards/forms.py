from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import User, Deck, Card


class DeckForm(forms.ModelForm):

    class Meta:
        model = Deck
        fields = ('name', 'subject', 'description')
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Deck Name',
            'autocomplete': 'off'}),
            'subject': forms.TextInput(attrs={'placeholder': 'Deck Subject'}),
            'description': forms.Textarea(attrs={'placeholder': 'Deck Description',"style": "resize: none","rows":10, "cols":20})
            }

            


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField()

    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'username'
        self.fields['password '].widget.attrs['placeholder'] = 'password'
   
class CardForm(forms.ModelForm):

    class Meta:
        model = Card
        fields = ('deck','question', 'answer')
        widgets = {
            
            'question': forms.TextInput(attrs={'label': 'Question', 'placeholder': 'Question | Front of Card', 'autofocus': 'autofocus'}),
            
            'answer': forms.TextInput(attrs={'placeholder': 'Answer | Back of Card', 'autofocus': 'autofocus'})}
               

class NewUserForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")

    def save(self, commit=True):
        user = super(NewUserForm, self).save(commit=False)
        user.email = self.cleaned_data["email"]
        if commit:
            user.save()
        return user
