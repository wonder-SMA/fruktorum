<script setup lang="ts">
const props = defineProps<{
  data: TSliderBlock;
}>();

const currentPosition = ref(1);
const sliderRef = ref(null);

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
      width="60"
      height="60"
      quality="100"
      @click="onChangeImg('left')"
    />
    <div ref="sliderRef" class="slider__content">
      <NuxtImg
        v-for="src in data"
        :key="src"
        class="slider__img"
        :src="src"
        width="1112px"
        height="550px"
        quality="100"
      />
    </div>
    <span class="slider__counter">{{ currentPosition }} / {{ data.length }}</span>
    <NuxtImg
      class="slider__right-arrow"
      src="right-arrow-icon.svg"
      width="60"
      height="60"
      quality="100"
      @click="onChangeImg('right')"
    />
  </div>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 601px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .slider__content {
    width: 1112px;
    height: 550px;
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
    font-size: 18px;
    line-height: 26px;
    color: var(--Black);
  }

  .slider__left-arrow,
  .slider__right-arrow {
    position: absolute;
    top: 245px;
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
