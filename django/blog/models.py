from django.db import models
from django.contrib.auth.models import User


class Tag(models.Model):
    title = models.CharField(max_length=50)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=100)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title


class Post(models.Model):
    SHIRT_SIZES = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    )
    title = models.CharField(max_length=200)
    body = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='blogImage/', blank=True, null=True)
    body2 = models.TextField(blank=True, null=True)
    image2 = models.ImageField(upload_to='blogImage/', blank=True, null=True)
    body3 = models.TextField(blank=True, null=True)
    image3 = models.ImageField(upload_to='blogImage/', blank=True, null=True)
    date = models.DateField(auto_now=True, verbose_name='дата')
    tags = models.ManyToManyField(Tag, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, blank=True, null=True)
    visitors = models.IntegerField(default=0, blank=True)
    num_stars = models.IntegerField(blank=True, null=True)
    shirt_size = models.CharField(
        max_length=1, choices=SHIRT_SIZES, verbose_name='главность поста', blank=True)
    available = models.BooleanField(
        default=True, null=True, blank=True, verbose_name='доступность читателям')
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return self.title


class Comments(models.Model):
    name = models.CharField("Имя", max_length=100)
    text = models.TextField("Сообщение", max_length=5000)
    perent = models.ForeignKey(
        "self", verbose_name="Родитель", on_delete=models.SET_NULL, blank=True, null=True)
    post = models.ForeignKey(Post, verbose_name="пост",
                             on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f"{self.name} - {self.post}"
