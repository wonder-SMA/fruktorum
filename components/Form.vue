<script setup lang="ts">
withDefaults(
  defineProps<{
    btnTitle: string;
    direction?: 'column' | 'row';
  }>(),
  {
    direction: 'column',
  }
);

const emit = defineEmits<{
  submit: [e: Event];
}>();
</script>

<template>
  <form :class="['form', `form-${direction}`]" @submit="emit('submit', $event)">
    <slot />
    <UiButton type="secondary">{{ btnTitle }}</UiButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
}

.form-column {
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
}

.form-row {
  flex-direction: row;
  gap: 37px;
}
</style>
