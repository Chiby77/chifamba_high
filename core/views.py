from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def academics(request):
    return render(request, 'academics.html')

def achievements(request):
    return render(request, 'achievements.html')

def contact(request):
    return render(request, 'contact.html')

def portal(request):
    return render(request, 'portal.html')

def projects(request):
    return render(request, 'projects.html')

def staff(request):
    return render(request, 'staff.html')
