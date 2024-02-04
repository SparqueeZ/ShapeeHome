<template>
  <div>Design</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  step: Number,
});

onMounted(() => {
  let saveDevis = JSON.parse(localStorage.getItem("devis"));
  if (saveDevis && saveDevis[props.step]) {
    choice.value = saveDevis[props.step];
    document.getElementById(`${choiceName}${saveDevis[props.step]}`).click();
  }
  console.log("Etape actuelle :", props.step);
});
</script>

<style lang="scss" scoped></style>
