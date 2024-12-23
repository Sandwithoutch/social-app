<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
}
</style>
