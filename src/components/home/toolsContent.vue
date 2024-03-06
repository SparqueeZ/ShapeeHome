<template>
  <section class="toolsContent">
    <h3 class="sectionTitle">Nous utilisons</h3>
    <div class="toolsContainer">
      <article class="tool" v-for="tool in tools" :key="tool.id">
        <Icon :name="tool.iconName" />

        <p>{{ tool.name }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Icon from "../lib/Icon.vue";
const tools = ref([
  { name: "VSCode", iconName: "toolVSCode" },
  { name: "Trello", iconName: "toolTrello" },
  { name: "HTML", iconName: "toolHTML" },
  { name: "CSS", iconName: "toolCSS" },
  { name: "JS", iconName: "toolJS" },
  { name: "VueJS", iconName: "toolVueJS" },
]);
</script>

<style lang="scss" scoped>
.toolsContent {
  .toolsContainer {
    display: flex;
    justify-content: center;
    gap: 35px;

    .tool {
      background-color: #323635;
      padding: 10px 20px;
      border-radius: 0.5rem;
      display: flex;
      gap: 20px;
      min-width: 100px;
      align-items: center;
      justify-content: center;

      .icon {
        display: block;
        width: 30px;
        height: 30px;
        fill: #b0b7c5;
      }
      p {
        font-weight: 700;
        font-size: 20px;
        color: #b0b7c5;
        margin: 0;
      }
    }
    /* Mobile screens (portrait) */
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}
</style>
