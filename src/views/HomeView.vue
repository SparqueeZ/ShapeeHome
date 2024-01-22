<template>
  <main>
    <Head>
      <title>Shapee - Créations web</title>
      <meta name="author" content="Shapee" />
      <meta
        name="description"
        content="Donnons forme a votre projet ! Shapee est une agence de création de site / application web basee a Angers(49000). Un devis ? Un projet web ? N'hésitez pas nous sommes ouvert à toutes vos propositions."
      />
      <meta
        name="subject"
        content="Création de solutions web.(sites, application & plus)"
      />
      <meta name="viewport" content="width=device-width" initial-scale="1" />
      <link
        rel="icon"
        href="https://shapee.re/favicon.ico"
        type="image/x-icon"
      />
      <link rel="canonical" href="https://www.shapee.re" />
      <meta http-equiv="Content-Language" content="fr" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="Angers" />
      <meta name="geo.position" content="47.4667;-0.5500" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta
        name="keywords"
        content="
        Devis site internet,
        Devis site internet Angers,
        Devis site internet Réunion,
        Agence de création de site web,
        Agence de création de site web Angers,
        Agence de création de site web Réunion,
        Shapee,
        Shapee re, 
        Shapee reunion, 
        Shapee angers, 
        création site internet Angers, 
        création site internet Réunion, 
        création site web Angers, 
        création site web Réunion, 
        création application web Angers, 
        création application web Réunion, 
        site internet Angers,
        site internet Réunion,
        site vitrine Angers, 
        site vitrine Réunion, 
        site catalogue Angers, 
        site catalogue Réunion, 
        site e-commerce Angers, 
        site e-commerce Réunion, 
        agence développement web Angers, 
        agence développement web Réunion, 
        développement web Angers, 
        développement web Réunion, 
        agence conception web Angers, 
        agence conception web Réunion, 
        conception web Angers, 
        conception web Réunion, 
        site web pas cher Angers, 
        site web pas cher Réunion,
        créer site pas cher Angers,
        créer site pas cher Réunion, 
        meilleure agence web Angers, 
        meilleure agence web Réunion, 
        site internet de qualité Angers, 
        site internet de qualité Réunion, 
        création site professionnel Angers,
        création site professionnel Réunion"
      />
      <meta name="copyright" content="©2024 - Shapee.re" />
      <meta property="og:site_name" content="Shapee" />
      <meta
        property="og:title"
        content="Création de solutions web partout en france : site vitrine, catalogue ou e-commerce."
      />
      <meta
        property="og:description"
        content="Donnons forme a votre projet ! Shapee est une agence web basee a Angers(49000) specialisee dans la creation de sites et d'applications web."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shapee.re" />
      <meta property="og:locale" content="fr_FR" />
    </Head>
    <section class="page">
      <header>
        <img
          src="../assets/img/logo-shapee.svg"
          alt="Logo de shapee, ce logo est composé d'un S, ayant une couleur principale jaune, et du texte en couleur : blanc si le site est au fond noir et noir si le site est au fond blanc."
        />
      </header>

      <section class="hero">
        <div class="title">
          <div
            class="bgGradient"
            :class="colorScheme === 'light' ? 'light' : 'dark'"
          ></div>
          <h1 class="whiteTitle">Créons votre</h1>
          <Transition>
            <h1 class="yellowTitle" v-if="show">{{ heroTitle }}</h1>
          </Transition>
        </div>
        <h2 class="subtitle">
          Nous sommes ici pour donner forme à vos projets les plus fous ! Alors
          n'attendez plus, contactez nous.
        </h2>
        <SpacerElement height="50px" />
        <a href="#contactez-nous">
          <div class="btn">
            <p>Nous contacter</p>
            <Icon name="boxedArrow" />
          </div>
        </a>
      </section>

      <SpacerElement height="100px" />

      <DefaultContent
        class="reduced"
        imgLocation="right"
        :imageUrl="descriptionimg"
        imageAlt="Un ordinateur portabl dans unfond gris vu d'au dessus à gauche, affichant le site internet 'Shapee.re', avec comme titre principal 'Créons votre site web' sur fond foncé."
        imgWidth="90%"
        title="Shapee, une agence qui donne forme à vos projets"
        text="Donnons forme à votre projet, ensemble nous allons mettre votre projet en avant, étape par étape, nous allons construire le projet de votre choix !"
        btnTitle="Nous contacter"
        btnLink="#contactez-nous"
        btnIcon="boxedArrow"
      />

      <SpacerElement height="200px" />

      <DefaultContent
        class="reduced"
        imgLocation="left"
        :imageUrl="wordpressvscode"
        imageAlt="Ordinateur portable dans un espace en béton / industriel, vu de dessous à gauche et affichant le logo de wordpress contre les logos de HTML et CSS."
        imgWidth="94%"
        title="Deux méthodes pour réaliser votre site"
        text=""
        btnTitle=""
        btnLink=""
        btnIcon=""
        categoryTitle="Méthodes"
        cardTopIcon="wordpress"
        cardTopTitle="Wordpress"
        cardTopText="Wordpress est un CMS ( Content management System ), en bref un CMS permettra de créer un site plus rapidement, cependant la créativité sera plus limitée."
        cardMidIcon="code"
        cardMidTitle="Code"
        cardMidText="Votre site peut également être codé, cependant nous devrons y consacrer plus de temps, mais ici la créativité n'aura que  pour limite votre imagination !"
      />

      <SpacerElement height="200px" />

      <DefaultContent
        class="reduced"
        imgLocation="right"
        :imageUrl="mockupproflam"
        imageAlt="Mockup d'un ordinateur portable à moitié en train de flotter, mettant en scène le site 'proflam.re', site réalisé par l'agence Shapee."
        imgWidth="94%"
        title="Nous réalisons des sites qui vous ressemblent"
        text="Nos sites sont totalement à l'image de leurs propriétaires, nos réalisation sont originales et nous nous efforçons de créer des sites qui correspondent à la vision voulue."
        btnTitle="Nous contacter"
        btnLink="#contactez-nous"
        btnIcon="boxedArrow"
        categoryTitle="Réalisations"
      />

      <SpacerElement height="100px" />

      <ExamplesContent class="reduced" />

      <SpacerElement height="200px" />

      <ToolsContent class="reduced" />

      <SpacerElement height="200px" />

      <ServicesContent />

      <SpacerElement height="200px" />

      <ContactForm class="reduced" />

      <SpacerElement height="200px" />
    </section>
  </main>
