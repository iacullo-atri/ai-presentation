from django.db import models


class Todo(models.Model):
    """A single to-do item."""

    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Newest first, but completed items sink to the bottom.
        ordering = ["completed", "-created_at"]

    def __str__(self):
        return self.title
