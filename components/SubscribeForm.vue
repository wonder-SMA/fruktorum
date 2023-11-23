<script setup lang="ts"></script>

<template lang="pug">
div.subscribe-form
  p.subscribe-form__title Подпишись на рассылку
  Form.subscribe-form__form(btn-title="Подписаться")
    UiInput.subscribe-form__input(
		    type="email"
		    name="email"
		    placeholder="Email"
		    autocomplete="email"
		    :is-required="true"
    )
</template>

<style lang="scss">
.subscribe-form {
  min-height: 100px;
  padding: clamp(15px, 100vw * 30 / 992, 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: clamp(20px, 100vw * 37 / 992, 37px);
  background: var(--Text);

  .subscribe-form__title {
    font-size: clamp(20px, 100vw * 22 / 1340, 22px);
    font-weight: 800;
    line-height: calc(30 / 22);
    color: var(--White);
  }

  .subscribe-form__form {
    justify-content: center;
    flex-direction: column;
    gap: clamp(20px, 100vw * 37 / 992, 37px);

    .subscribe-form__input {
      width: clamp(353px / 1.25, 100vw * 353 / 1340, 353px);
    }

    .button {
      align-self: center;
    }
  }
}

@media screen and (min-width: 576px) {
  .subscribe-form {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;

    .subscribe-form__form {
      .subscribe-form__input {
        width: clamp(353px / 1.4, 100vw * 353 / 1340, 353px);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .subscribe-form {
    .subscribe-form__form {
      .subscribe-form__input {
        width: clamp(353px / 1.25, 100vw * 353 / 1340, 353px);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .subscribe-form {
    padding: 30px;
    justify-content: space-between;

    .subscribe-form__form {
      flex-direction: row;
      gap: 37px;
    }
  }
}
</style>
