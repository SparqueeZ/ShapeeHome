<template>
  <section id="contactez-nous" class="contactFormContent">
    <h3 class="sectionTitle">Contactez-nous</h3>

    <form @submit.prevent="sendContactForm">
      <section class="personnalInfos">
        <div class="inputContainer lastname">
          <Icon name="people" />
          <input v-model="lastname" type="text" placeholder="Nom de famille" />
        </div>
        <div class="inputContainer firstname">
          <Icon name="people" />
          <input v-model="firstname" type="text" placeholder="Prenom" />
        </div>
      </section>
      <section class="contactInfos">
        <div class="inputContainer email">
          <Icon name="mail" />
          <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="inputContainer telephone">
          <Icon name="phone" />
          <input v-model="telephone" type="text" placeholder="Téléphone" />
        </div>
      </section>
      <section class="messageInfos">
        <div class="inputContainer details">
          <Icon name="messages" />
          <textarea
            v-model="details"
            type="text"
            placeholder="Détaillez votre projet"
          />
        </div>
      </section>
      <div class="buttonInfos">
        <button type="submit">Envoyer</button>

        <div class="formMessage">
          <Transition>
            <p
              v-if="formMessage"
              :class="lastResponseStatus === 200 ? 'ok' : 'nok'"
            >
              {{ formMessage }}
            </p>
          </Transition>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { checkInput } from "@/assets/lib/lib";
import Icon from "../lib/Icon.vue";
import axios from "axios";

const lastname = ref();
const firstname = ref();
const email = ref();
const telephone = ref();
const details = ref();

const sendingForm = ref(false);
const formMessage = ref("");
const lastResponseStatus = ref();

const sendContactForm = () => {
  // errorMessage.value = "";
  // successMessage.value = "";
  // emailErrorMessage.value = "";
  // lastnameErrorMessage.value = "";
  // firstnameErrorMessage.value = "";
  // detailsErrorMessage.value = "";
  sendingForm.value = true;
  formMessage.value = "";

  setTimeout(async () => {
    if (
      lastname.value &&
      firstname.value &&
      email.value &&
      telephone.value &&
      details.value
    ) {
      if (!checkInput("email", email.value)) {
        // emailErrorMessage.value = "Le format de l'adresse mail est incorrect.";
        console.log("Le format de l'adresse mail est incorrect.", email.value);
      } else if (!checkInput("username", lastname.value)) {
        // lastnameErrorMessage.value = "Format incorrect. (Lettres uniquement)";
        console.log("Format incorrect. (Lettres uniquement)");
      } else if (!checkInput("username", firstname.value)) {
        // firstnameErrorMessage.value = "Format incorrect. (Lettres uniquement)";
        console.log("Format incorrect. (Lettres uniquement)");
      } else {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const seconds = String(currentDate.getSeconds()).padStart(2, "0");
        const sqlFormattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        try {
          const response = await axios({
            method: "post",
            url: "https://nodejs.dash.shapee.re/api/contactForm",
            data: {
              choice: "Prise de contact",
              firstname: firstname.value,
              lastname: lastname.value,
              email: email.value,
              details: `[${telephone.value}], ${details.value}`,
              date: sqlFormattedDate,
            },
          });

          if (response.status === 200) {
            console.log("Formulaire envoyé avec succès.");
            formMessage.value = "Formulaire envoyé avec succès.";
            lastResponseStatus.value = response.status;
          }
        } catch (error) {
          // errorMessage.value =
          //   "Il y a eu une erreur lors de l'envoi du formulaire.";
          console.error(
            "Il y a eu une erreur lors de l'envoi du formulaire.",
            error
          );
        }

        sendingForm.value = false;
        lastname.value = "";
        firstname.value = "";
        email.value = "";
        telephone.value = "";
        details.value = "";
        // formChoice.value = "";
        return;
      }
    }
    if (!lastname.value) {
      // lastnameErrorMessage.value = "Le champ doit être rempli.";
      formMessage.value = "Le champ 'Nom de famille' doit être rempli.";
      lastResponseStatus.value = "400";
      return;
    }
    if (!firstname.value) {
      // firstnameErrorMessage.value = "Le champ doit être rempli.";
      formMessage.value = "Le champ 'Prenom' doit être rempli.";
      lastResponseStatus.value = "400";
      return;
    }
    if (!email.value) {
      // emailErrorMessage.value = "Le champ doit être rempli.";
      formMessage.value = "Le champ 'Email' doit être rempli.";
      lastResponseStatus.value = "400";
      return;
    }
    if (!telephone.value) {
      // telephoneErrorMessage.value = "Le champ doit être rempli.";
      formMessage.value = "Le champ 'Telephone' doit être rempli.";
      lastResponseStatus.value = "400";
      return;
    }
    if (!details.value) {
      // detailsErrorMessage.value = "Le champ doit être rempli.";
      formMessage.value = "Le champ 'Détaillez votre projet' doit être rempli.";
      lastResponseStatus.value = "400";
      return;
    }

    sendingForm.value = false;
  }, 100);
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.1s ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.inputContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--third-bg-color);
  border-radius: 0.3rem;
  overflow: hidden;

  .icon {
    display: block;
    height: 20px;
    width: 20px;
    padding: 1rem;
    fill: var(--secondary-color);
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    font-family: "Montserrat";
    font-size: 16px;
    padding: 1rem 0;
    background-color: var(--third-bg-color);
    color: var(--main-color);

    &::placeholder {
      color: var(--secondary-color);
      font-weight: 500;
    }
  }
}

