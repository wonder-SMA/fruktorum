<script setup lang="ts">
defineProps<{
  btnTitle: string;
}>();

const emit = defineEmits<{
  submit: [e: Event];
}>();
</script>

<template lang="pug">
form.form(@submit="emit('submit', $event)")
  slot
  UiButton(type="secondary") {{ btnTitle }}
</template>

<style lang="scss" scoped>
.form {
  display: flex;
}
</style>
