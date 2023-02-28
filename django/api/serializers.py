from rest_framework import serializers
from yarn3.models import Yarn, Tag, Category, VariablesYarn
from spool.models import Category as CategorySpool, Spool
from blog.models import Post, Comments


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class VariablesYarnSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field="title", read_only=True)

    class Meta:
        model = VariablesYarn
        fields = '__all__'


class YarnSerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True)
    category = CategorySerializer()

    class Meta:
        model = Yarn
        fields = '__all__'


# коментарии поста
class CommentsSerializer(serializers.ModelSerializer):
    '''коментарии поста'''
    model = Comments
    # fields = "__all__"
    fields = ("name", "text", "post")


# посты
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('pk', 'title', 'author', 'body', 'image', 'body2',
                  'image2', 'body3', 'image3', 'date', 'category')


class PostSerializerItem(serializers.ModelSerializer):
    '''пост приложения blog'''
    comments = CommentsSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = "__all__"


# бобины
class CategorySpoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorySpool
        fields = '__all__'


class SpoolSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field="name", read_only=True)  # категория не как id а как имя

    class Meta:
        model = Spool
        fields = '__all__'
