<template>
  <BaseSection id="valeurs" title="Une entreprise, trois valeurs fondamentales">
    <div class="flex flex-wrap justify-center">
      <div class="p-6 lg:w-1/3 flex flex-col text-center items-center">
        <div class="w-40 h-40 lg:w-56 lg:h-56 inline-flex items-center justify-center my-12 flex-shrink-0">
          <img src="~assets/background/madeinfrance.png" alt="Made in France">
        </div>
        <div class="flex flex-col flex-grow">
          <h3 class="text-lightblack text-2xl uppercase tracking-widest mb-3">
            Made in France
          </h3>
          <p class="leading-relaxed text-gray-500 text-xl text-justify flex-auto">
            Nous sommes fiers de notre pays. C’est pourquoi nous avons décidé de fabriquer notre jeu en France afin de supporter la production française ! 🇫🇷
          </p>
          <a class="mt-3 text-orange items-center" href="#">En savoir +</a>
        </div>
      </div>
      <div class="p-6 lg:w-1/3 mb-0 flex flex-col text-center items-center">
        <div class="w-40 h-40 lg:w-56 lg:h-56 inline-flex items-center justify-center my-12 flex-shrink-0">
          <img src="~assets/background/ecologique.png" alt="Eco-responsable">
        </div>
        <div class="flex flex-col flex-grow">
          <h3 class="text-lightblack text-2xl uppercase tracking-widest mb-3">
            Eco-responsable
          </h3>
          <p class="leading-relaxed text-gray-500 text-xl text-justify flex-auto">
            Rire c’est bien, protéger la nature c'est mieux ! C’est pourquoi notre entreprise s’engage à respecter l’environnement en produisant un jeu de société éco-responsable et engagé. 🌿
          </p>
          <a class="mt-3 text-orange items-center" href="#">En savoir +</a>
        </div>
      </div>
      <div class="p-6 lg:w-1/3 flex flex-col text-center items-center">
        <div class="w-40 h-40 lg:w-56 lg:h-56 inline-flex items-center justify-center my-12 flex-shrink-0">
          <img src="~assets/background/qualite.png" alt="100% Qualitatif">
        </div>
        <div class="flex flex-col flex-grow">
          <h3 class="text-lightblack text-2xl uppercase tracking-widest mb-3">
            100% qualitatif
          </h3>
          <p class="leading-relaxed text-gray-500 text-xl text-justify flex-auto">
            Imaginé par sept étudiants, créé et fabriqué en France, notre jeu de société a été conçu avec des matériaux de qualité soigneusement choisis. 💖
          </p>
          <a class="mt-3 text-orange items-center" href="#">En savoir +</a>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '../base/BaseSection.vue'
export default { components: { BaseSection } }
</script>

<style scoped>
    section {
        max-width: 1700px;
    }

    .text-justify {
      text-align-last: center;
    }
</style>
