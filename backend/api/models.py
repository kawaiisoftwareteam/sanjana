from django.db import models


class Job(models.Model):
    class Demand(models.TextChoices):
        VERY_HIGH = 'Very High'
        HIGH = 'High'
        MEDIUM = 'Medium'

    title = models.CharField(max_length=200)
    sector = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    visa = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    openings = models.PositiveIntegerField(default=1)
    language = models.CharField(max_length=200, blank=True)
    experience = models.CharField(max_length=200, blank=True)
    benefits = models.JSONField(default=list, blank=True)
    requirements = models.JSONField(default=list, blank=True)
    demand = models.CharField(max_length=20, choices=Demand.choices, default=Demand.MEDIUM)
    posted = models.DateField()

    class Meta:
        ordering = ['-posted', '-id']

    def __str__(self):
        return self.title


class CandidateCV(models.Model):
    full_name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=100, blank=True)
    data = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at', '-id']

    def __str__(self):
        return self.full_name or f'CV #{self.pk}'
