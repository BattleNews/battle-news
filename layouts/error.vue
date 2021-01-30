<template>
  <div class="w-full flex flex-col items-center p-12 md:p-32">
    <h1>Oups... Cette page n'existe pas !</h1>
    <img class="w-84 h-auto" src="~/assets/logo/OISEAU_CHANTIER.webp" alt="Pigeon avec un casque de chantier">
    <h2>Tu peux revenir à l'accueil par ici !</h2>
    <NuxtLink to="/" class="btn btn-outline-default btn-lg text-base md:text-lg">
      Revenir au site
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
