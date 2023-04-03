from django.urls import path, include
from . import views


app_name="score"
urlpatterns = [
    path("load_db/",views.load_db,name="load_db"),
    path("delete_db/", views.delete_db, name="delete_db"),
]