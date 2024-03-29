<template>
  <section class="confirmBoxContent">
    <TransitionGroup name="confirmBox">
      <div v-if="tryToLeaveChild" class="confirmBox">
        <header>
          <div class="iconContainer">
            <Icon :name="props.infosIcon" />
          </div>
          <div @click="handleLeave" class="leaveIcon">
            <Icon name="cancel" />
          </div>
        </header>
        <div class="infosContainer">
          <p class="title">
            {{ props.title }}
          </p>
          <p class="description">
            {{ props.message }}
          </p>
        </div>
        <footer>
          <a
            v-if="props.rightBtn"
            @click="handleCancel"
            :href="checkURL(props.rightURL)"
          >
            <div class="btn light">
              <p>{{ props.rightBtn }}</p>
              <Icon v-if="props.rightIcon" :name="props.rightIcon" />
            </div>
          </a>
          <a
            v-if="props.leftBtn"
            @click="handleContinue"
            :href="checkURL(props.leftURL)"
          >
            <div class="btn light primary">
              <p>{{ props.leftBtn }}</p>
              <Icon v-if="props.leftIcon" :name="props.leftIcon" />
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
const handleLeave = () => {
  tryToLeaveChild.value = false;
  setTimeout(() => {
    emit("btnLeave");
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
    width: calc(440px - 4rem);
    min-height: fit-content;
    min-width: 440px;
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      position: relative;
      .iconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 60px;
        border-radius: 50%;
        background-color: var(--orange);
        .icon {
          fill: #fff;
          height: 30px;
        }
      }
      .leaveIcon {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;

        .icon {
          transition: all 0.2s ease-out;
          display: block;
          width: 15px;
          height: 15px;
          fill: var(--main-bg-color);
        }
        &:hover {
          .icon {
            scale: 0.9;
          }
        }
      }
    }

    .infosContainer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .title {
        font-size: 1.4rem;
        font-weight: 700;
        font-family: "Nohemi";
      }
      .description {
        font-size: 0.95rem;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      a {
        width: 45%;
      }
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