</template>

<script setup>
import { Head } from "@unhead/vue/components";
import { ref, onMounted } from "vue";
import { forceDarkMode } from "@/assets/lib/lib.js";
import Icon from "@/components/lib/Icon.vue";
import DefaultContent from "@/components/home/defaultContent.vue";
import ExamplesContent from "@/components/home/examplesContent.vue";
import ToolsContent from "@/components/home/toolsContent.vue";
import ServicesContent from "@/components/home/servicesContent.vue";
import SpacerElement from "@/components/home/spacer.vue";
import ContactForm from "@/components/home/contactForm.vue";
const show = ref(true);

const props = defineProps({
  colorScheme: String,
});
const emits = defineEmits();

const heroTitle = ref("site web");
const currentIndex = ref(1);
const heroTitleArray = ref(["site web", "app web", "projet web"]);

// Import des images pour les composants enfants.
import descriptionimg from "@/assets/img/description-img-opti.webp";
import wordpressvscode from "@/assets/img/wordpress-vs-code-opti.webp";
import mockupproflam from "@/assets/img/mockup-proflam-opti.webp";

const changeHeroTitle = () => {
  show.value = false;
  // heroTitle.value = "";
  heroTitle.value = heroTitleArray.value[currentIndex.value];
  currentIndex.value = (currentIndex.value + 1) % heroTitleArray.value.length;
  setTimeout(() => {
    show.value = true;
  }, 500);
};

onMounted(() => {
  setInterval(() => {
    changeHeroTitle();
  }, 5000);
  emits("changeColorScheme", forceDarkMode());
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
</style>

<style lang="scss">
.sectionTitle {
  font-family: "Nohemi";
  text-align: center;
  font-size: 40px;
  color: #fff;
  margin-bottom: 3rem;
}
</style>

<style lang="scss" scoped>
main {
  background-color: var(--main-bg-color);
  width: 100%;

  .page {
    position: relative;

    .reduced {
      width: 70%;
      margin: auto;
    }
    header {
      width: 100%;
      height: 50px;
      position: absolute;
      padding: 2rem;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
    }

    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        height: calc(72px + 30px);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;

        .bgGradient {
          pointer-events: none;
          position: absolute;
          // background-color: aliceblue;
          width: 100%;
          height: calc(72px + 30px);

          background: var(--main-bg-color);
          &.dark {
            background: linear-gradient(
              0deg,
              rgba(3, 15, 16, 1) 0%,
              rgba(3, 15, 16, 1) 5%,
              rgba(3, 15, 16, 0.850577731092437) 9%,
              rgba(3, 15, 16, 0.7049194677871149) 14%,
              rgba(3, 15, 16, 0.5032387955182073) 17%,
              rgba(3, 15, 16, 0.2539390756302521) 19%,
              rgba(3, 15, 16, 0) 20%
            );
          }

          &.light {
            background: linear-gradient(
              0deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 5%,
              rgba(255, 255, 255, 0.850577731092437) 9%,
              rgba(255, 255, 255, 0.7049194677871149) 14%,
              rgba(255, 255, 255, 0.5032387955182073) 17%,
              rgba(255, 255, 255, 0.2539390756302521) 19%,
              rgba(255, 255, 255, 0) 20%
            );
          }

          z-index: 2;
        }
        .whiteTitle {
          font-weight: 500;
          color: #fff;
          color: var(--main-color);
        }
        .yellowTitle {
          padding-left: 1rem;
          font-weight: 500;
          color: var(--primary-color);
          z-index: 1;
        }
      }
      .subtitle {
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: var(--third-color);
        max-width: 700px;
        line-height: 30px;
        text-align: center;
      }
    }

    .spacing {
      height: 100px;
      width: 100%;
    }
  }
}

/* Large desktop screens */
@media (min-width: 1440px) {
  h1 {
    font-size: 72px;
  }
}
/* Small desktop screens */
@media (min-width: 1440px) and (max-width: 1440px) {
  h1 {
    font-size: 72px;
  }
}
/* Tablet screens */
@media (min-width: 1024px) and (max-width: 1440px) {
  h1 {
    font-size: 32px;
  }
}
/* Mobile screens (landscape) */
@media (min-width: 768px) and (max-width: 1024px) {
  h1 {
    font-size: 32px;
  }
}
/* Mobile screens (portrait) */
@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }
}
</style>
