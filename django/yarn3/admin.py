from django.contrib import admin
from .models import Tag, Category, VariablesYarn, Yarn


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}



@admin.register(VariablesYarn)
class VariablesYarnAdmin(admin.ModelAdmin):
    list_display = ('name', 'color', 'count')
    ordering = ('name',)
    search_fields = ('name',)


admin.site.register(Tag)
admin.site.register(Category, CategoryAdmin)
# admin.site.register(VariablesYarn)
admin.site.register(Yarn)