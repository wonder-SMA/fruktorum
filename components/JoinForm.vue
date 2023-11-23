<script setup lang="ts"></script>

<template>
  <div class="join-form">
    <NuxtImg class="join-form__img" src="form-image.jpg" quality="100" />
    <div class="join-form__container">
      <p class="join-form__title">Стань участником проекта</p>
      <Form class="join-form__form" btn-title="Присоединиться">
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

<style lang="scss">
.join-form {
  min-height: min(100vw * 448 / 1340, 448px);
  padding: clamp(15px, 100vw * 60 / 1340, 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1b1b1b;

  .join-form__img {
    width: min(200vw * 595 / 1340, 595px);
    aspect-ratio: 595 / 326;
    object-fit: cover;
  }

  .join-form__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(50px / 2.5, 100vw * 50 / 1340, 50px);

    .join-form__title {
      margin-top: 10px;
      font-size: clamp(34px / 1.8, 100vw * 34 / 768, 34px);
      font-weight: 800;
      line-height: calc(46 / 34);
      color: var(--White);
    }

    .join-form__form {
      flex-direction: column;
      gap: clamp(50px / 2.5, 100vw * 50 / 1340, 50px);

      .button {
        margin: 0 auto;
      }

      .join-form__fieldset {
        width: clamp(353px / 1.25, 100vw * 353 / 1340, 353px);
        margin: 0;
        padding: 0;
        border: none;
        display: flex;
        flex-direction: column;
        gap: clamp(25px / 1.25, 100vw * 25 / 1340, 25px);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .join-form {
    flex-direction: row;
    align-items: normal;

    .join-form__img {
      width: min(100vw * 595 / 1340, 595px);
      margin-right: 60px;
      float: left;
    }

    .join-form__container {
      align-items: start;
      gap: clamp(50px / 1.25, 100vw * 50 / 1340, 50px);

      .join-form__title {
        margin-top: 0;
        font-size: clamp(34px / 1.8, 100vw * 34 / 1340, 34px);
      }

      .join-form__form {
        gap: clamp(50px / 1.25, 100vw * 50 / 1340, 50px);

        .button {
          margin: 0;
          align-self: start;
        }
      }
    }
  }
}
</style>
