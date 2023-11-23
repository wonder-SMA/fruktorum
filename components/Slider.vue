<script setup lang="ts">
const props = defineProps<{
  data: TSliderBlock;
}>();

const currentPosition = ref(1);
const sliderRef = ref(null);

onMounted(() => {
  // Приводим margin у изображения к текущему размеру слайдера при изменении размера viewport
  window.onresize = () => {
    if (sliderRef.value) {
      const slider = sliderRef.value as HTMLElement;

      (slider.children[0] as HTMLElement).style.marginLeft = `-${
        slider.clientWidth * (currentPosition.value - 1)
      }px`;
    }
  };
});

const onChangeImg = (direction: 'left' | 'right') => {
  if (sliderRef.value) {
    const slider = sliderRef.value as HTMLElement;
    const firstImg = slider.children[0] as HTMLElement;

    if (direction === 'left' && currentPosition.value > 1) {
      firstImg.style.marginLeft = `${parseInt(firstImg.style.marginLeft) + slider.clientWidth}px`;
      currentPosition.value -= 1;
    } else if (direction === 'right' && currentPosition.value < props.data.length) {
      const marginLeft = parseInt(firstImg.style.marginLeft) || 0;
      firstImg.style.marginLeft = `${marginLeft - slider.clientWidth}px`;
      currentPosition.value += 1;
    }
  }
};
</script>

<template>
  <div class="slider">
    <NuxtImg
      class="slider__left-arrow"
      src="left-arrow-icon.svg"
      quality="100"
      @click="onChangeImg('left')"
    />
    <div ref="sliderRef" class="slider__content">
      <NuxtImg v-for="src in data" :key="src" class="slider__img" :src="src" quality="100" />
    </div>
    <span class="slider__counter">{{ currentPosition }} / {{ data.length }}</span>
    <NuxtImg
      class="slider__right-arrow"
      src="right-arrow-icon.svg"
      quality="100"
      @click="onChangeImg('right')"
    />
  </div>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;
  max-height: 601px;
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 100vw * 25 / 1340, 25px);

  .slider__content {
    width: min(100vw - min(calc((100vw * 220) / 1340), 220px), 1112px);
    aspect-ratio: 1112 / 550;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;

    .slider__img {
      object-fit: cover;
      transition: margin 0.3s;
    }
  }

  .slider__counter {
    text-align: center;
    font-size: clamp(16px, 100vw * 18 / 1340, 18px);
    line-height: calc(26 / 18);
    color: var(--Black);
  }

  .slider__left-arrow,
  .slider__right-arrow {
    position: absolute;
    top: min((100vw - min(calc((100vw * 220) / 1340), 220px)) * 245 / 1112, 245px);
    width: min(max((100vw - min(calc((100vw * 220) / 1340), 220px)) * 60 / 1112, 30px), 60px);
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .slider__left-arrow {
    left: 0;
  }

  .slider__right-arrow {
    right: 0;
  }
}
</style>
