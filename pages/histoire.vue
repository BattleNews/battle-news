<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" title="Qui sommes-nous ?">
      <div class="mx-auto mt-16 w-full md:w-5/6 lg:w-4/6">
        <div class="mb-16 sm:mb-16 md:mb-32">
          <div class="px-10 py-12 rounded-3xl shadow-2xl text-lightwhite transform bg-gradient-to-br from-darkred to-lightred">
            <div class="text-xl sm:text-3xl sm:leading-relaxed">
              Battle News, c’est l’histoire de 7 étudiants lyonnais imaginatifs et intéressés par l’entrepreneuriat.
              Alors que nous commençons à peine cette nouvelle année scolaire,
              créer un jeu de société ludique et pédagogique est apparu pour nous comme une évidence.
              Très vite, nous avons créé notre entreprise MOXY.
            </div>
          </div>
        </div>
      </div>
      <h2 class="heading-decoration">
        La fine équipe
      </h2>
      <div class="flex flex-wrap justify-center pt-10 lg:pt-20">
        <TeamCard v-for="(teamMember, index) in teamMembers" :key="index" :is-red="index % 2 == 1" :name="teamMember.name" :image-url="require('~/assets/pictures/'+ teamMember.img)">
          <nuxt-content :document="teamMember" />
        </TeamCard>
      </div>
    </BaseSection>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const teamMembers = await $content('teamMembers').sortBy('rank').fetch()
    return { teamMembers }
  }
}
</script>
