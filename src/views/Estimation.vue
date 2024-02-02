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
      <step0
        v-if="step === 0"
        @saveChoice="saveChoice"
        @startForm="determineStepTransition(step + 1), saveChoice()"
        @leave="tryToLeaveParent = true"
      />
      <step1 v-if="step === 1" @saveChoice="saveChoice" />
      <step2 v-else-if="step === 2" @saveChoice="saveChoice" />
      <step3 v-else-if="step === 3" />
      <step4 v-else-if="step === 4" />
      <step5 v-else-if="step === 5" />
      <step6 v-else-if="step === 6" />
      <step7 v-else-if="step === 7" />
      <step8 v-else-if="step === 8" />
      <step9 v-else-if="step === 9" />
      <step10 v-else-if="step === 10" />
      <step11 v-else-if="step === 11" />
      <step12 v-else-if="step === 12" />
    </TransitionGroup>
    <TransitionGroup name="footerAppear">
      <footer v-if="step >= 1">
        <div class="actionsBtn">
          <a @click="determineStepTransition(step - 1, 'return')">
            <div class="btn alt">
              <p>Retour en arrière</p>
            </div>
          </a>
          <a @click="determineStepTransition(step + 1)">
            <div class="btn" :class="choice === 0 ? 'disabled' : ''">
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
import step0 from "@/components/estimation/step0.vue";
import step1 from "@/components/estimation/step1.vue";
import step2 from "@/components/estimation/step2.vue";
import step3 from "@/components/estimation/step3.vue";
import step4 from "@/components/estimation/step4.vue";
import step5 from "@/components/estimation/step5.vue";
import step6 from "@/components/estimation/step6.vue";
import step7 from "@/components/estimation/step7.vue";
import step8 from "@/components/estimation/step8.vue";
import step9 from "@/components/estimation/step9.vue";
import step10 from "@/components/estimation/step10.vue";
import step11 from "@/components/estimation/step11.vue";
import step12 from "@/components/estimation/step12.vue";
import Icon from "@/components/lib/Icon.vue";
import { ref, onMounted } from "vue";
const emit = defineEmits();
const props = defineProps({
  colorScheme: String,
});

const tryToLeaveParent = ref(false);
const askToContinue = ref(false);
const step = ref(0);
const choice = ref(0);
const stepTransition = ref("stepTransition");

const determineStepTransition = (newStep, type) => {
  console.log(choice.value, step.value);
  if (newStep < 0) {
    tryToLeaveParent.value = true;
  }
  if (step.value === 0) {
  }
  if (step.value !== 0 && choice.value === 0 && type !== "return") {
    return;
  }
  if (newStep >= -1 && newStep <= 12) {
    if (newStep >= step.value) {
      stepTransition.value = "stepTransition";
      console.log(stepTransition.value);
      step.value = newStep;
      choice.value = 0;
    } else {
      stepTransition.value = "stepTransitionReverse";
      console.log(stepTransition.value);
      step.value = newStep;
      choice.value = 0;
    }
  } else {
    console.warn("Vous ne pouvez pas naviguer plus loin.");
  }
};

const saveChoice = (step, value) => {
  const localStorageItem = JSON.parse(localStorage.getItem("devis"));
  if (value) choice.value = value;
  if (localStorageItem) {
    if (step && value) {
      localStorageItem[step].selected = value;
      localStorage.setItem("devis", JSON.stringify(localStorageItem));
    } else return;
  } else {
    const choiceResumeNew = [
      { created: "25/01/2024" },
      { selected: 0 },
      [{ selected: 0 }, { selected: 0 }, { selected: 0 }],
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
      { selected: 0 },
    ];
    localStorage.setItem("devis", JSON.stringify(choiceResumeNew));
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
    let i = 0;
    localStorageItem.forEach((step) => {
      if (step.selected === 0) {
        i += 1;
      }
    });
    step.value = 13 - i;
  }
};

const continueBox = () => {
  askToContinue.value = true;
};

onMounted(() => {
  //loadLatestStep();
  let localStorageItem = JSON.parse(localStorage.getItem("devis"));
  if (localStorageItem && localStorageItem[1].selected !== 0) continueBox();
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
