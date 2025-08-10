# narratives/views.py

from rest_framework import viewsets
from .models import (
    Novel, Chapter, Novella, NovellaChapter,
    ShortStory, ShortStoryPart, Narrative, Category, Tag
)
from .serializers import (
    NovelSerializer, ChapterSerializer, NovellaSerializer, NovellaChapterSerializer,
    ShortStorySerializer, ShortStoryPartSerializer, NarrativeSerializer, CategorySerializer, TagSerializer
)

class NovelViewSet(viewsets.ModelViewSet):
    queryset = Novel.objects.all()
    serializer_class = NovelSerializer

class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class NovellaViewSet(viewsets.ModelViewSet):
    queryset = Novella.objects.all()
    serializer_class = NovellaSerializer

class NovellaChapterViewSet(viewsets.ModelViewSet):
    queryset = NovellaChapter.objects.all()
    serializer_class = NovellaChapterSerializer

class ShortStoryViewSet(viewsets.ModelViewSet):
    queryset = ShortStory.objects.all()
    serializer_class = ShortStorySerializer

class ShortStoryPartViewSet(viewsets.ModelViewSet):
    queryset = ShortStoryPart.objects.all()
    serializer_class = ShortStoryPartSerializer

class NarrativeViewSet(viewsets.ModelViewSet):
    queryset = Narrative.objects.all()
    serializer_class = NarrativeSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer