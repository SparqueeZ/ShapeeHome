<template>
  <div class="choiceContainer">
    <article v-for="choice in choiceList" class="choiceItem">
      <input
        type="radio"
        name="choiceCreateWebSite"
        :id="`choiceCreateWebSite${choice.choiceNumber}`"
        @click="emit('saveChoice', 1, Number(choice.choiceNumber))"
      />
      <label :for="`choiceCreateWebSite${choice.choiceNumber}`">
        <div class="imgContainer">
          <img :src="choice.img" :alt="choice.imgAlt" />
        </div>
        <div class="infosContainer">
          <h2>{{ choice.title }}</h2>
          <div class="timing">
            <Icon name="clock" />
            <p>{{ choice.timing }}</p>
          </div>
          <p class="description">{{ choice.description }}</p>
        </div>
      </label>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Icon from "@/components/lib/Icon.vue";
import choice1 from "@/assets/img/choice1.png";
import choice2 from "@/assets/img/choice2.png";
import choice3 from "@/assets/img/choice3.png";
const emit = defineEmits();
const props = defineProps({});

const choiceCreateWebSite = ref(0);

const choiceList = ref([
  {
    title: "Test 1",
    description:
      "Un site web personnalisé codé ou fait avec WordPress ? C'est l'option !",
    timing: "3 min.",
    choiceNumber: "1",
    img: choice1,
    imgAlt:
      "Image de deux personnes se serrant la main, l'un à droite avec une valise et l'autre levant la main gauche, derrière eux se trouvent deux pieces de puzzle géants, montrant la logique.",
  },
  {
    title: "Test 2",
    description:
      "Besoin d'un coup de pinceau sur votre site internet ? N'attendez plus !",
    timing: "2 min.",
    choiceNumber: "2",
    img: choice2,
    imgAlt:
      "Image d'une personne levant le doigt de la main gauche tout en tenant un cahier dans la main droite pour faire comprendre qu'il cherche son chemin, et derrière lui se trouve des pancartes.",
  },
  {
    title: "Avec Shopify !",
    description:
      "Besoin d'un coup de pinceau sur votre site internet ? N'attendez plus !",
    timing: "2 min.",
    choiceNumber: "3",
    img: choice3,
    imgAlt:
      "Image d'une personne levant le doigt de la main gauche tout en tenant un cahier dans la main droite pour faire comprendre qu'il cherche son chemin, et derrière lui se trouve des pancartes.",
  },
]);

onMounted(() => {
  let saveDevis = JSON.parse(localStorage.getItem("devis"));
  if (saveDevis && saveDevis[2][0].selected !== 0) {
    choiceCreateWebSite.value = saveDevis[2][0];
    document
      .getElementById(`choiceCreateWebSite${saveDevis[2][0].selected}`)
      .click();
  }
});
</script>

<style lang="scss" scoped>
.choiceContainer {
  // height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  overflow-y: auto;

  .choiceItem {
    // height: 100%;
    // width: 25%;
    max-width: 400px;
    display: flex;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    label {
      width: 100%;
      height: 100%;
      max-height: 550px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 3rem 2rem;
      position: relative;
      overflow: hidden;

      &::-webkit-scrollbar {
        width: 0px;
        position: absolute;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #2b2d42;
      }

      .imgContainer {
        width: 100%;
        img {
          height: auto;
          aspect-ratio: 1/1;
        }
      }

      .infosContainer {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;

        h2 {
          font-weight: 800;
          font-size: 1.2rem;
          font-family: "Montserrat";
        }

        .timing {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.3rem;
          margin-top: -10px;
          .icon {
            display: block;
            width: 15px;
            height: 15px;
            fill: var(--main-color);
          }
          p {
            font-weight: 600;
            font-size: 0.8rem;
            font-family: "Montserrat";
            color: var(--main-color);
          }
        }

        .description {
          margin-top: 0.5rem;
          font-family: "Montserrat";
          font-size: 0.9rem;
        }
      }

      .pinnedMessage {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        top: 1rem;
        right: 1rem;
        padding: 0.3rem 1rem;
        width: fit-content;
        border-radius: 0.5rem;
        background-color: var(--orange);
        p {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }

        .icon {
          width: 15px;
          height: 15px;
          display: block;
          fill: #fff;
        }
      }

      h2 {
        font-weight: 800;
        font-size: 24px;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      &.selected {
        display: none;
      }
    }

    input[type="radio"] {
      transition: all 0.5s ease-out;
      display: none;
      &:not(:disabled) ~ label {
        cursor: pointer;
      }
      &:disabled ~ label {
        opacity: 0.5;
        box-shadow: none;
        cursor: not-allowed;
      }
    }
    label {
      transition: all 0.3s ease-out;
      height: 100%;
      width: 100%;
      display: block;
      background: var(--main-bg-color);
      border-radius: 0.5rem;
      text-align: center;
      // box-shadow: 0px 3px 10px -2px hsla(150, 5%, 65%, 0.5);
      box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
        /* shadow ring 👇 */ 0 0 0 1px hsla(0, 0%, 0%, 0.05),
        /* multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
        0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09);
      position: relative;
      &:hover {
        scale: 1.025;
      }
    }
    input[type="radio"]:checked + label {
      background-color: var(--second-bg-color);
      color: var(--main-color);
    }
    input[type="radio"]#control_05:checked + label {
      background: red;
      border-color: red;
    }

    @media only screen and (max-width: 700px) {
      section {
        flex-direction: column;
      }
      label {
        overflow: hidden;
      }
    }
  }
}
</style>
