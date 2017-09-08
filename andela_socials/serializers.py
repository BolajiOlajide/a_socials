''' Script Used to convert python objects to json objects.'''

from django.contrib.auth.models import User

from rest_framework import serializers
from .models import GoogleUser, Category, Message, Interest


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


class CategorySerializer(serializers.ModelSerializer):
    """Category Model serializer class."""

    class Meta:
        model = Category
        fields = ('name', )


class MessageSerializer(serializers.ModelSerializer):
    
    creator = UserSerializer(many=True, read_only=True)
    social_event = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Message
        fields = ('title', 'content', 'creator', 'social_event')


class InterestSerializer(serializers.ModelSerializer):
    
    follower = UserSerializer(many=True, read_only=True)
    follower_category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Interest
        fields = ('follower', 'follower_category')
