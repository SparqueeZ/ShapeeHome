<template>
  <main>
    <Transition name="reduceOpacity">
      <confirmBox
        v-if="tryToLeaveParent"
        :tryToLeave="tryToLeaveParent"
        title="Etes-vous sûr de vouloir quitter ?"
        message="En quittant cette page, votre progression sera sauvegardée, et
            vous pourrez revenir plus tard."
        infosIcon="warning"
        rightBtn="Quitter"
        rightURL="/"
        rightIcon=""
        leftBtn="Continuer"
        leftURL=""
        leftIcon=""
        @btnLeft="handleQuit"
        @btnRight="handleStay"
        @btnLeave="handleStay"
      />
    </Transition>
    <Transition name="reduceOpacity">
      <confirmBox
        v-if="askToContinue"
        :tryToLeave="askToContinue"
        title="Voulez-vous reprendre là où vous vous êtes arrêté ?"
        message='Appuyez sur " Continuer " pour reprendre votre progression, ou sur " Recommencer " pour recommencer depuis 0.'
        infosIcon="warning"
        rightBtn="Recommencer"
        rightURL=""
        rightIcon=""
        leftBtn="Continuer"
        leftURL=""
        leftIcon=""
        @btnLeft="handleRestartForm"
        @btnRight="handleContinueForm"
        @btnLeave="handleContinueForm"
      />
    </Transition>
    <header>
      <SwitchColorScheme
        :colorScheme="colorScheme"
        @changeColorScheme="
          (newColorScheme) => {
            emit('changeColorScheme', newColorScheme);
          }
        "
      />
    </header>

    <TransitionGroup :name="stepTransition">
      <introduction
        v-if="step === 0"
        @saveChoice="saveChoice"
        @startForm="
          step += 1;
          stepTransition = 'stepTransition';
          saveChoice(true, 0);
        "
        @leave="tryToLeaveParent = true"
        :step="step"
      />

      <demandObject
        v-else-if="step === 1"
        @saveChoice="saveChoice"
        :step="step"
      />

      <method v-else-if="step === 2" @saveChoice="saveChoice" :step="step" />

      <design v-else-if="step === 3" @saveChoice="saveChoice" :step="step" />
    </TransitionGroup>

    <TransitionGroup name="footerAppear">
      <footer v-if="step >= 1">
        <div class="actionsBtn">
          <a @click="determineNextStep('down')">
            <div class="btn alt">
              <p>Retour en arrière</p>
            </div>
          </a>
          <a @click="determineNextStep('up')">
            <div class="btn">
              <p>Continuer</p>
              <Icon name="boxedArrow" />
            </div>
          </a>
        </div>
      </footer>
    </TransitionGroup>
  </main>
</template>

<script setup>
import confirmBox from "@/components/lib/confirmBox.vue";
import SwitchColorScheme from "@/components/header/SwitchColorScheme.vue";

// Etape 0 : Introduction
import introduction from "@/components/devis/introduction.vue";

// Etape 1 : L'objet de la demande
// Parent
import demandObject from "@/components/devis/object.vue";
// Enfant
import createwebapp from "@/components/devis/object/createwebapp.vue";
import createwebsite from "@/components/devis/object/createwebsite.vue";
import remakewebsite from "@/components/devis/object/remakewebsite.vue";

// Etape 11
import method from "@/components/devis/method.vue";

// Etape 20
import design from "@/components/devis/design.vue";

import Icon from "@/components/lib/Icon.vue";
import { ref, onMounted } from "vue";
const emit = defineEmits();
const props = defineProps({
  colorScheme: String,
});

const tryToLeaveParent = ref(false);
const askToContinue = ref(false);
const step = ref(0);
const stepTransition = ref("stepTransition");
const nextStep = ref(0);
const previousStep = ref(1);

const baseDevis = ref(
  JSON.stringify([true, null, null, null, null, null, null, null, null])
);

// Fonction pour sauvegarder le choix de l'user
const saveChoice = (userChoice, actualStep) => {
  //   console.log("saving choice :", userChoice, "for step :", actualStep);
  if (!localStorage.getItem("devis")) {
    // Créer en localStorage
    localStorage.setItem("devis", baseDevis.value);
    let localStorageItem = JSON.parse(localStorage.getItem("devis"));
    localStorageItem[actualStep] = userChoice;
    localStorage.setItem("devis", JSON.stringify(localStorageItem));
  } else {
    // Enregistre en localStorage
    let localStorageItem = JSON.parse(localStorage.getItem("devis"));
    localStorageItem[actualStep] = userChoice;
    localStorage.setItem("devis", JSON.stringify(localStorageItem));
  }
};

// Fonction pour aller sur la bonne étape.
const determineNextStep = (direction) => {
  saveChoice();
  let localStorageItem = JSON.parse(localStorage.getItem("devis"));

  if (direction === "up") {
    console.log("Prochaine étape.");
    stepTransition.value = "stepTransition";
    // previousStep.value = step.value;
    // step.value += step.value;

    // Si l'étape 1 est remplie par 1 :
    if (step.value === 1) {
      if (localStorageItem[1] === 1) {
        step.value = 2;
      } else step.value = 3;
    } else {
      step.value += 1;
    }
  } else if (direction === "down") {
    console.log("Etape précédente");
    stepTransition.value = "stepTransitionReverse";
    if (step.value === 3) {
      if (localStorageItem[1] === 1) {
        step.value = 2;
      } else {
        step.value = 1;
      }
    } else step.value -= 1;
  }
};

const handleQuit = () => {
  tryToLeaveParent.value = false;
};
const handleStay = () => {
  tryToLeaveParent.value = false;
  stepTransition.value = "stepTransition";
  loadLatestStep();
};

const handleContinueForm = () => {
  askToContinue.value = false;
  loadLatestStep();
};

const handleRestartForm = () => {
  askToContinue.value = false;
  localStorage.removeItem("devis");
};

const loadLatestStep = () => {
  let localStorageItem = JSON.parse(localStorage.getItem("devis"));
  if (localStorageItem) {
    let stepComplete = 0;

    localStorageItem.forEach((step) => {
      if (step !== null) stepComplete += 1;
    });

    console.log(stepComplete);
    step.value = stepComplete - 1;
  }
};

const continueBox = () => {
  askToContinue.value = true;
};

onMounted(() => {
  let localStorageItem = JSON.parse(localStorage.getItem("devis"));
  if (localStorageItem && localStorageItem[1] !== 0) {
    continueBox();
  }
});
</script>

<style lang="scss" scoped>
main {
  background-color: var(--main-bg-color);

  header {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    display: flex;
    justify-content: end;
    width: 100%;
    padding: 3rem;
  }

  footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 2rem);
    padding: 1rem;
    display: flex;
    justify-content: end;
    background-color: var(--main-bg-color);

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
}

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
</style>
