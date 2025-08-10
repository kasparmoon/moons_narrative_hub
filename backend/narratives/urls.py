# narratives/urls.py

from rest_framework.routers import DefaultRouter
from .views import (
    NovelViewSet, ChapterViewSet, NovellaViewSet, NovellaChapterViewSet,
    ShortStoryViewSet, ShortStoryPartViewSet, NarrativeViewSet,
    CategoryViewSet, TagViewSet
)

router = DefaultRouter()
router.register(r'novels', NovelViewSet)
router.register(r'chapters', ChapterViewSet)
router.register(r'novellas', NovellaViewSet)
router.register(r'novella-chapters', NovellaChapterViewSet)
router.register(r'short-stories', ShortStoryViewSet)
router.register(r'short-story-parts', ShortStoryPartViewSet)
router.register(r'narratives', NarrativeViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)

urlpatterns = router.urls