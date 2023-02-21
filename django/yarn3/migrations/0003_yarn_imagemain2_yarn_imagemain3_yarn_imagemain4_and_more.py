# Generated by Django 4.1.7 on 2023-02-21 13:50

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("yarn3", "0002_alter_category_options_alter_tag_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="yarn",
            name="imageMain2",
            field=models.ImageField(
                blank=True, null=True, upload_to="uploads", verbose_name="изображение-2"
            ),
        ),
        migrations.AddField(
            model_name="yarn",
            name="imageMain3",
            field=models.ImageField(
                blank=True, null=True, upload_to="uploads", verbose_name="изображение-3"
            ),
        ),
        migrations.AddField(
            model_name="yarn",
            name="imageMain4",
            field=models.ImageField(
                blank=True, null=True, upload_to="uploads", verbose_name="изображение-4"
            ),
        ),
        migrations.AlterField(
            model_name="yarn",
            name="image",
            field=models.ImageField(
                blank=True, null=True, upload_to="uploads", verbose_name="изображение-1"
            ),
        ),
    ]
