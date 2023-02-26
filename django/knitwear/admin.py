from django.contrib import admin
from .models import CategoryKnitwear, Knitwear

# Register your models here.
admin.site.register(Knitwear)
admin.site.register(CategoryKnitwear)
