from django.shortcuts import render
from .models import Score
from django.http import HttpResponse
from .serializers import ScoreDetailSerializers
import json


def load_db(request):
    univ_list = {"bs", "bg", "us", "ds", "da", "bf", "gs"}
    for univ in univ_list:
        path = f"./scorefile/{univ}.json"
        with open(path,encoding="utf-8") as json_file:
            data = json.load(json_file)
            data["univ"] = univ
            Score.objects.create(**data)
    return HttpResponse(status=200)



def delete_db(request):
    Score.objects.all().delete()
    return HttpResponse(status=200)