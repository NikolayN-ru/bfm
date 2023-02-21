from django.contrib import admin
from .models import Tag, Category, VariablesYarn, Yarn


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ('country',)
    fieldsets = (
        ('обязательное поле', {
            'description': "заполните пжалста )",
            'fields': ('title', 'country', 'description')
        }),
        ('заполняется автоматически', {
            'description': "поле адресной строки",
            'fields': ('slug',)
        }),
    )


@admin.register(Yarn)
class YarnAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('name', 'price', 'discount',
                    'discountPercentage', 'category')
    list_filter = ('category',)
    # readonly_fields = ('price')
    list_editable = ('price', 'discount', 'discountPercentage',)
    ordering = ('-pk',)
    filter_horizontal = ('tag',)
    fieldsets = (
        ('обязательные поля', {
            'description': "заполните пжалста ",
            'fields': (('name', 'category'), ('length', 'wieght', 'needles'),
                       'price', 'purchasePrice', 'discount', 'discountPercentage', 'barcode',
                       'image', 'imageMain2', 'imageMain3', 'imageMain4', 'description', 'tag')
        }),
    )


@admin.register(VariablesYarn)
class VariablesYarnAdmin(admin.ModelAdmin):
    # prepopulated_fields = {"name": ("productMain",)} // не удалять!
    fields = (('productMain', 'name'), ('count', 'color', ),
              'image')
    list_display = ('name', 'count', 'color', 'productMain')
    ordering = ('name',)
    search_fields = ('name', 'color',)
    list_filter = ('productMain',)
    list_editable = ('productMain', 'count')
    list_display_links = ('name', 'color')
    save_as = True


admin.site.register(Tag)
admin.site.register(Category, CategoryAdmin)
