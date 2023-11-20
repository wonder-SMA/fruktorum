<script setup lang="ts">
defineProps<{
  data: TImageBlock;
}>();
</script>

<template>
  <figure class="image-block">
    <NuxtImg class="image-block__img" :src="data.src" width="1340px" height="550px" quality="100" />
    <figcaption v-if="data.caption" class="image-block__caption">{{ data.caption }}</figcaption>
  </figure>
</template>

<style lang="scss" scoped>
.image-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  .image-block__img {
    object-fit: cover;
    clip-path: inset(0 round 2px 220px 2px 2px);
  }

  .image-block__caption {
    width: 198px;
    height: 40px;
    margin-left: auto;
    text-align: right;
    font-size: 14px;
    line-height: 20px;
    color: var(--Gray);
  }
}
</style>
