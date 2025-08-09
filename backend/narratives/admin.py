# narratives/admin.py - FINAL VERSION

from django.contrib import admin
from .models import (
    AuthorProfile, Category, Tag, Novel, Chapter, 
    Novella, NovellaChapter, ShortStory, ShortStoryPart,
    Narrative
)

admin.site.register(AuthorProfile)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Novel)
admin.site.register(Chapter)
admin.site.register(Novella)
admin.site.register(NovellaChapter)
admin.site.register(ShortStory)
admin.site.register(ShortStoryPart)
admin.site.register(Narrative)