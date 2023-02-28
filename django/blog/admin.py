from django.contrib import admin
from .models import Post, Tag, Category, Comments
from django import forms
from ckeditor.widgets import CKEditorWidget

admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(Comments)


class EventAdminForm(forms.ModelForm):
    # description = forms.CharField(widget=CKEditorWidget())
    body = forms.CharField(widget=CKEditorWidget())
    body2 = forms.CharField(widget=CKEditorWidget())
    body3 = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Post
        fields = '__all__'


@admin.register(Post)
class ProductAdmin(admin.ModelAdmin):
    form = EventAdminForm
    list_display = ('title', 'available', 'date', 'category')
    list_filter = ('category', 'available', 'tags')
    list_editable = ('category',)
    ordering = ('-pk',)
    # date_hierarchy
    search_fields = ('title',)
    filter_horizontal = ('tags',)
    # prepopulated_fields = {'title': ('title',)}
    fieldsets = (

        ('Основная информация', {
            'description': "These fields are required for each event.",
            'fields': (('title'), ('body', 'image', 'body2', 'image2', 'body3', 'image3', 'shirt_size'),)
        }),
        ('Optional Information', {
            # 'classes': ('collapse',),
            'fields': ('author', 'tags', 'category', 'visitors', 'num_stars', 'available',)
        }),

    )
