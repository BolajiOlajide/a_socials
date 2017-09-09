''' Script Used to convert python objects to json objects.'''

from django.contrib.auth.models import User

from rest_framework import serializers
from .models import GoogleUser, Category, Event, Interest


class UserSerializer(serializers.ModelSerializer):
    """User Model serializer class."""

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name')


class GoogleUserSerializer(serializers.ModelSerializer):
    """GoogleUser Model serializer class."""

    class Meta:
        model = GoogleUser
        fields = ('google_id', 'app_user', 'appuser_picture')
        depth = 1


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = ('id', 'title', 'description', 'venue', 'date', 'time', 'social_event', 'featured_image', 'created_at')


class CategorySerializer(serializers.ModelSerializer):
    """Category Model serializer class."""

    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'members_count', 'featured_image', 'events')


class InterestSerializer(serializers.ModelSerializer):
    
    follower = UserSerializer(many=True, read_only=True)
    follower_category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Interest
        fields = ('follower', 'follower_category')
