<script setup lang="ts"></script>

<template>
  <header class="header">
    <NuxtLink to="/">
      <NuxtImg src="logo.svg" width="133" height="32" quality="100" />
    </NuxtLink>
  </header>
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
