# narratives/serializers.py - FINAL CORRECTED VERSION

from rest_framework import serializers
from .models import (
    Novel, Chapter, Novella, NovellaChapter,
    ShortStory, ShortStoryPart, Narrative, Category, Tag
)

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'

class NovelSerializer(serializers.ModelSerializer):
    chapters = ChapterSerializer(many=True, read_only=True)

    class Meta:
        model = Novel
        fields = '__all__'

class NovellaChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NovellaChapter
        fields = '__all__'

class NovellaSerializer(serializers.ModelSerializer):
    chapters = NovellaChapterSerializer(many=True, read_only=True)

    class Meta:
        model = Novella
        fields = '__all__'

class ShortStoryPartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortStoryPart
        fields = '__all__'

class ShortStorySerializer(serializers.ModelSerializer):
    parts = ShortStoryPartSerializer(many=True, read_only=True)

    class Meta:
        model = ShortStory
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class NarrativeSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Narrative
        fields = '__all__'