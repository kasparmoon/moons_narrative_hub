# narratives/models.py - FINAL VERSION

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
    author = models.ForeignKey(AuthorProfile, on_delete=models.CASCADE, related_name='novels')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='novel_images/', blank=True, null=True)

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

class Novella(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    author = models.ForeignKey(AuthorProfile, on_delete=models.CASCADE, related_name='novellas')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='novella_images/', blank=True, null=True)

    def __str__(self):
        return self.title

class NovellaChapter(models.Model):
    novella = models.ForeignKey(Novella, on_delete=models.CASCADE, related_name='chapters')
    title = models.CharField(max_length=200)
    body = models.TextField()
    chapter_number = models.PositiveIntegerField()
    published_date = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views = models.PositiveIntegerField(default=0)
    featured_image = models.ImageField(upload_to='novella_chapter_images/', blank=True, null=True)

    class Meta:
        unique_together = ('novella', 'chapter_number')
        ordering = ['chapter_number']

    def __str__(self):
        return f"{self.novella.title} - Chapter {self.chapter_number}: {self.title}"


class ShortStory(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(AuthorProfile, on_delete=models.CASCADE, related_name='short_stories')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='short_story_images/', blank=True, null=True)

    def __str__(self):
        return self.title

class ShortStoryPart(models.Model):
    short_story = models.ForeignKey(ShortStory, on_delete=models.CASCADE, related_name='parts')
    title = models.CharField(max_length=200)
    body = models.TextField()
    part_number = models.PositiveIntegerField()
    published_date = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views = models.PositiveIntegerField(default=0)
    featured_image = models.ImageField(upload_to='short_story_part_images/', blank=True, null=True)

    class Meta:
        unique_together = ('short_story', 'part_number')
        ordering = ['part_number']

    def __str__(self):
        return f"{self.short_story.title} - Part {self.part_number}: {self.title}"

class Narrative(models.Model):
    NARRATIVE_TYPES = (
        ('blog', 'Blog Post'),
        ('personal', 'Personal Experience'),
        ('social', 'Social Issue')
    )

    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    body = models.TextField()
    author = models.ForeignKey(AuthorProfile, on_delete=models.CASCADE, related_name='narratives')
    post_type = models.CharField(max_length=10, choices=NARRATIVE_TYPES, default='blog')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='narrative_images/', blank=True, null=True)
    categories = models.ManyToManyField(Category, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title