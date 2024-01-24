<template>
  <main>
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
      <step1 v-if="step === 1" @saveChoice="saveChoice" />
      <step2 v-else-if="step === 2" />
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
    <footer>
      <div class="actionsBtn">
        <a @click="determineStepTransition(step - 1)">
          <div class="btn alt">
            <p>Retour en arrière</p>
          </div>
        </a>
        <a @click="determineStepTransition(step + 1)">
          <div class="btn">
            <p>Continuer</p>
            <Icon name="boxedArrow" />
          </div>
        </a>
      </div>
    </footer>
  </main>
</template>

<script setup>
import SwitchColorScheme from "@/components/header/SwitchColorScheme.vue";
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

const step = ref(1);
const stepTransition = ref("stepTransition");

const determineStepTransition = (newStep) => {
  if (newStep >= 1 && newStep <= 12) {
    if (newStep >= step.value) {
      stepTransition.value = "stepTransition";
      step.value = newStep;
    } else {
      stepTransition.value = "stepTransitionReverse";
      step.value = newStep;
    }
  } else {
    console.warn("Vous ne pouvez pas naviguer plus loin.");
  }
};

const saveChoice = (step, value) => {
  console.log("Etape:", step, " Choix numéro:", value);
  const choiceResume = {
    step1: 0,
    step2: 0,
    step3: 0,
    step4: 0,
    step5: 0,
    step6: 0,
    step8: 0,
    step9: 0,
    step10: 0,
    step11: 0,
    step12: 0,
  };

  choiceResume.step1 = value;

  const localStorageItem = localStorage.getItem("devis");
  if (!localStorageItem) {
    console.log("Rien dans le localStorage");
  }
  localStorage.setItem("devis", JSON.stringify(choiceResume));
};
</script>

<style lang="scss" scoped>
main {
  position: relative;

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
</style>
