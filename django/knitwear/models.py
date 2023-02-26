from django.db import models


class CategoryKnitwear(models.Model):
    name = models.CharField(
        max_length=255, verbose_name='категория Вязанного изделия')

    def __str__(self) -> str:
        return self.name


class Knitwear(models.Model):
    name = models.CharField(max_length=255, verbose_name='название')
    category = models.ForeignKey(
        CategoryKnitwear, related_name='knitwearCategory', on_delete=models.PROTECT, blank=True, verbose_name='категория')
    description = models.TextField(blank=True)
    price = models.FloatField(verbose_name='цена')
    purchasePrice = models.FloatField(
        blank=True, null=True, verbose_name='закупочная цена')
    discount = models.FloatField(
        blank=True, null=True, default=0, verbose_name='скидка в рублях')
    discountPercentage = models.FloatField(
        blank=True, null=True, default=0, verbose_name='скидка в процентах')
    barcode = models.IntegerField(
        blank=True, null=True, verbose_name='штрихкод')
    image = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение-1')
    imageMain2 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение-2')
    imageMain3 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение-3')
    imageMain4 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение-4')

    def __str__(self) -> str:
        return self.name
