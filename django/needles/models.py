from django.db import models


class Variables(models.Model):
    name= models.CharField(max_length=100, verbose_name='Производитель')

    class Meta:
        verbose_name_plural = "Производитель"

    def __str__(self) -> str:
        return self.name


class Material(models.Model):
    name = models.CharField(max_length=100, verbose_name='Материал')

    class Meta:
        verbose_name_plural = "Материал"


class Type(models.Model):
    name= models.CharField(
        max_length=100, verbose_name='тип(круговые, прямые)')

    class Meta:
        verbose_name_plural = "тип"


class Length(models.Model):
    name= models.FloatField(default=0, verbose_name='длинна')

    class Meta:
        verbose_name_plural = "длинна"


class VariablesItem(models.Model):
    name = models.TextField(max_length=100, verbose_name='вариации', blank=True, null=True)

    class Meta:
        verbose_name_plural = "вариации"


class Needles(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название товара', blank=True, null=True)
    category = models.ForeignKey(
        Variables, verbose_name="производитель", on_delete=models.PROTECT, blank=True, null=True)
    material = models.ForeignKey(
        Material, verbose_name="материал", on_delete=models.PROTECT, blank=True, null=True)
    typeNeedles = models.ForeignKey(
        Type, verbose_name="тип(круговые, прямые)", on_delete=models.PROTECT, blank=True, null=True)
    length: models.ForeignKey(
        Length, verbose_name="длинна", on_delete=models.PROTECT, blank=True, null=True)
    description = models.TextField(blank=True, verbose_name='описание товара', null=True)
    price: models.FloatField(blank=True, verbose_name='цена', null=True)
    variablesItem = models.TextField(blank=True, verbose_name='вариации в формате JSON', null=True)

    class Meta:
        verbose_name_plural = "товар - спица"