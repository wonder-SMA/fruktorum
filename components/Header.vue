<script setup lang="ts"></script>

<template lang="pug">
header.header
  NuxtLink(to="/" aria-label="Go to homepage")
    NuxtImg(src="logo.svg" width="133" height="32" alt="Logo")
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 85px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
