from dataclasses import fields
from .models import Signup

from rest_framework import serializers

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = '__all__'


class SignupSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null= True)
    class Meta:
        model = Signup
        fields = '__all__'
        depth = 1

