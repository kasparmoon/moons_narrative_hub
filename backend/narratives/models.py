# narratives/models.py

from django.db import models
from django.contrib.auth.models import User

# We will extend the built-in User model for author profiles
class AuthorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    # Rating based on posts & reads
    rating_score = models.IntegerField(default=0)
    # This will become the Author's Portfolio

    def __str__(self):
        return self.user.username

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Novel(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    core_concept = models.TextField()
    characters_bible = models.TextField(blank=True)
    author = models.ForeignKey(AuthorProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Chapter(models.Model):
    novel = models.ForeignKey(Novel, on_delete=models.CASCADE, related_name='chapters')
    title = models.CharField(max_length=200)
    body = models.TextField()
    chapter_number = models.PositiveIntegerField()
    published_date = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='chapter_images/', blank=True, null=True)
    views = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('novel', 'chapter_number')
        ordering = ['chapter_number']

    def __str__(self):
        return f"{self.novel.title} - Chapter {self.chapter_number}: {self.title}"

class Narrative(models.Model):
    NARRATIVE_TYPES = (
        ('blog', 'Blog Post'),
        ('story', 'Short Story'),
        ('poem', 'Poem'),
        ('personal', 'Personal Experience'),
        ('social', 'Social Issue')
    )

    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    body = models.TextField()
    author = models.ForeignKey(AuthorProfile, on_delete=models.CASCADE)
    post_type = models.CharField(max_length=10, choices=NARRATIVE_TYPES, default='blog')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='narrative_images/', blank=True, null=True)
    categories = models.ManyToManyField(Category, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title