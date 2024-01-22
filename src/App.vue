<script setup>
import { onMounted, ref, watch } from "vue";
import { useHead } from "@unhead/vue";
import { RouterLink, RouterView } from "vue-router";
import UnderConstruction from "@/views/UnderConstructionView.vue";

// Site UnderConstruction
const MaintenanceMode = ref(false);

// Default colorScheme
const colorScheme = ref("dark");

// Headers
useHead({
  title: "Shapee - Donnons forme à votre projet.",
  description: "Shapee est une agence de création de site web située à Angers.",
});

const reloadColorScheme = (newColorScheme) => {
  if (newColorScheme) {
    localStorage.setItem("color-scheme", newColorScheme);
    colorScheme.value = newColorScheme;
  }

  const localStorageColorScheme = localStorage.getItem("color-scheme");
  if (!localStorageColorScheme) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log("Dark mode is enabled.");
      localStorage.setItem("color-scheme", "dark");
      colorScheme.value = "dark";
    } else {
      // Provisoire ( le temps d'adapter le site )
      console.log("Dark mode is not enabled.");
      localStorage.setItem("color-scheme", "dark");
      colorScheme.value = "dark";
    }
  } else {
    colorScheme.value = localStorageColorScheme;
  }
};

onMounted(() => {
  reloadColorScheme();
});
</script>

<template>
  <UnderConstruction
    class="ApplicationView"
    :class="colorScheme === 'light' ? 'light' : 'dark'"
    :colorScheme="colorScheme"
    @changeColorScheme="reloadColorScheme"
    v-if="MaintenanceMode"
  />
  <RouterView
    class="ApplicationView"
    :class="colorScheme === 'light' ? 'light' : 'dark'"
    :colorScheme="colorScheme"
    @changeColorScheme="reloadColorScheme"
    v-else
  />
</template>

<style lang="scss">
.ApplicationView {
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  min-height: 100vh;

  &.light {
    /* Déclaration des variables de couleur */
    --main-bg-color: #fff;
    --secondary-bg-color: #ebeff7;
    --third-bg-color: rgb(217, 224, 235);

    --main-color: #030f10;
    --secondary-color: #3e4146;
    --btn-border-color: #323635;
    color: #030f10;
  }
  &.dark {
    --main-bg-color: #030f10;
    --second-bg-color: #323635;
    --third-bg-color: #595d60;
    --main-color: #fff;
    --secondary-color: #b0b7c5;
    --third-color: #8e9aaf;
    --btn-border-color: #323635;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: var(--main-color);
    .btn {
      display: flex;
      gap: 0.5rem;
      padding: 0.7rem 1.2rem;
      background-color: transparent;
      transition: all 0.2s ease-out;

      border: var(--btn-border-color) solid 1px;
      border-radius: 0.3rem;
      p {
        font-family: "Montserrat";
      }
      .icon {
        display: block;
        width: 20px;
        height: 20px;
        rotate: 90deg;
        fill: var(--main-color);
      }

      &.alt {
        border: none;
        text-decoration: underline;

        &:hover {
          background-color: transparent;
          color: var(--primary-color);
        }
      }
      &:hover {
        background-color: var(--third-bg-color);
      }
    }
  }
}
</style>
