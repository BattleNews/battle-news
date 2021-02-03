<template>
  <section id="hero" class="hidden xl:block mb-12">
    <div class="middle">
      <!-- TODO : Rajouter un bouton de scroll vers le bas -->
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
    section {
        height: calc(100vh - 94px);
        background-image: url("~assets/background/HERO_BATTLE_NEWS.jpg");
        background-position: center 50px;
        background-size: cover;
        background-attachment: fixed;
    }

    .middle {
      position: absolute;
      top: 85%;
      width: 100%;
      text-align: center;
    }
</style>
