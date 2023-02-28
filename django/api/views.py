from .serializers import PostSerializer, PostSerializerItem, SpoolSerializer
from blog.models import Post
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from yarn3.models import Yarn, VariablesYarn, Category, Tag
from spool.models import Category as CategorySpool, Spool
from .serializers import (YarnSerializer, TagSerializer,
                          VariablesYarnSerializer, CategorySerializer, CategorySpoolSerializer)


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryViewDetail(APIView):
    def get(self, request, pk):
        q = request.body
        # print(request.body, 'request')
        # print(request.GET.get('filter'), 'request')
        yarn = Yarn.objects.filter(category=pk)
        # many=True-> говорит что будет несколько записей
        serializer = YarnSerializer(yarn, many=True)
        return Response(serializer.data)


class YarnAPIView(generics.ListAPIView):
    queryset = Yarn.objects.all()
    serializer_class = YarnSerializer


class DetailYarn(APIView):
    def get(self, request, data):
        product = Yarn.objects.filter(name__startswith=data)
        serializer = YarnSerializer(product, many=True)
        return Response(serializer.data)


class TagAPI(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagAPIDetail(generics.RetrieveAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class VariablesYarnView(APIView):
    def get(self, request, data):
        products = VariablesYarn.objects.filter(name__startswith=data)
        serializer = VariablesYarnSerializer(products, many=True)
        return Response(serializer.data)

# class VariablesYarnView(generics.ListAPIView):
    # def get_queryset(self, data):
        # queryset = Category.objects.filter(name__startswith=data)
        # queryset['courses'] = courses
        # return queryset


class DetailVariablesYarn(generics.RetrieveAPIView):
    queryset = VariablesYarn.objects.all()
    serializer_class = VariablesYarnSerializer

    # def get_queryset(self):
    #     queryset = Category.objects.all()
    #     courses = list(VariablesYarn.objects.filter(category=pk))
    #     queryset['courses'] = courses
    #     return queryset


class PostAPIView(generics.ListAPIView):
    '''вывод списка постов приложения Blog'''
    queryset = Post.objects.all().filter(available=True).order_by("-pk")
    serializer_class = PostSerializer


# class DetailTodo(generics.RetrieveAPIView):
class DetailTodo(APIView):
    '''один пост приложения Blog'''

    def get(self, request, pk):
        queryset = Post.objects.get(id=pk)
        # serializer_class = PostSerializerItem
        serializer = PostSerializerItem(queryset)
        return Response(serializer.data)


# class NewCreatePostView(APIView):
#     ''' добавление поста в модель блога '''

#     def post(self, request):
#         newPort = PostSerializer(data=request.data)
#         print(request.data, 'request.data')
#         if newPort.is_valid():
#             newPort.save()
#         return Response(status=201)

class NewCreatePostView(generics.CreateAPIView):
    ''' добавление поста в модель блога '''
    serializer_class = PostSerializer
    def perform_create(self, serializer):
        serializer.save()


# бобины
class CategorySpoolView(generics.ListAPIView):
    queryset = CategorySpool.objects.all()
    serializer_class = CategorySpoolSerializer


class SpoolView(generics.ListAPIView):
    # queryset = Spool.objects.all().filter(available=True).order_by
    queryset = Spool.objects.all()
    serializer_class = SpoolSerializer


class SpoolViewItem(generics.RetrieveAPIView):
    '''вывод одной бобины'''
    queryset = Spool.objects.all()
    serializer_class = SpoolSerializer
