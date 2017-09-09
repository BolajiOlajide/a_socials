from django.contrib import admin

from .models import Category, GoogleUser, Interest, Message


class CategoryUserAdmin(admin.ModelAdmin):
    """Category admin model class defined."""

    search_fields = ['^name']

    fieldsets = (
        ("Basic Information", {
            'fields': ('name',)
        }),
    )

admin.site.register(Category, CategoryUserAdmin)
admin.site.register(Interest)