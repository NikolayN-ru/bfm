# Generated by Django 4.1.7 on 2023-02-19 16:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
            ],
            options={
                "ordering": ["title"],
            },
        ),
        migrations.CreateModel(
            name="Tag",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=50)),
            ],
            options={
                "ordering": ["title"],
            },
        ),
        migrations.CreateModel(
            name="Post",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("body", models.TextField(blank=True, null=True)),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="blogImage/"),
                ),
                ("body2", models.TextField(blank=True, null=True)),
                (
                    "image2",
                    models.ImageField(blank=True, null=True, upload_to="blogImage/"),
                ),
                ("body3", models.TextField(blank=True, null=True)),
                (
                    "image3",
                    models.ImageField(blank=True, null=True, upload_to="blogImage/"),
                ),
                ("date", models.DateField(auto_now=True, verbose_name="дата")),
                ("visitors", models.IntegerField(blank=True, default=0)),
                ("num_stars", models.IntegerField(blank=True, null=True)),
                (
                    "shirt_size",
                    models.CharField(
                        blank=True,
                        choices=[("S", "Small"), ("M", "Medium"), ("L", "Large")],
                        max_length=1,
                        verbose_name="главность поста",
                    ),
                ),
                (
                    "available",
                    models.BooleanField(
                        blank=True,
                        default=True,
                        null=True,
                        verbose_name="доступность читателям",
                    ),
                ),
                (
                    "author",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="blog.category"
                    ),
                ),
                ("tags", models.ManyToManyField(blank=True, to="blog.tag")),
            ],
            options={
                "ordering": ["date"],
            },
        ),
    ]
