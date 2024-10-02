# School Management System

[![en](https://img.shields.io/badge/language-en-red)](https://github.com/mateocar/Gestion_Escolar_back/blob/main/README.en.md)
[![es](https://img.shields.io/badge/language-es-green)](https://github.com/mateocar/Gestion_Escolar_back/blob/main/README.md)
[![fr](https://img.shields.io/badge/language-fr-blue)](https://github.com/mateocar/Gestion_Escolar_back/blob/main/README.fr.md)

## Team Members

- [Mateo Cardenas Osorio](https://github.com/mateocar)
- [Andres Navarro De la Hoz](https://github.com/eldelahoz)
- [Rina Plata Lopez](https://github.com/Rinaplata)

## Project Description

The School Management System is an application developed to help schools efficiently manage information about students, teachers, courses, and grades. This system provides a comprehensive platform for school administration, improving communication and optimizing academic management.

## Technology

- Django Rest Framewok.
- PostgreSQL

## Usage

### Virtual environment

1. **Creating the environment**

```bash
python -m venv .env
```

2. **Activate**

| System  | Command                  |
| ------- | ------------------------ |
| Windows | .env\Scripts\Activate    |
| Linux   | source .env/bin/activate |

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

`Note: Remember to be in the folder where the requirements.txt file is located`

> [!IMPORTANT]
> In case you do not want to use PostgreSQL as database engine follow the SQLite steps

<details>
<summary>PostgreSQL</summary>

1. **Necessary files for PostgreSQL (LOCAL)**

   If you are running a database from PostgreSQL, you need to add the files to the following path depending on your operating system

| System  | File Name        | File Path                                                                            |
| ------- | ---------------- | ------------------------------------------------------------------------------------ |
| Windows | .pg_service.conf | %APPDATA%\postgresql\\.pg_service.conf (SI la carpeta postgresql no existe, crearla) |
| Linux   | .pg_service.conf | ~/.pg_service.conf (Directorio local)                                                |

2. **Create a PostgreSQL container**

   In the `docker-compose.yml` file, there is a configuration for a postgresql-alpine image for local database creation. Make sure to change the following environment variables:

```bash
- POSTGRES_PASSWORD=(Same password as in the .pgpass file)
- POSTGRES_USER=username(Same user as in the .pgpass file)
```

</details>

<details>
<summary>SQLite</summary>

1. **Change Database Engine in settings.py**

In the settings.py file located in `gestion_escolar\settings.py` change the following part of code

```py
...
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        "OPTIONS": {
            "service": "db_service",
            "passfile": ".pgpass",
        },
    }
}
...
```

For this

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / "db.sqlite3",
    }
}
```

</details>

### Database Structure

1. **Users**
2. **Students**
3. **Teachers**
4. **Courses**
5. **Grades**

## **Swagger Path:**

## Architecture

![Arquitecutra](./Doc/img/Arquitectura%20Back%20Gestion%20Escolar.jpg)
