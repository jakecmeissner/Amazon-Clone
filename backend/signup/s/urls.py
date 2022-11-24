from django.urls import path
from . import views


urlpatterns = [
     path('',  views.SignupList.as_view(), name="signup_list"),
     path('add/',  views.SignupAdd.as_view(), name="signup_add"),
     path('update/<int:pk>/',  views.SignupUpdate.as_view(), name="signup_update"),
     path('delete/<int:pk>/',  views.SignupDelete.as_view(), name="signup_delete"),



]