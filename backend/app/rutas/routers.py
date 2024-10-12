from rest_framework.routers import DefaultRouter
from django.urls import path, include  
from ..grade.views import *
from ..course.views import *
from ..student.views import *
from ..teacher.views import *
from ..usuarios.views import UserViewSet

router = DefaultRouter()

router.register(r'usuarios', UserViewSet, basename='user')
router.register(r'grades', GradeViewSet, basename='grade')
router.register(r'courses', CourseViewSet, basename='course')
router.register(r'students', StudentViewSet, basename='student')
router.register(r'teachers', teacherViewSet, basename='teacher')

urlpatterns = [
    path('', include(router.urls)),  
]
