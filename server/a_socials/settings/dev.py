""" Development specific settings."""
from .base import *

ALLOWED_HOSTS = ['*']

TEST_RUNNER = 'snapshottest.django.TestRunner'

INSTALLED_APPS = [
    *INSTALLED_APPS,
    'dynamic_fixtures'
]

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': dotenv.get('DB_NAME'),
        'USER': dotenv.get('DB_USER'),
        'PASSWORD': dotenv.get('DB_PASSWORD'),
        'PORT': dotenv.get('DB_PORT'),
        'HOST': dotenv.get('DB_HOST')
    }
}

MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media')
MEDIA_URL = '/media/'

ENVIRONMENT = "development"
