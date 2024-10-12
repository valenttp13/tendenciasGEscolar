from django.db import models
from django.core.validators import RegexValidator
from app.usuarios.models import User
from app.course.models import Course  
from app.grade.models import Grade  

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student')
    
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    birth_date = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_number = models.CharField(
        max_length=20,
        validators=[RegexValidator(r'^\+?1?\d{9,15}$')],
    )

    courses = models.ManyToManyField(Course, related_name='students')
    
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE, related_name='students')

    def __str__(self):
        return self.user.full_name
