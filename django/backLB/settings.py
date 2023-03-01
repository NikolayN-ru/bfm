from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = "django-insecure-9c6%034-42%ozwr2ksuo^!lx7^@n3v#sj0$&q#rmv*opmg&ejj"
DEBUG = True
ALLOWED_HOSTS = [
    'backend',
    '127.0.0.1',
    '*',
    '77.222.63.220'
]

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "rest_framework",
    "rest_framework.authtoken",
    "corsheaders",
    "ckeditor",
    "djoser",

    "yarn3",
    "api",
    "blog.apps.BlogConfig",
    "needles2",
    "spool",
    "knitwear",
]

# NEW - любые права доступа у всех
REST_FRAMEWORK = {
    # 'DEFAULT_PERMISSION_CLASSES': [
    # 'rest_framework.permissions.AllowAny',
    # ]
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication'
    )
}

CORS_ALLOWED_ORIGINS = [
    # "https://example.com",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://77.222.63.220:3000",
    # "http://127.0.0.1:3000",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "backLB.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backLB.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "ru"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# STATICFILES_DIRS = [
# os.path.join(BASE_DIR, "static"),
# ]

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': '#/password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': '#/username/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': '#/activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': False,
    'SERIALIZERS': {}, 
}

# login
# localhost:8000/auth/token/login
# body
# username admin
# password admin

#protected query
# http://localhost:8000/api/blog/
# headers
# Authorization
# Token c8b670b7836240078f7c4f895fd9fafd71c1e1c3

# logout
# localhost:8000/auth/token/logout/
# Authorization
# Token c8b670b7836240078f7c4f895fd9fafd71c1e1c3
