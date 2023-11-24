<script setup lang="ts">
const { data } = await useFetch<THomeData>('/api/home');

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
  description: data.value?.description,
  ogDescription: data.value?.description,
});
</script>

<template lang="pug">
main.main
  ArticleList(v-if="data" :data="data.body")
</template>

<style lang="scss" scoped></style>
