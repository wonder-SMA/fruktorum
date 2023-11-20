<script setup lang="ts"></script>

<template>
  <div class="subscribe-form">
    <p class="subscribe-form__title">Подпишись на рассылку</p>
    <Form btn-title="Подписаться" direction="row">
      <UiInput
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
        :is-required="true"
      />
    </Form>
  </div>
</template>

<style lang="scss" scoped>
.subscribe-form {
  width: 100%;
  height: 100px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--Text);

  .subscribe-form__title {
    font-size: 22px;
    font-weight: 800;
    line-height: 30px;
    color: var(--White);
  }
}
</style>
