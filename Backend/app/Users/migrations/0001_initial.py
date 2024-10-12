# Generated by Django 5.1.1 on 2024-10-04 23:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('identificacion', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_completo', models.CharField(max_length=255)),
                ('correo_electronico', models.EmailField(max_length=255, unique=True)),
                ('numero_telefono', models.CharField(blank=True, max_length=15, null=True)),
                ('fecha_nacimiento', models.DateField(blank=True, null=True)),
                ('direccion', models.CharField(blank=True, max_length=255, null=True)),
                ('rol', models.CharField(choices=[('Estudiante', 'Estudiante'), ('Profesor', 'Profesor'), ('Administrativo', 'Administrativo'), ('Otro', 'Otro')], max_length=15)),
                ('nombre_usuario', models.CharField(max_length=50, unique=True)),
                ('contrasena', models.CharField(max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]