from django.db import models
from app.teacher.models import Teacher
from app.student.models import Student  

class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name="courses")
    schedule = models.CharField(max_length=100)  


    students = models.ManyToManyField(Student, related_name='courses')

    def __str__(self):
        return self.name
