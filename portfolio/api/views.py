from compiler.ast import obj
from rest_framework import viewsets, status
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from portfolio.api.permissions import IsOwnerOrReadOnly
from portfolio.api.serializers import UserSerializer, ProjectSerializer
from portfolio.models import User, Project


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_fields = ('id', 'first_name', 'last_name', 'email')
    # /users/?search=rudy searches across all listed fields
    search_fields = ('first_name', 'last_name', 'about')
    # /users/?ordering=first_name orders by first name alphabetically
    ordering_fields = ('first_name', 'last_name')
    # /users/ default ordering is by the highest id
    ordering = ('-id',)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_fields = ('owner__username', 'created_time',)
    ordering_fields = ('created_time',)
    permission_classes = (IsOwnerOrReadOnly,)

    @detail_route(methods=['post'])
    def follow(self, request, pk):
        project = Project.objects.get(pk=pk)
        follower_id = request.DATA.get('follower', None)
        project.follower.add(follower_id)
        return Response(status=status.HTTP_200_OK)

    @list_route()
    def recent_users(self, request):
        recent_users = User.objects.all().order('-last_login')
        page = self.paginate_queryset(recent_users)
        serializer = self.get_pagination_serializer(page)
        return Response(serializer.data)

    def pre_save(self, obj):
        obj.owner = self.request.user

    def get_queryset(self):
        queryset = Project.objects.all()
        username = self.request.QUERY_PARAMS.get('username', None)
        if username is not None:  # Optionally filters against 'username' query param
            queryset = queryset.filter(owner__username=username)
        return queryset

