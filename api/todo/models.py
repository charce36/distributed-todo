from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=140)
    description = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return '{} - {}'.format(self.id, self.title)
