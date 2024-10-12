from rest_framework import serializers
from .models import Student
from app.usuarios.models import User  
from app.course.models import Course  
from app.grade.models import Grade  

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'description', 'schedule']  
class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['id', 'course', 'grade_value', 'date']  

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'full_name', 'address', 'phone_number', 'email']  

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  
    courses = CourseSerializer(many=True, read_only=True)  
    grades = GradeSerializer(many=True, read_only=True)  

    class Meta:
        model = Student
        fields = ['id', 'user', 'birth_date', 'gender', 'phone_number', 'courses', 'grades'] 
