<template>
  <section class="page">
    <h1>Step 2</h1>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const emit = defineEmits();
const newStep = 1;

onMounted(() => {
  // setTimeout(() => {
  //   emit("updateStep", newStep);
  //   console.log(newStep);
  // }, 3000);
});
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
}
</style>
