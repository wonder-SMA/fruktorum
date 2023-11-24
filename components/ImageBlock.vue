<script setup lang="ts">
defineProps<{
  data: TImageBlock;
}>();
</script>

<template lang="pug">
figure.image-block
  NuxtImg.image-block__img(:src="data.src" sizes="xs:320px sm:576px md:768px lg:992px xl:1200px xxl:1340px"
	  loading="lazy" :alt="data.caption")
  figcaption.image-block__caption(v-if="data.caption") {{ data.caption }}
</template>

<style lang="scss" scoped>
.image-block {
  max-width: 1340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  .image-block__img {
    width: min(100vw, 1340px);
    aspect-ratio: 1340 / 550;
    object-fit: cover;
    clip-path: inset(0 round 2px min(100vw * 220 / 1340, 220px) 2px 2px);
  }

  .image-block__caption {
    width: 198px;
    height: 40px;
    margin-left: auto;
    text-align: right;
    font-size: clamp(12px, 100vw * 14 / 1340, 14px);
    line-height: 20px;
    color: var(--Gray);
  }
}
</style>
