from rest_framework import serializers
from yarn3.models import Yarn, Tag, Category, VariablesYarn


class YarnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Yarn
        fields = '__all__'


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
