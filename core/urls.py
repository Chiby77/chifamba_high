from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('academics/', views.academics, name='academics'),
    path('achievements/', views.achievements, name='achievements'),
    path('contact/', views.contact, name='contact'),
    path('portal/', views.portal, name='portal'),
    path('projects/', views.projects, name='projects'),
    path('staff/', views.staff, name='staff'),
]
