from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name='Марка')

    def __str__(self) -> str:
        return self.name


class Spool(models.Model):
    title = models.CharField(max_length=255, verbose_name='название')
    category = models.ForeignKey(
        Category, verbose_name='категория', blank=True, on_delete=models.PROTECT, null=True)
    count = models.IntegerField(verbose_name='количество', blank=True)
    whole = models.BooleanField(default=False, verbose_name='подавать целиком')
    price = models.FloatField(verbose_name='цена', blank=True, null=True)
    purchasePrice = models.FloatField(
        blank=True, null=True, verbose_name='закупочная цена')
    discount = models.FloatField(
        blank=True, null=True, default=0, verbose_name='скидка в рублях')
    discountPercentage = models.FloatField(
        blank=True, null=True, default=0, verbose_name='скидка в процентах')
    barcode = models.IntegerField(
        blank=True, null=True, verbose_name='штрихкод')
    length = models.CharField(
        max_length=255, verbose_name='метраж', blank=True)
    description = models.TextField(verbose_name='описание', blank=True)
    image1 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_1')
    image2 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_2')
    image3 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_3')
    image4 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_4')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Бобины"
