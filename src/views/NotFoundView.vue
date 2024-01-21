<template>
  <Head>
    <title>Shapee</title>
    <meta
      name="description"
      content="La page que vous demandez n'a pas été trouvé. Veuillez réessayer."
    />
    <meta name="viewport" content="width=device-width" initial-scale="1" />
    <link rel="canonical" href="https://www.shapee.re" />
  </Head>
  <section class="error404">
    <img
      src="../assets/img/404.jpg"
      alt="Image indiquant un homme devant un écran avec un point d'exclamation au-dessus de sa tête, un engrenage cassé à droite et au centre un panneau triangle affichant l'erreur 404, "
    />
  </section>
</template>

<script setup>
import { Head } from "@unhead/vue/components";
</script>

<style lang="scss" scoped>
.error404 {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 800px;
  }
}
</style>
