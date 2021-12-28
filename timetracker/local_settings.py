import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'test-db',
        'USER': os.getenv('USER_DB'),
        'PASSWORD': os.getenv('PASSWORD_DB'),
        'HOST': os.getenv('HOST_DB'),
        'PORT': '5432',
    }
}

# STATIC_DIR = Path(BASE_DIR, 'static')
STATIC_URL = '/static/'
STATIC_ROOT = Path(BASE_DIR, 'static')
