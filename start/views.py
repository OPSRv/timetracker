from django.shortcuts import render


def start(request):
    return render(request, "start/build/index.html")
