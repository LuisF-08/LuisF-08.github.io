<script setup>
import Home from './views/HomeApp.vue';
import Toast from 'primevue/toast';
</script>

<template>
  <div class="w-full min-h-screen antialiased">
    <Toast position="bottom-left" />
    <Home />
  </div>
</template>