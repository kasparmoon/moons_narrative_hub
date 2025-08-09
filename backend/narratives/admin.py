# narratives/admin.py - Final Version
from django.contrib import admin
from .models import (
    AuthorProfile, Category, Tag, Novel, Chapter,
    Novella, NovellaChapter, ShortStory, ShortStoryPart,
    Narrative
)

# Inlines allow related models to be edited on the same page as the parent
class ChapterInline(admin.TabularInline):
    model = Chapter
    extra = 1  # Number of empty forms to display
    show_change_link = True # Allow editing existing chapters

class NovellaChapterInline(admin.TabularInline):
    model = NovellaChapter
    extra = 1
    show_change_link = True

class ShortStoryPartInline(admin.TabularInline):
    model = ShortStoryPart
    extra = 1
    show_change_link = True

@admin.register(AuthorProfile)
class AuthorProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'rating_score')
    search_fields = ('user__username',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Novel)
class NovelAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    search_fields = ('title', 'author__user__username')
    list_filter = ('author',)
    inlines = [ChapterInline]  # Attach chapters to the novel page

@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    list_display = ('title', 'novel', 'chapter_number', 'views', 'published_date')
    list_filter = ('novel', 'published_date')
    search_fields = ('title', 'novel__title')

@admin.register(Novella)
class NovellaAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    search_fields = ('title', 'author__user__username')
    list_filter = ('author',)
    inlines = [NovellaChapterInline] # Attach novella chapters

@admin.register(NovellaChapter)
class NovellaChapterAdmin(admin.ModelAdmin):
    list_display = ('title', 'novella', 'chapter_number', 'views', 'published_date')
    list_filter = ('novella', 'published_date')
    search_fields = ('title', 'novella__title')

@admin.register(ShortStory)
class ShortStoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at')
    search_fields = ('title', 'author__user__username')
    list_filter = ('author',)
    inlines = [ShortStoryPartInline] # Attach short story parts

@admin.register(ShortStoryPart)
class ShortStoryPartAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_story', 'part_number', 'views', 'published_date')
    list_filter = ('short_story', 'published_date')
    search_fields = ('title', 'short_story__title')

@admin.register(Narrative)
class NarrativeAdmin(admin.ModelAdmin):
    list_display = ('title', 'post_type', 'author', 'created_at', 'views')
    search_fields = ('title', 'author__user__username')
    list_filter = ('author', 'post_type', 'created_at')
    filter_horizontal = ('categories', 'tags') # Use a nice UI for ManyToMany fields