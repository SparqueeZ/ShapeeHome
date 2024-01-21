<template>
  <section class="defaultContent">
    <article
      class="imgDisplay"
      ref="target"
      :class="imgLocation === 'right' ? 'right' : 'left'"
    >
      <img :width="`${imgWidth}`" :src="imageUrl" :alt="imageAlt" />
    </article>
    <div class="space"></div>
    <article
      class="textDisplay"
      ref="targetTwo"
      :class="imgLocation === 'right' ? 'left' : 'right'"
    >
      <p v-if="categoryTitle" class="categoryTitle">{{ categoryTitle }}</p>
      <h3>{{ title }}</h3>
      <p class="text" v-if="text">{{ text }}</p>
      <a v-if="props.btnTitle" :href="props.btnLink">
        <div class="btn">
          <p>{{ props.btnTitle }}</p>
          <Icon :name="props.btnIcon" />
        </div>
      </a>

      <div v-if="cardTopTitle" class="card">
        <div class="cardTitle">
          <Icon :name="cardTopIcon" />
          <p>{{ cardTopTitle }}</p>
        </div>
        <p>{{ cardTopText }}</p>
      </div>
      <div v-if="cardMidTitle" class="card">
        <div class="cardTitle">
          <Icon :name="cardMidIcon" />
          <p>{{ cardMidTitle }}</p>
        </div>
        <p>{{ cardMidText }}</p>
      </div>
      <div v-if="cardBotTitle" class="card">
        <div class="cardTitle">
          <Icon :name="cardBotIcon" />
          <p>{{ cardBotTitle }}</p>
        </div>
        <p>{{ cardBotText }}</p>
      </div>
    </article>
  </section>
</template>

<script setup>
import Icon from "../lib/Icon.vue";
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const props = defineProps({
  imgLocation: String,
  imageUrl: String,
  imageAlt: String,
  imgTitle: String,
  imgWidth: String,
  title: String,
  text: String,
  btnTitle: String,
  btnLink: String,
  btnIcon: String,
  categoryTitle: String,
  cardTopIcon: String,
  cardTopTitle: String,
  cardTopText: String,
  cardMidIcon: String,
  cardMidTitle: String,
  cardMidText: String,
  cardBotIcon: String,
  cardBotTitle: String,
  cardBotText: String,
});

const target = ref(null);
const targetTwo = ref(null);

const motionInstance = useMotion(target, {
  initial: {
    opacity: 0,
    x: props.imgLocation === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

const motionInstanceTwo = useMotion(targetTwo, {
  initial: {
    opacity: 0,
    x: props.imgLocation === "left" ? 100 : -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.defaultContent {
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-template-areas: "left space right";
  width: 100%;

  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;

    h3,
    p {
      text-align: end;
    }
  }
  .space {
    grid-area: space;
  }
  .right {
    grid-area: right;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  img {
    border-radius: 1rem;
  }

  .categoryTitle {
    color: var(--primary-color);
    letter-spacing: 15px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
  }

  h3 {
    font-size: 40px;
    color: #fff;
    font-weight: 500;
  }
  .text {
    font-family: "Montserrat";
    font-size: 18px;
    color: #b0b7c5;
    font-weight: 400;
    line-height: 40px;
  }

  .card {
    background-color: #323635;
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .cardTitle {
      display: flex;
      gap: 20px;

      .icon {
        display: block;
        justify-content: center;
        align-items: center;
        height: 45px;
        width: 45px;
        border-radius: 0.5rem;
        background-color: #b0b7c5;
        fill: #323635;
      }

      p {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 30px;
        text-transform: uppercase;
        margin: 0;
        color: #fff;
      }
    }
    p {
      color: #b0b7c5;
      line-height: 20px;
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>
