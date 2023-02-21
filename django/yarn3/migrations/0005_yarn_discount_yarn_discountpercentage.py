# Generated by Django 4.1.7 on 2023-02-21 16:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("yarn3", "0004_yarn_barcode_yarn_purchaseprice"),
    ]

    operations = [
        migrations.AddField(
            model_name="yarn",
            name="discount",
            field=models.FloatField(
                blank=True, null=True, verbose_name="скидка в рублях"
            ),
        ),
        migrations.AddField(
            model_name="yarn",
            name="discountPercentage",
            field=models.FloatField(
                blank=True, null=True, verbose_name="скидка в процентах"
            ),
        ),
    ]