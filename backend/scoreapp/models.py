from django.db import models


class Score(models.Model):
    univ = models.CharField(max_length=20)
    clean = models.FloatField()
    bad = models.FloatField()
    region = models.FloatField()
    minority = models.FloatField()
    race = models.FloatField()
    woman = models.FloatField()
    man = models.FloatField()
    age = models.FloatField()
    religion = models.FloatField()
    etc_hatred = models.FloatField()