<script setup lang="ts">
defineProps<{
  src: string;
  title: string;
  link: string;
}>();
</script>

<template>
  <article class="article-card">
    <figure class="article-card__content">
      <NuxtImg class="article-card__img" :src="src" width="427px" height="320px" quality="100" />
      <figcaption class="article-card__caption">{{ title }}</figcaption>
    </figure>
    <NuxtLink :to="link">
      <UiButton type="primary">Читать</UiButton>
    </NuxtLink>
  </article>
</template>

<style lang="scss" scoped>
.article-card {
  width: 427px;
  height: 476px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .article-card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    .article-card__img {
      object-fit: cover;
    }

    .article-card__caption {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 22px;
      font-weight: 800;
      line-height: 30px;
      color: var(--Text);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
