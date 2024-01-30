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
#app {
  overflow: hidden;
  position: relative;
}

.ApplicationView {
  width: 100%;
  height: 100svh;

  .page {
    background-color: var(--main-bg-color);
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    /* width */
    &::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: #888;
      transition: all 0.9s ease-out;
      &:hover {
        background-color: #555;
        transition: all 0.9s ease-out;
      }
    }
  }

  --dark-color: #030f10;
  --light-color: #fff;
  --red: #f64d60;
  --orange: #ffa800;
  --green: #00e097;

  --lightblue: #ebeff7;
  --lightblue-subtle: #cacfd8;
  --lightblue-alt: #8d99ae;

  &.light {
    /* Déclaration des variables de couleur */
    --main-bg-color: #fff;
    --second-bg-color: #ebeff7;
    --third-bg-color: rgb(217, 224, 235);

    --main-color: #030f10;
    --secondary-color: #3e4146;
    --third-color: #8e9aaf;

    --btn-border-color: #323635;

    --reverse-main-bg-color: #030f10;
    --reverse-second-bg-color: #323635;
    --reverse-third-bg-color: #595d60;
    color: #030f10;
  }
  &.dark {
    --main-bg-color: #030f10;
    --second-bg-color: #323635;
    --third-bg-color: #595d60;

    --main-color: #fff;
    --secondary-color: #b0b7c5;
    --third-color: #868c97;

    --btn-border-color: #323635;

    --reverse-main-bg-color: #fff;
    --reverse-second-bg-color: #ebeff7;
    --reverse-third-bg-color: rgb(217, 224, 235);
    color: #fff;
  }

  // Boutons
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
        transition: all 0.2s ease-out;
        font-family: "Montserrat";
        user-select: none;
      }
      .icon {
        transition: all 0.2s ease-out;
        display: block;
        width: 20px;
        height: 20px;
        rotate: 90deg;
        fill: var(--main-color);
      }

      &.disabled {
        opacity: 0.5;
        background-color: var(--third-bg-color);
        border-color: var(--third-bg-color);
        p {
          color: var(--reverse-second-bg-color);
        }
        .icon {
          fill: var(--reverse-second-bg-color);
        }
      }
      &.mainBg {
        background-color: var(--main-bg-color);
      }
      &.alt {
        border: none;
        text-decoration: underline;

        &:hover {
          background-color: transparent;
          color: var(--primary-color);
        }
      }
      &.reverse {
        p {
          color: var(--main-bg-color);
        }
        .icon {
          fill: var(--main-bg-color);
        }

        &:hover {
          // background-color: rgb(217, 224, 235);
          background-color: var(--reverse-second-bg-color);
          cursor: pointer;
        }
      }
      &.light {
        padding: 0.5rem 2rem;

        &:hover {
          background-color: var(--lightblue);
          p {
            color: #323635;
          }
        }
      }
      &.confirm {
        .icon {
          width: 1rem;
        }
      }
      &.cancel {
        .icon {
          width: 1rem;
        }
      }
      &.primaryColor {
        background-color: var(--lightblue);
        .icon {
          fill: var(--main-bg-color);
          width: 1rem;
        }
        p {
          color: var(--main-bg-color);
          font-weight: 500;
        }
        &:hover {
          background-color: var(--primary-color);
        }
      }
      &.primary {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
        p {
          color: var(--btn-border-color);
        }

        &:hover {
          border-color: #323635;
        }
      }
      &:hover {
        background-color: var(--third-bg-color);
        cursor: pointer;
      }
    }
  }

  // Footers
  .formFooter {
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 2rem);
    padding: 1rem;
    display: flex;
    justify-content: end;
    background-color: var(--main-bg-color);
    z-index: 101;

    .actionsBtn {
      display: flex;

      .btn {
        width: fit-content;
        &.alt {
          text-decoration: none;
        }
      }
    }
  }

  // Animations
  .stepTransition-enter-active,
  .stepTransition-leave-active {
    transition: transform 1s ease;
  }

  .stepTransition-enter-from {
    transform: translateX(100%);
  }
  .stepTransition-leave-to {
    transform: translateX(-100%);
  }

  .stepTransitionReverse-enter-active,
  .stepTransitionReverse-leave-active {
    transition: transform 1s ease;
  }
  .stepTransitionReverse-enter-from {
    transform: translateX(-100%);
  }
  .stepTransitionReverse-leave-to {
    transform: translateX(100%);
  }

  .reduceOpacity-enter-active,
  .reduceOpacity-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .reduceOpacity-enter-from,
  .reduceOpacity-leave-to {
    opacity: 0;
  }

  .footerAppear-enter-active,
  .footerAppear-leave-active {
    transition: all 0.2s ease-in-out;
  }
  .footerAppear-enter-from,
  .footerAppear-leave-to {
    opacity: 0;
    transform: translateX(4rem);
  }
}
</style>
