from django.contrib import admin
from .models import Variables, Material, Type, Length, VariablesItem, Needles

admin.site.register(Variables)
admin.site.register(Material)
admin.site.register(Type)
admin.site.register(Length)
admin.site.register(VariablesItem)
admin.site.register(Needles)
