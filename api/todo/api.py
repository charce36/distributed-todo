from rest_framework import routers, serializers, viewsets

from todo.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            'id',
            'title',
            'description',
            'completed'
        )


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


TODO_API_ROUTER = routers.DefaultRouter()
TODO_API_ROUTER.register(r'tasks', TaskViewSet)
