<script setup lang="ts">
defineProps<{
  data: TIntroBlock;
}>();
</script>

<template>
  <section class="article-intro">
    <NuxtImg
      class="article-intro__img"
      :src="data.image"
      width="541px"
      height="580px"
      quality="100"
    />
    <div class="article-intro__content">
      <h1 class="article-intro__title">{{ data.title }}</h1>
      <div class="article-intro__info">
        <div class="article-intro__info-section">
          <NuxtImg
            class="article-intro__info-icon"
            src="reading-time-icon.svg"
            width="16"
            height="16"
            quality="100"
          />
          <span class="article-intro__info-text">{{ data.reading_time }} мин время чтения</span>
        </div>
        <div class="article-intro__info-section">
          <NuxtImg
            class="article-intro__info-icon"
            src="view-count-icon.svg"
            width="16"
            height="16"
            quality="100"
          />
          <span class="article-intro__info-text">{{ data.views_count }} прочитали статью</span>
        </div>
      </div>
      <p class="article-intro__text">{{ data.short_description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article-intro {
  height: 580px;
  display: flex;
  gap: 30px;

  .article-intro__img {
    object-fit: cover;
    clip-path: inset(0 round 2px 220px 2px 2px);
  }

  .article-intro__content {
    padding-top: 90px;
    display: flex;
    flex-direction: column;

    .article-intro__title {
      margin-bottom: 30px;
      font-size: 56px;
      font-weight: 800;
      line-height: 66px;
      color: var(--Text);
    }

    .article-intro__info {
      margin-bottom: 50px;
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
          font-size: 14px;
          line-height: 20px;
          color: var(--Gray);
        }
      }
    }

    .article-intro__text {
      font-size: 18px;
      line-height: 26px;
      color: var(--Text);
    }
  }
}
</style>
