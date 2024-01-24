<template>
  <main>
    <Head>
      <link rel="canonical" href="https://www.shapee.re/devis" />
    </Head>
    <section class="page">
      <header>
        <SwitchColorScheme
          :colorScheme="colorScheme"
          @changeColorScheme="
            (newColorScheme) => {
              emits('changeColorScheme', newColorScheme);
            }
          "
        />
      </header>
      <Transition name="form">
        <h1 v-if="showTitle" :class="showForm ? 'top100' : ''">
          Obtenez un devis gratuit.
        </h1>
      </Transition>
      <div class="estimateContent">
        <Transition name="form">
          <div v-if="showForm" class="titles">
            <h2>Souhaitez-vous créer un devis totalement personnalisé ?</h2>
            <p>
              En poursuivant, vous allez être redirigé vers un formulaire afin
              de créer votre devis personnalisé qui durera ~3 minutes.
            </p>
          </div>
        </Transition>
        <Transition name="form">
          <div v-if="showForm" class="actionBtns">
            <a href="/">
              <div class="btn alt">
                <p>Retourner à l'accueil</p>
              </div>
            </a>
            <a href="#">
              <div class="btn">
                <p>Créer mon devis</p>
                <Icon name="clock" />
              </div>
            </a>
          </div>
        </Transition>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Head } from "@unhead/vue/components";
import { ref, onMounted } from "vue";
import Icon from "@/components/lib/Icon.vue";
import SwitchColorScheme from "@/components/header/SwitchColorScheme.vue";

const showTitle = ref(false);
const showForm = ref(false);

const props = defineProps({
  colorScheme: String,
});

const emits = defineEmits();

onMounted(() => {
  setTimeout(() => {
    showTitle.value = true;
  }, 500);
  setTimeout(() => {
    showForm.value = true;
  }, 2000);
});
</script>

<style lang="scss" scoped>
.form-enter-active,
.form-leave-active {
  transition: all 1s ease-in-out;
}
.form-enter-from,
.form-leave-to {
  scale: 0.9;
  opacity: 0;
  transform: translateY(500px);
}

.form-enter-active .estimateContent,
.form-leave-active .estimateContent {
  transition: all 0.3s ease-in-out;
}

.page {
  background-color: var(--main-bg-color);
  color: var(--main-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    position: absolute;
    text-align: center;
    font-weight: 500;
    font-size: 64px;
    transition: top 1s ease-in-out, scale 1s ease-in-out, opacity 1s ease-out;
    top: 50%;

    &.top100 {
      top: 100px;
      scale: 0.9;
    }
  }

  .estimateContent {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    .titles {
      max-width: 870px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h2 {
        font-size: 32px;
        font-weight: 500;
      }
      p {
        max-width: 770px;

        font-size: 18px;
        font-weight: 400;
        font-family: "Montserrat";
      }
    }
    .actionBtns {
      display: flex;
      transition-delay: 0.03s;
      .btn {
        .icon {
          rotate: -90deg;
        }
      }
    }
  }
}
</style>
