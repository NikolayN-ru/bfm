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
    length = models.CharField(
        max_length=255, verbose_name='метраж', blank=True)
    description = models.CharField(
        max_length=255, verbose_name='описание', blank=True)
    image1 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_1')
    image2 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_2')
    image3 = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение бобины_3')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Бобины"
