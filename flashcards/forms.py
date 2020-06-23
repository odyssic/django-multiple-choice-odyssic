from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import User, Deck, Card


class DeckForm(forms.ModelForm):

    class Meta:
        model = Deck
        fields = ('name', 'subject', 'description')
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Deck Name', 'autofocus': 'autofocus',
            'autocomplete': 'off'}),
            'subject': forms.TextInput(attrs={'placeholder': 'Deck Subject'}),
            'description': forms.TextInput(attrs={'placeholder': 'Deck Description',
            "rows":20, "cols":20})
            }

# class MyForm(forms.ModelForm):
#     class Meta:
#         model = User
       
#              ..........
#         }

# class LoginForm(forms.Form):
#     username = forms.CharField(label='username')
#     password = forms.CharField(label='password')


#     def __init__(self, *args, **kwargs):
#         super(LoginForm, self).__init__(*args, **kwargs)
#         self.fields['username'].widget.attrs['placeholder'] = 'username'
#         self.fields['password '].widget.attrs['placeholder'] = 'password'

# class DeckForm(forms.ModelForm):
#     name = forms.CharField(label='name', widget=forms.TextInput(attrs={'placeholder': 'Deck Name'}))
    
#     subject = forms.CharField(label='subject', widget=forms.TextInput(attrs={'placeholder': 'Deck Subject'}))

#     description = forms.CharField(label='description', widget=forms.TextInput(attrs={'placeholder': 'Deck Description'}))

#     class Meta:
#         model = Deck
#         fields = ('name', 'subject', 'description')

#     def save(self, commit=True):
#         deck = deckForm.save(commit=False)
#         if commit:
#             deck.save()
#         return deck     


class CardForm(forms.ModelForm):

    class Meta:
        model = Card
        fields = ('deck','question', 'answer')


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
