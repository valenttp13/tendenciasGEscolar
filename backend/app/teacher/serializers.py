from rest_framework import serializers
from .models import Teacher
from app.usuarios.models import User  
from app.course.models import Course  

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'description', 'schedule']  
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'full_name', 'address', 'phone_number', 'email']  

class teacherSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  
    courses = CourseSerializer(many=True, read_only=True)  

    class Meta:
        model = Teacher
        fields = ['id', 'user', 'birth_date', 'gender', 'department', 'courses'] 
