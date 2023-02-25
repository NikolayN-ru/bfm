from rest_framework import serializers
from yarn3.models import Yarn, Tag, Category, VariablesYarn
from spool.models import Category as CategorySpool, Spool
from blog.models import Post


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class VariablesYarnSerializer(serializers.ModelSerializer):
    class Meta:
        model = VariablesYarn
        fields = '__all__'


class YarnSerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True)
    category = CategorySerializer()

    class Meta:
        model = Yarn
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('pk', 'title', 'author', 'body', 'image', 'body2',
                  'image2', 'body3', 'image3', 'date', 'category')


class CategorySpoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorySpool
        fields = '__all__'
