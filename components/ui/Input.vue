<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string | undefined;
    type?: string;
    name?: string | undefined;
    placeholder?: string;
    autocomplete?: string;
    isRequired?: boolean;
  }>(),
  {
    id: undefined,
    type: 'text',
    name: undefined,
    placeholder: '',
    autocomplete: 'off',
    isRequired: false,
  }
);

const onChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  input.value ? input.classList.add('input_filled') : input.classList.remove('input_filled');
};
</script>

<template>
  <input
    :id="id"
    class="input"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :required="isRequired"
    @change="onChange"
  />
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid #8d959c;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(26 / 18);
  color: #8d959c;
  background: transparent;
  outline: none;

  &:focus {
    border-bottom: 1px solid #3657d3;

    &::placeholder {
      color: transparent;
    }
  }
}

.input_filled {
  border-bottom: 1px solid #fefefe;
  color: #fefefe;
}

@media screen and (min-width: 576px) {
  .input {
    font-size: 18px;
  }
}
</style>
