from django.db import models
from app.usuarios.models import User  
from app.course.models import Course  

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher')
    
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
    ]

    birth_date = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    department = models.CharField(max_length=100)  

    courses = models.ManyToManyField(Course, related_name='teachers')

    def __str__(self):
        return self.user.full_name
