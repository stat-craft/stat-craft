from django.http import HttpResponse
import os


def index(request):
    return HttpResponse(os.getenv("APP_NAME") + " gej.")
