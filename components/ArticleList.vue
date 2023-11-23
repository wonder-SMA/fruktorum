<script setup lang="ts">
defineProps<{
  data: TArticleListBlock;
}>();
</script>

<template lang="pug">
div.article-list
  p.article-list__title {{ data.title }}
  div.article-list-content
    ArticleCard(v-for="article in data.articles" :key="article.link" :src="article.image" :title="article.title"
		 :link="article.link")
</template>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-direction: column;
  gap: clamp(50px / 2.5, 100vw * 50 / 1340, 50px);

  .article-list__title {
    text-align: center;
    font-size: clamp(34px / 1.4, 100vw * 34 / 1340, 34px);
    font-weight: 800;
    line-height: calc(46 / 34);
    color: var(--Text);
  }

  .article-list-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(20px, 100vw * 30 / 1340, 30px);
    place-items: center;
  }
}

@media screen and (min-width: 576px) {
  .article-list {
    .article-list__title {
      text-align: left;
    }

    .article-list-content {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media screen and (min-width: 992px) {
  .article-list {
    .article-list-content {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
