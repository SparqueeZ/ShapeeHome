<template>
  <main>
    <Head>
      <title>Shapee - Maintenance</title>
      <meta
        name="description"
        content="Notre site est actuellement en maintenance, mais pas de panique ! Vous pouvez nous contacter."
      />
      <meta name="viewport" content="width=device-width" initial-scale="1" />
      <link rel="canonical" href="https://www.shapee.re" />
    </Head>
    <section class="underConstruction">
      <header>
        <!-- <div class="changeColorSchemeBtn" @click="reloadColorScheme">
          <TransitionGroup>
            <Icon v-if="colorScheme === 'light'" name="moon" />
            <Icon v-if="colorScheme === 'dark'" name="sun" />
          </TransitionGroup>
        </div> -->
        <SwitchColorScheme
          :colorScheme="colorScheme"
          @changeColorScheme="
            (newColorScheme) => {
              emits('changeColorScheme', newColorScheme);
            }
          "
        />
      </header>

      <img
        src="../assets/img/UnderConstruction.svg"
        alt="Image d'une personne avec son ordinateur dans les mains, en train de coder. Derrière lui se trouve des écrans géants faisant penser à l'univers du code, avec une mention au Javascript et aux balises utlisées par les langages de programmation."
        width="295px"
        height="299px"
        draggable="false"
      />
      <h1>Notre site est en maintenance, nous revenons bientôt !</h1>
      <p>
        Pas de panique, vous pouvez nous suivre sur nos différents réseaux :
      </p>
      <div class="socials-list">
        <a href="https://www.linkedin.com/in/baptiste-dijoux-43b35420b/">
          <article class="linkedin">
            <svg viewBox="0 0 48 48" class="icon">
              <g>
                <path
                  class="linkedin-bg"
                  d="m5.33,48h37.33c2.95,0,5.33-2.39,5.33-5.33V5.33c0-2.95-2.39-5.33-5.33-5.33H5.33C2.39,0,0,2.39,0,5.33v37.33c0,2.95,2.39,5.33,5.33,5.33Z"
                />
                <path
                  class="linkedin-main"
                  d="m41.33,41.33h-7.12v-12.13c0-3.33-1.26-5.19-3.9-5.19-2.86,0-4.36,1.93-4.36,5.19v12.13h-6.86v-23.11h6.86v3.11s2.06-3.82,6.97-3.82,8.41,2.99,8.41,9.18v14.63ZM10.9,15.2c-2.34,0-4.23-1.91-4.23-4.26s1.89-4.26,4.23-4.26,4.23,1.91,4.23,4.26-1.89,4.26-4.23,4.26Zm-3.54,26.14h7.16v-23.11h-7.16v23.11Z"
                />
              </g>
            </svg>
          </article>
        </a>

        <a href="https://www.instagram.com/shapeeweb/">
          <article class="instagram">
            <svg viewBox="0 0 48 48" class="icon">
              <radialGradient
                id="Dégradé_sans_nom_30"
                data-name="Dégradé sans nom 30"
                cx="-1478.89"
                cy="3588.37"
                fx="-1478.89"
                fy="3588.37"
                r="69.4"
                gradientTransform="translate(1637.32 3012.01) rotate(-3) scale(1 -.85)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fed576" />
                <stop offset=".26" stop-color="#f47133" />
                <stop offset=".61" stop-color="#bc3081" />
                <stop offset="1" stop-color="#4c63d2" />
              </radialGradient>
              <radialGradient
                id="Dégradé_sans_nom_30-2"
                data-name="Dégradé sans nom 30"
                cx="-1489.72"
                cy="3375.83"
                fx="-1489.72"
                fy="3375.83"
                r="35.64"
                gradientTransform="translate(1649.94 2821.5) rotate(-3) scale(1 -.85)"
                xlink:href="#Dégradé_sans_nom_30"
              />
              <g id="Symbol">
                <g>
                  <path
                    class="cls-3"
                    d="m8.28,1.26c-1.58.61-2.92,1.43-4.25,2.77-1.34,1.33-2.16,2.67-2.77,4.24-.6,1.52-1,3.27-1.11,5.82s-.15,3.38-.15,9.89.03,7.34.15,9.89c.12,2.56.53,4.3,1.11,5.82.61,1.58,1.43,2.92,2.77,4.25,1.34,1.34,2.67,2.16,4.25,2.77,1.52.6,3.27,1,5.82,1.11,2.56.12,3.38.15,9.89.15s7.34-.03,9.89-.15c2.56-.12,4.3-.53,5.82-1.11,1.58-.61,2.92-1.43,4.25-2.77,1.34-1.34,2.16-2.67,2.77-4.25.6-1.52,1-3.27,1.11-5.82.12-2.56.15-3.38.15-9.89s-.03-7.34-.15-9.89-.53-4.3-1.11-5.82c-.61-1.57-1.43-2.92-2.76-4.24-1.34-1.34-2.67-2.16-4.25-2.77-1.52-.6-3.27-1-5.82-1.11s-3.38-.15-9.89-.15-7.34.03-9.89.15c-2.57.11-4.31.52-5.83,1.11Zm25.41,3.2c2.34.11,3.61.5,4.46.83,1.12.44,1.92.96,2.76,1.8.84.84,1.36,1.64,1.8,2.76.33.85.72,2.12.83,4.46.12,2.53.14,3.29.14,9.7s-.03,7.17-.14,9.7c-.11,2.34-.5,3.61-.83,4.46-.44,1.12-.96,1.92-1.8,2.76-.84.84-1.64,1.36-2.76,1.8-.85.33-2.12.72-4.46.83-2.53.12-3.29.14-9.7.14s-7.17-.03-9.7-.14c-2.34-.11-3.61-.5-4.46-.83-1.12-.44-1.92-.96-2.76-1.8-.84-.84-1.36-1.64-1.8-2.76-.33-.85-.72-2.12-.83-4.46-.12-2.53-.14-3.29-.14-9.7s.03-7.17.14-9.7c.11-2.34.5-3.61.83-4.46.44-1.12.96-1.92,1.8-2.76.84-.84,1.64-1.36,2.76-1.8.85-.33,2.12-.72,4.46-.83,2.53-.12,3.29-.14,9.7-.14s7.17.02,9.7.14Z"
                  />
                  <path
                    class="cls-1"
                    d="m11.68,24c0,6.81,5.52,12.32,12.32,12.32s12.32-5.52,12.32-12.32-5.51-12.32-12.32-12.32-12.32,5.51-12.32,12.32Zm20.32,0c0,4.42-3.58,8-8,8s-8-3.58-8-8,3.58-8,8-8,8,3.58,8,8Z"
                  />
                  <circle class="cls-2" cx="36.82" cy="11.19" r="2.88" />
                </g>
              </g>
            </svg>
          </article>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Head } from "@unhead/vue/components";
