<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavbarComponent from './components/components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent>
  </NavbarComponent>
  <RouterView></RouterView>
  <RouterView />
</template>


