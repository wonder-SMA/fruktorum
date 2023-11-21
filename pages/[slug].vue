<script setup lang="ts">
import ArticleIntro from '~/components/ArticleIntro.vue';
import ArticleText from '~/components/ArticleText.vue';
import ImageBlock from '~/components/ImageBlock.vue';
import Slider from '~/components/Slider.vue';
import SubscribeForm from '~/components/SubscribeForm.vue';
import ArticleList from '~/components/ArticleList.vue';
import JoinForm from '~/components/JoinForm.vue';

const blocks = {
  article_intro_block: ArticleIntro,
  text_block: ArticleText,
  image_block: ImageBlock,
  slider_block: Slider,
  subscribe_form_block: SubscribeForm,
  article_list_block: ArticleList,
  cta_form_block: JoinForm,
};

const { slug } = useRoute().params;
const { data: article } = await useFetch<TArticleData>(`/api/articles/${slug}`);

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' });
}

useSeoMeta({
  title: article.value.title,
  ogTitle: article.value.title,
  description: article.value.description,
  ogDescription: article.value.description,
});
</script>

<template>
  <main class="main">
    <template v-for="block in article?.body" :key="block.id">
      <component :is="blocks[block.type]" :data="block.data" />
    </template>
  </main>
</template>

<style lang="scss" scoped></style>
