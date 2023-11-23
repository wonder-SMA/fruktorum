<script setup lang="ts">
defineProps<{
  btnTitle: string;
}>();

const emit = defineEmits<{
  submit: [e: Event];
}>();
</script>

<template>
  <form class="form" @submit="emit('submit', $event)">
    <slot />
    <UiButton type="secondary">{{ btnTitle }}</UiButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
}
</style>
