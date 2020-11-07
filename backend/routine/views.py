from django.shortcuts import render
from .models import BackRoutine, Drip
from .serializers import BackRoutineSerializer, DripSerializer
from rest_framework import viewsets
# Create your views here.

class BackRoutine(viewsets.ModelViewSet):
    queryset = BackRoutine.objects.all()
    serializer_class = BackRoutineSerializer

class Drip(viewsets.ModelViewSet):
    queryset = Drip.objects.all()
    serializer_class = DripSerializer