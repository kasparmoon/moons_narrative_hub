# narratives/admin.py

from django.contrib import admin
from .models import AuthorProfile, Category, Tag, Novel, Chapter, Narrative

admin.site.register(AuthorProfile)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Novel)
admin.site.register(Chapter)
admin.site.register(Narrative)