from rest_framework import serializers
from .models import Course
from app.teacher.models import Teacher  
from app.student.models import Student  

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'user', 'department']  

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'user', 'grade']  

class CourseSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(read_only=True)  #
    students = StudentSerializer(many=True, read_only=True)  

    class Meta:
        model = Course
        fields = ['id', 'name', 'description', 'teacher', 'schedule', 'students']  
