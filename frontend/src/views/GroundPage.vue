<template>
  <div class="ground" @click="handleClick">
    广场
    {{ a }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
const a = ref(0);
const handleClick = () => {
  console.log('asdas');
  a.value++;
};
</script>
