<script setup lang="ts">
defineProps<{
  error: TError;
}>();

const onClick = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="error-wrapper">
    <div class="error">
      <p class="error__status-code">{{ error.statusCode }}</p>
      <p class="error__ooops">Ooops...</p>
      <p class="error__message">{{ error.message }}</p>
      <UiButton class="button-error" type="primary" @click="onClick">Go Home</UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .error {
    margin-top: 100px;
    text-align: center;
    font-weight: 800;
    line-height: 1.25;
    color: var(--Text);

    .error__status-code {
      font-size: 100px;
    }

    .error__ooops {
      margin-top: 16px;
      font-size: 48px;
    }

    .error__message {
      font-size: 26px;
      font-weight: 400;
    }

    .button-error,
    .error__message {
      margin: 16px 0;
    }
  }
}
</style>
