from django.db import models


class Tag(models.Model):
    title = models.CharField(max_length=255, verbose_name='имя тега')

    class Meta:
        verbose_name_plural = "Состав"

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=255, verbose_name='марка')
    slug = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Производитель"

    def __str__(self):
        return self.title


class Yarn(models.Model):
    name = models.CharField(max_length=255, blank=True,
                            null=True, verbose_name='Название товара')
    category = models.ForeignKey(
        Category, on_delete=models.DO_NOTHING, verbose_name='категория')
    tag = models.ManyToManyField(
        Tag, verbose_name='тег', blank=True, null=True, related_name='tag')
    length = models.IntegerField(verbose_name='длина мотка')
    wieght = models.IntegerField(verbose_name='вес мотка')
    needles = models.CharField(
        max_length=255, verbose_name='рекомендуемые спицы')
    description = models.TextField(verbose_name='большой описание')
    price = models.FloatField(verbose_name='цена')
    image = models.ImageField(
        upload_to='uploads', blank=True, null=True, verbose_name='изображение')
    # variables = models.ForeignKey(
# "VariablesYarn", on_delete=models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Пряжа"

    def __str__(self):
        return self.name


class VariablesYarn(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True, default='')
    color = models.CharField(max_length=255, verbose_name='номер цвета')
    count = models.IntegerField(verbose_name='кол-во штук')
    image = models.ImageField(
        upload_to='uploads/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    productMain = models.ForeignKey(
        Yarn, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Номер цвета"

    def __str__(self):
        return self.name
