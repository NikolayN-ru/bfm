from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = 'LidiyaBoutique'
admin.site.site_title = 'LidiyaBoutique - магазин пряжи'
admin.site.index_title = 'LidiyaBoutique админка'


urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
    # path('ckeditor/', include('ckeditor_uploader.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

# urlpatterns = [
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
