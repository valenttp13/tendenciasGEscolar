from rest_framework import serializers
from .models import Grade
from app.student.models import Student  
from app.course.models import Course

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'full_name', 'email']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'description']

class GradeSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)  
    course = CourseSerializer(read_only=True) 

    class Meta:
        model = Grade
        fields = ['id', 'student', 'course', 'grade', 'evaluation_date']
