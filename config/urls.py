
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from app import views
# allows django to serve up images
from django.conf.urls.static import static



urlpatterns = [
    path('upload/', views.image_upload_view),
    path('', views.index, name='home'),
    path('admin/', admin.site.urls),
   
    
]


