from django.contrib import admin
from .models import Category, Spool

admin.site.register(Category)
# admin.site.register(Spool)

# whole


@admin.register(Spool)
class VariablesYarnAdmin(admin.ModelAdmin):
    # prepopulated_fields = {"name": ("productMain",)} // не удалять!
    fields = (('title', 'category'), ('count', 'whole', ), 'description', 'price', 'purchasePrice',
              'discount', 'discountPercentage', 'barcode', 'image1', 'image2', 'image3', 'image4')
    list_display = ('title', 'category', 'count', 'price', 'whole')
    ordering = ('title',)
    search_fields = ('title', 'category',)
    list_filter = ('title',)
    list_editable = ('whole', 'count', 'price')
    list_display_links = ('title',)
    save_as = True
    # fieldsets = (
    #     ('обязательные поля', {
    #         'description': "заполните пжалста ",
    #         'fields': (('name', 'category'), ('length', 'wieght', 'needles'),
    #                    'price', 'purchasePrice', 'discount', 'discountPercentage', 'barcode',
    #                    'image', 'imageMain2', 'imageMain3', 'imageMain4', 'description', 'tag')
    #     }),
    # )
