from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True) 
    
    class Meta:
        model = User
        fields = ['id', 'email', 'full_name', 'phone_number', 'birth_date', 'address', 'role', 'password']
    
    def create(self, validated_data):
       
        user = User.objects.create_user(
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            password=validated_data['password'],
            phone_number=validated_data.get('phone_number', ''),
            birth_date=validated_data.get('birth_date', None),
            address=validated_data.get('address', ''),
            role=validated_data.get('role', 'student')
        )
        return user
