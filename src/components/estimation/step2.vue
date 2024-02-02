<template>
  <section class="page">
    <createWebSite
      v-if="localStorageDevis[1].selected === 1"
      @saveChoice="saveChoice"
    />
    <remakeWebSite
      v-if="localStorageDevis[1].selected === 2"
      @saveChoice="saveChoice"
    />
    <createWebApp
      v-if="localStorageDevis[1].selected === 3"
      @saveChoice="saveChoice"
    />
    <TransitionGroup name="footerAppear">
      <footer class="formFooter" v-if="step >= 1">
        <div class="actionsBtn">
          <a
            v-if="step > 1"
            @click="determineStepTransition(step - 1, 'return')"
          >
            <div class="btn alt">
              <p>Retour en arrière</p>
            </div>
          </a>
          <a @click="determineStepTransition(step + 1)">
            <div class="btn mainBg" :class="choice === 0 ? 'disabled' : ''">
              <p>Continuer</p>
              <Icon name="boxedArrow" />
            </div>
          </a>
        </div>
      </footer>
    </TransitionGroup>
  </section>
</template>

<script setup>
import Icon from "@/components/lib/Icon.vue";

import createWebSite from "./createwebsite/step1.vue";
import remakeWebSite from "./remakewebsite/step1.vue";
import createWebApp from "./createwebapp/step1.vue";
import { ref, onMounted } from "vue";

const step = ref(1);
const stepTransition = ref("stepTransition");
const choice = ref(0);
const emit = defineEmits();
const localStorageDevis = ref(JSON.parse(localStorage.getItem("devis")));

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
      localStorageItem[2][step - 1].selected = value;
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
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  footer {
    width: fit-content;
    z-index: 102;
    background-color: transparent;
  }
}
</style>
