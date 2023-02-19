from django.urls import path

from .views import YarnAPIView, DetailYarn, TagAPI, VariablesYarnView, DetailVariablesYarn, TagAPIDetail

urlpatterns = [
    path('product/', YarnAPIView.as_view()),
    path('product/<str:data>/', DetailYarn.as_view()),
    # path('variables/', VariablesYarnView.as_view()),
    path('variables/<str:data>/', VariablesYarnView.as_view()),
    # path('variables/<int:pk>/', DetailVariablesYarn.as_view()),
    path('tag/', TagAPI.as_view()),
    path('tag/<int:pk>/', TagAPIDetail.as_view()),
]
