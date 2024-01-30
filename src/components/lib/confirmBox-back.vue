<template>
  <section class="confirmBoxContent">
    <TransitionGroup name="confirmBox">
      <div v-if="tryToLeaveChild" class="confirmBox">
        <header>
          <p class="title">
            {{ props.title }}
          </p>
          <!-- <a @click="handleCancel"><Icon name="cancel" /></a> -->
        </header>
        <div class="infos">
          <Icon :name="props.infosIcon" />
          <p class="message">
            {{ props.message }}
          </p>
        </div>
        <footer>
          <a
            @click="handleCancel"
            v-if="props.rightBtn"
            :href="checkURL(props.rightURL)"
          >
            <div class="btn reverse cancel">
              <p>{{ props.rightBtn }}</p>
              <Icon :name="props.rightIcon" />
            </div>
          </a>
          <a v-if="props.leftBtn" :href="checkURL(props.leftURL)">
            <div class="btn reverse confirm">
              <p>{{ props.leftBtn }}</p>
              <Icon :name="props.leftIcon" />
            </div>
          </a>
        </footer>
      </div>
    </TransitionGroup>
  </section>
</template>

<script setup>
import Icon from "./Icon.vue";
import { ref, onMounted } from "vue";
const emit = defineEmits();
const props = defineProps({
  tryToLeave: Boolean,
  title: String,
  message: String,
  infosIcon: String,
  rightBtn: String,
  leftBtn: String,
  rightURL: String,
  leftURL: String,
  rightIcon: String,
  leftIcon: String,
});

const checkURL = (URL) => {
  if (!URL || URL === "#") {
    return "#";
  } else return URL;
};

const handleCancel = () => {
  tryToLeaveChild.value = false;
  setTimeout(() => {
    emit("btnLeft");
  }, 100);
};
const handleContinue = () => {
  tryToLeaveChild.value = false;
  setTimeout(() => {
    emit("btnRight");
  }, 100);
};

const tryToLeaveChild = ref(false);

onMounted(() => {
  setTimeout(() => {
    tryToLeaveChild.value = true;
  }, 100);
});
</script>

<style lang="scss" scoped>
.confirmBox-enter-active,
.confirmBox-leave-active {
  transition: all 0.3s ease-in-out;
}

.confirmBox-enter-from,
.confirmBox-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.confirmBoxContent {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: var(--main-bg-color);
    font-family: "Montserrat";
  }

  .confirmBox {
    background-color: var(--main-color);
    padding: 2rem;
    width: calc(30% - 4rem);
    min-height: fit-content;
    border-radius: 0.5rem;
    position: relative;
    header {
      width: 100%;
      min-height: 20px;
      display: flex;
      align-items: start;
      justify-content: space-between;
      .title {
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      .icon {
        display: block;
        width: 15px;
        height: 15px;
        fill: var(--main-bg-color);
        cursor: pointer;
        transition: 0.2s all ease-out;
        &:hover {
          rotate: 90deg;
        }
      }
    }
    .infos {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;

      .icon {
        height: 4rem;
        fill: var(--orange);
      }
    }

    footer {
      display: flex;
      justify-content: end;
      gap: 1rem;

      .btn {
        text-decoration: none;
        fill: var(--main-color);
      }
    }
  }
}
</style>
