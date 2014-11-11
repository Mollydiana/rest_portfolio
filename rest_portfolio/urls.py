from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from portfolio.api.views import UserViewSet, ProjectViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, base_name='users')
router.register(r'projects', ProjectViewSet, base_name='projects')
urlpatterns = patterns('',

    url(r'^', include(router.urls)), # Include router urls into our urlpatterns
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^index/', 'portfolio.views.index', name="index"),

    url(r'^admin/', include(admin.site.urls)),
)


