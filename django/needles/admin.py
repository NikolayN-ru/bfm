from django.contrib import admin
from .models import Variables, Material, Type, Length, VariablesItem, Needles

admin.site.register(Variables)
admin.site.register(Material)
admin.site.register(Type)
admin.site.register(Length)
# admin.site.register(VariablesItem)
admin.site.register(Needles)

# @admin.register(Variables)
# class VariablesAdmin(admin.ModelAdmin):
    # fields = ('pk', 'name',)
    # fields = (('productMain', 'name'), ('count', 'color', ),
            #   'image')
    # list_display = ('name', 'count', 'color', 'productMain')
    # list_display_links = ('name', 'color')
    # save_as = True