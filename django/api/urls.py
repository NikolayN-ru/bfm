from django.urls import path

from .views import (
    NeedlesView, NeedleView, CategorySpoolView, CategoryView,
    CategoryViewDetail, DetailTodo, NewCreatePostView,
    PostAPIView, SpoolView, SpoolViewItem, YarnAPIView,
    DetailYarn, TagAPI, VariablesYarnView, DetailVariablesYarn, TagAPIDetail,
    NeedleViewChangeVariable)

urlpatterns = [
    path('blog/<int:pk>/', DetailTodo.as_view()),
    path('blog-new/', NewCreatePostView.as_view()),
    path('blog/', PostAPIView.as_view()),
    path('category/', CategoryView.as_view()),
    path('category/<int:pk>', CategoryViewDetail.as_view()),
    path('product/', YarnAPIView.as_view()),
    path('product/<str:data>/', DetailYarn.as_view()),
    path('variables/<str:data>/', VariablesYarnView.as_view()),
    path('tag/', TagAPI.as_view()),
    path('tag/<int:pk>/', TagAPIDetail.as_view()),
    path('spoolCategory/', CategorySpoolView.as_view()),
    path('spool/', SpoolView.as_view()),
    path('spool/<int:pk>', SpoolViewItem.as_view()),
    path('needles/', NeedlesView.as_view()),
    path('needles/change/<int:pk>', NeedleViewChangeVariable.as_view()),
    path('needles/<int:pk>', NeedleView.as_view()),
    # path(''),
]
