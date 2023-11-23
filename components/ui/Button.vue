<script setup lang="ts">
defineProps<{
  type: 'primary' | 'secondary';
}>();
</script>

<template lang="pug">
button.button(:class="[`button-${type}`]")
  slot
</template>

<style lang="scss" scoped>
.button {
  max-height: 2.5em;
  padding: 10px 50px;
  border-radius: 2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(26 / 18);
  color: #ffffff;
  user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}

.button-primary {
  border: 1px solid #1b1b1b;
  background-color: #1b1b1b;

  &:hover {
    border: 1px solid #3657d3;
    background-color: #3657d3;
  }
}

.button-secondary {
  border: 1px solid #3657d3;
  background-color: #3657d3;

  &:hover {
    background-color: transparent;
  }
}

@media screen and (min-width: 576px) {
  .button {
    font-size: 18px;
  }
}
</style>
