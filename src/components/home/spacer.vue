<template>
  <section class="spacerElement" :style="defineHeight()"></section>
</template>

<script setup>
const props = defineProps({
  height: String,
});

const defineHeight = () => {
  const height = props.height;
  return `height : ${height}`;
};
</script>

<style lang="scss" scoped></style>
