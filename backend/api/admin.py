from django.contrib import admin

from .models import CandidateCV, Job

admin.site.register(Job)
admin.site.register(CandidateCV)
