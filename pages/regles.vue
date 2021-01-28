<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" title="Les Règles du Jeu">
      <div class="flex flex-wrap justify-center pt-10 lg:pt-20">
        <!-- <RulesCard title="À la recherche des Fake News" :image-url="require('~/assets/background/CARD2.png')" rotate="2">
          <p>
            Après avoir choisi leur jeton personnage et pioché 5 cartes « évènement », les joueurs désignent le « Fact master ».
            Celui-ci devra lire une carte Twittee. Ce rôle change à chaque tour.
          </p>
          <span class="text-lg lg:text-xl">*Fact master : Maître des faits </span>
        </RulesCard>
        <RulesCard is-red title="Réfléchissez et misez" :image-url="require('~/assets/background/CARD3.png')" rotate="-1">
          <p>Lorsque le fait est énoncé, chaque joueur dépose son jeton sur la carte « évènement » face cachée de son choix.</p>
          <p>Retournez le jeton selon la véracité ou non du fait.</p>
          <p>• Si le fait vous semble faux, déposez le jeton face fake news.</p>
          <p>• Si le fait vous semble vrai, placez le jeton face fun fact.</p>
        </RulesCard>
        <RulesCard title="L'issue incertaine" :image-url="require('~/assets/background/CARD1.png')" rotate="1">
          <p>
            Les joueurs ayant misé sur le bon côté de leur jeton déposent leur carte « évènement » toujours face cachée dans la pioche.
          </p>
          <p>
            Les joueurs perdants retournent leur carte misée et découvrent leur malus.
          </p>
        </RulesCard> -->
        <RulesCard
          v-for="(rule, index) in rules"
          :key="index"
          :is-red="index % 2 == 1"
          :title="rule.title"
          :image-url="require('~/assets/background/'+ rule.img)"
          :rotate="rule.rotate"
        >
          <nuxt-content :document="rule" />
        </RulesCard>
      </div>
    </BaseSection>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const rules = await $content('rules').sortBy('rank').fetch()
    return { rules }
  }
}
</script>

<style>
  .nuxt-content p {
    @apply mb-4;
  }

  .nuxt-content em {
    @apply text-xl;
  }

  @media (max-width: 1023px) {
    .nuxt-content em {
      @apply text-lg;
    }
  }

</style>
