from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.views.generic.base import View
# from .models import 
# from .forms import 
from django.contrib.auth import authenticate, login, logout
from users.models import User
import random
from django import template
from django.views.decorators.http import require_http_methods, require_POST
# from .forms import NewUserForm
from django.contrib import messages
from django.db.models import Q

# =======================AUTHENTICATION========================



# =======================CARDS FUNCTIONALITY========================

def index(request):
   

    return render(request, "core/index.html")

def image_upload_view(request):
    """Process images uploaded by users"""
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # Get the current instance object to display in the template
            img_obj = form.instance
            return render(request, 'index.html', {'form': form, 'img_obj': img_obj})
    else:
        form = ImageForm()
    return render(request, 'index.html', {'form': form})