import SwitchColorScheme from "@/components/header/SwitchColorScheme.vue";
import { ref, onMounted } from "vue";
import Icon from "@/components/lib/Icon.vue";

const props = defineProps({
  colorScheme: String,
});
const emits = defineEmits();

onMounted(() => {});
</script>

<style scoped>
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
</style>

<style lang="scss" scoped>
.underConstruction {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-bg-color);
  height: 100vh;
  position: relative;

  header {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: end;
    width: 100%;
    padding: 3rem;
  }

  h1 {
    font-size: 48px;
    color: var(--main-color);
  }
  p {
    margin-top: 1rem;
    font-family: "Montserrat";
  }

  img {
    max-width: 300px;
    margin-bottom: 100px;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .socials-list {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    article {
      transition: all 0.3s ease-out;
      width: 30px;
      height: 30px;
      aspect-ratio: 1/1;
      display: block;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: #ebeff7;

      &:hover {
        cursor: pointer;

        &.instagram {
          transition: all 0.15s ease-out;
          fill: #fbc723;
        }

        &.linkedin {
          .linkedin-bg {
            transition: all 0.15s ease-out;
            fill: #fbc723;
          }
        }
      }

      .icon {
        aspect-ratio: 1/1;
        display: block;
      }

      &.linkedin {
        .linkedin-main {
          fill: #fff;
        }

        .linkedin-main,
        .linkedin-bg {
          fill-rule: evenodd;
          stroke-width: 0px;
        }

        .linkedin-bg {
          fill: #007ebb;
        }
      }

      &.instagram {
        transition: all 0.3s ease-out;
        fill: #f47133;
        // fill: var(--main-color);
        //fill: url(#Dégradé_sans_nom_30);
      }
    }
  }
}

/* Large desktop screens */
@media (min-width: 1440px) {
  .underConstruction {
    height: 100vh;
  }
}
/* Small desktop screens */
@media (min-width: 1440px) and (max-width: 1440px) {
}
/* Tablet screens */
@media (min-width: 1024px) and (max-width: 1440px) {
  .underConstruction {
    padding: 0 2rem;
    height: 100vh;
    text-align: center;
  }
}
/* Mobile screens (landscape) */
@media (min-width: 768px) and (max-width: 1024px) {
  .underConstruction {
    padding: 0 2rem;
    height: 100vh;

    text-align: center;
    img {
      max-width: 200px;
      margin-bottom: 50px;
    }
    h1 {
      font-size: 32px;
    }
  }
}
/* Mobile screens (portrait) */
@media (max-width: 768px) {
  .underConstruction {
    padding: 0 2rem;
    height: 100vh;

    text-align: center;
    img {
      max-width: 200px;
      margin-bottom: 50px;
    }
    h1 {
      font-size: 32px;
    }
  }
}
</style>
