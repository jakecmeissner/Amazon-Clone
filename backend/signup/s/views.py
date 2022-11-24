from operator import ge
from django.shortcuts import render

from .serializers import SignupSerializer

from .models import Signup
from rest_framework import generics

# Create your views here.

# CRUD IN REST FRAEWORK

class SignupList(generics.ListAPIView):
    queryset = Signup.objects.all()
    serializer_class = SignupSerializer

class SignupAdd(generics.CreateAPIView):
    queryset = Signup.objects.all()
    serializer_class = SignupSerializer


class SignupUpdate(generics.UpdateAPIView, generics.RetrieveAPIView):
    queryset = Signup.objects.all()
    serializer_class = SignupSerializer

class SignupDelete(generics.DestroyAPIView):
    queryset = Signup.objects.all()
    serializer_class = SignupSerializer