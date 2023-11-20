<script setup lang="ts">
defineProps<{
  data: TArticleListBlock;
}>();
</script>

<template>
  <div class="article-list">
    <p class="article-list__title">{{ data.title }}</p>
    <div class="article-list-content">
      <ArticleCard
        v-for="article in data.articles"
        :key="article.link"
        :src="article.image"
        :title="article.title"
        :link="article.link"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  gap: 50px;

  .article-list__title {
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    color: var(--Text);
  }

  .article-list-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
}
</style>
