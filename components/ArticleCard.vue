<script setup lang="ts">
defineProps<{
  src: string;
  title: string;
  link: string;
}>();
</script>

<template lang="pug">
article.article-card
	figure.article-card__content
		NuxtImg.article-card__img(:src="src" quality="100")
		figcaption.article-card__caption {{ title }}
	NuxtLink(:to="link")
		UiButton(type="primary") Читать
</template>

<style lang="scss" scoped>
.article-card {
  max-width: 427px;
  max-height: 476px;
  display: flex;
  flex-direction: column;

  .article-card__content {
    margin-bottom: clamp(20px, 100vw * 30 / 1340, 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(15px, 100vw * 20 / 1340, 20px);

    .article-card__img {
      width: min(100vw, 427px);
      aspect-ratio: 427 / 320;
      object-fit: cover;
    }

    .article-card__caption {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: clamp(20px, 100vw * 22 / 1340, 22px);
      font-weight: 800;
      line-height: calc(30 / 22);
      color: var(--Text);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}

@media screen and (min-width: 576px) {
  .article-card {
    .article-card__content {
      .article-card__img {
        width: min((100vw - clamp(20px, 100vw * 30 / 1340, 30px)) / 2, 427px);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .article-card {
    .article-card__content {
      .article-card__img {
        width: min((100vw - 2 * clamp(20px, 100vw * 30 / 1340, 30px)) / 3, 427px);
      }
    }
  }
}
</style>
