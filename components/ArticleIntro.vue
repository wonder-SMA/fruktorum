<script setup lang="ts">
defineProps<{
  data: TIntroBlock;
}>();
</script>

<template lang="pug">
section.article-intro
  NuxtImg.article-intro__img(:src="data.image" sizes="xs:100vw sm:100vw md:310px lg:400px xl:484px"
	  alt="Article intro image")
  div.article-intro__content
    h1.article-intro__title {{ data.title }}
    div.article-intro__info
      div.article-intro__info-section
        NuxtImg.article-intro__info-icon(
          :src="'reading-time-icon.svg'"
          width="16"
          height="16"
        )
        span.article-intro__info-text {{ data.reading_time }} мин время чтения
      div.article-intro__info-section
        NuxtImg.article-intro__info-icon(
          :src="'view-count-icon.svg'"
          width="16"
          height="16"
        )
        span.article-intro__info-text {{ data.views_count }} прочитали статью
    p.article-intro__text {{ data.short_description }}
</template>

<style lang="scss" scoped>
.article-intro {
  display: flex;
  flex-direction: column;

  .article-intro__img {
    width: 100%;
    aspect-ratio: 1340 / 550;
    object-fit: cover;
    clip-path: inset(0 round 2px min(100vw * 220 / 1340, 220px) 2px 2px);
  }

  .article-intro__content {
    padding-top: min(100vw / 2.5 * 90 / 1340, 90px);
    display: flex;
    flex-direction: column;

    .article-intro__title {
      margin-bottom: min(100vw / 2.5 * 30 / 1340, 30px);
      font-size: clamp(56px / 1.8, 100vw * 56 / 1340, 56px);
      font-weight: 800;
      line-height: calc(66 / 56);
      color: var(--Text);
    }

    .article-intro__info {
      margin-bottom: min(100vw / 2.5 * 50 / 1340, 50px);
      display: flex;
      flex-direction: column;
      gap: 4px;

      .article-intro__info-section {
        display: flex;
        gap: 8px;

        .article-intro__info-icon {
          margin-top: 3px;
        }

        .article-intro__info-text {
          font-size: clamp(12px, 100vw * 14 / 1340, 14px);
          line-height: calc(20 / 14);
          color: var(--Gray);
        }
      }
    }

    .article-intro__text {
      font-size: clamp(16px, 100vw * 18 / 1340, 18px);
      line-height: calc(26 / 18);
      color: var(--Text);
    }
  }
}

@media screen and (min-width: 768px) {
  .article-intro {
    display: block;

    .article-intro__img {
      width: min(100vw * 541 / 1340, 541px);
      aspect-ratio: 541 / 580;
      margin-right: 30px;
      float: left;
    }

    .article-intro__content {
      padding-top: min(100vw / 4.1875 * 90 / 1340, 90px);

      .article-intro__title {
        margin-bottom: min(100vw / 1.8 * 30 / 1340, 30px);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .article-intro {
    .article-intro__content {
      padding-top: min(100vw * 90 / 1340, 90px);

      .article-intro__title {
        margin-bottom: min(100vw * 30 / 1340, 30px);
      }

      .article-intro__info {
        margin-bottom: min(100vw * 50 / 1340, 50px);
      }
    }
  }
}
</style>