.contactFormContent {
  width: 50% !important;
  background-color: var(--second-bg-color);
  padding: 5rem;
  border-radius: 1rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .personnalInfos {
      display: grid;
      grid-template-columns: 48% 4% 48%;
      grid-template-areas: "lastname spaced firstname";
      width: 100%;
      .inputContainer {
        &.firstname {
          grid-area: firstname;
        }
        &.lastname {
          grid-area: lastname;
        }
      }
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    .contactInfos {
      display: grid;
      grid-template-columns: 48% 4% 48%;
      grid-template-areas: "email space telephone";
      width: 100%;

      .telephone {
        grid-area: telephone;
        width: 100%;
      }

      .email {
        grid-area: email;
      }
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    .messageInfos {
      width: 100%;

      .inputContainer {
        width: 100%;
        display: flex;
        align-items: start;
      }
      textarea {
        width: 100%;
        height: 100px;
        resize: vertical;
        border: none;
        outline: none;
        width: 100%;
        font-family: "Montserrat";
        margin: 0.8rem 0 0 0;
        font-size: 16px;
        background-color: var(--third-bg-color);
        color: var(--main-color);

        &::placeholder {
          color: var(--secondary-color);
          font-weight: 500;
        }
      }
    }

    button {
      border: none;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      margin: 2rem 0 0 0;
      border-radius: 0.3rem;
      background-color: var(--third-color);
      color: var(--main-color);
      font-weight: 600;
      font-size: 18px;
      width: 100%;
      cursor: pointer;
      font-family: "Montserrat";
      transition: all 0.2s ease-out;

      .icon {
        display: block;
        width: 20px;
        height: 20px;
        rotate: 180deg;
        fill: var(--main-color);
      }

      &:hover {
        transition: 0.2s ease-out all;
        background-color: var(--primary-color);
        color: var(--main-bg-color);
      }
    }
    .formMessage {
      padding: 1rem 1rem 0 1rem;
      min-height: 20px;
      p {
        font-family: "Montserrat";
        &.ok {
          color: #00e097;
        }
        &.nok {
          color: #f64d60;
        }
      }
    }
    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  /* Large desktop screens */
  @media (min-width: 1440px) {
  }
  /* Small desktop screens */
  @media (min-width: 1440px) and (max-width: 1440px) {
  }
  /* Tablet screens */
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
  /* Mobile screens (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  /* Mobile screens (portrait) */
  @media (max-width: 768px) {
    width: 80% !important;
    padding: 1rem;
  }
}
</style>
