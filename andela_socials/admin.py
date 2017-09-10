from django.contrib import admin

from .models import Category, GoogleUser, Interest, Event, Attend


class CategoryUserAdmin(admin.ModelAdmin):
    """Category admin model class defined."""

    search_fields = ['^name']

    fieldsets = (
        ("Basic Information", {
            'fields': ('name', 'featured_image')
        }),
    )

admin.site.register(Category, CategoryUserAdmin)
admin.site.register(Interest)
admin.site.register(Event)
admin.site.register(Attend)
