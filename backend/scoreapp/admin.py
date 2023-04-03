from django.contrib import admin
from .models import Score


@admin.register(Score)
class Score(admin.ModelAdmin):
    pass