from django.contrib.auth.models import User

from rest_framework import serializers

from .models import GoogleUser, Category, Event, Interest, Attend

''' Script Used to convert python objects to json objects.'''


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

    creator = UserSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ('id', 'title', 'description', 'venue', 'date', 'time', 'social_event', 'creator', 'featured_image',
                  'created_at')


class AttendanceSerializer(serializers.ModelSerializer):
    """Attend Model serializer class."""

    user = UserSerializer(read_only=True)
    event = EventSerializer(read_only=True)

    class Meta:
        model = Attend
        fields = ('user', 'event')


class EventDetailSerializer(serializers.ModelSerializer):

    attend = AttendanceSerializer(many=True, read_only=True)
    creator = UserSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ('id', 'title', 'description', 'venue', 'date', 'time', 'social_event', 'creator', 'featured_image',
                  'created_at', 'attend')


class CategorySerializer(serializers.ModelSerializer):
    """Category Model serializer class."""

    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'members_count', 'featured_image', 'description', 'events')


class InterestSerializer(serializers.ModelSerializer):

    follower = UserSerializer(read_only=True)
    follower_category = CategorySerializer(read_only=True)

    class Meta:
        model = Interest
        fields = ('follower', 'follower_category')
