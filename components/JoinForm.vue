<script setup lang="ts"></script>

<template>
  <div class="join-form">
    <NuxtImg
      class="join-form__img"
      src="form-image.jpg"
      width="595px"
      height="326px"
      quality="100"
    />
    <div class="join-form__container">
      <p class="join-form__title">Стань участником проекта</p>
      <Form btn-title="Присоединиться">
        <fieldset class="join-form__fieldset">
          <UiInput name="username" placeholder="Имя" :is-required="true" />
          <UiInput
            type="tel"
            name="phone"
            placeholder="Телефон"
            autocomplete="tel"
            :is-required="true"
          />
          <UiInput
            type="email"
            name="email"
            placeholder="Email"
            autocomplete="email"
            :is-required="true"
          />
        </fieldset>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.join-form {
  min-height: 448px;
  padding: 60px;
  display: flex;
  gap: 60px;
  background: #1b1b1b;

  .join-form__img {
    object-fit: cover;
  }

  .join-form__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;

    .join-form__title {
      font-size: 34px;
      font-weight: 800;
      line-height: 46px;
      color: var(--White);
    }

    .join-form__fieldset {
      margin: 0;
      padding: 0;
      border: none;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
}
</style>
