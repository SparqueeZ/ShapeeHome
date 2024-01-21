<template>
  <div class="changeColorSchemeBtn" @click="reloadColorScheme">
    <TransitionGroup>
      <Icon v-if="colorScheme === 'light'" name="moon" />
      <Icon v-if="colorScheme === 'dark'" name="sun" />
    </TransitionGroup>
  </div>
</template>

<script setup>
import Icon from "@/components/lib/Icon.vue";
const props = defineProps({
  colorScheme: String,
});

const emits = defineEmits();

const reloadColorScheme = () => {
  if (props.colorScheme === "light") {
    emits("changeColorScheme", "dark");
    console.warn("Passage en thème 'Dark'.");
  } else {
    emits("changeColorScheme", "light");
    console.warn("Passage en thème 'Light'.");
  }
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.changeColorSchemeBtn {
  width: fit-content;
  transition: all 0.2s ease-out;
  // background-color: var(--main-bg-color);
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  .icon {
    position: absolute;
    display: flex;
    right: 0;
    width: 15px;
    padding: 0.5rem;
    height: 15px;
    fill: var(--main-color);
    transition: all 0.2s ease-out;
  }

  &:hover {
    // background-color: #ebeff7;

    .icon {
      fill: var(--primary-color);
    }
  }
}
</style>
