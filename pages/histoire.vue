<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" :title="title">
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
        <TeamCard
          v-for="(teamMember, index) in members"
          :key="index"
          :team-member="teamMember"
          :is-red="index % 2 == 1"
          :data-aos="index % 2 ? 'zoom-in-left' : 'zoom-in-right'"
          data-aos-duration="600"
        />
      </div>
    </BaseSection>
  </div>
</template>

<script>
import membersQuery from '~/apollo/queries/members'

export default {
  data () {
    return {
      title: 'Qui sommes-nous ?',
      members: []
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-title', property: 'og:title', content: this.title + ' - BattleNews' },
        { hid: 'twitter-title', property: 'twitter:title', content: this.title + ' - BattleNews' }
      ]
    }
  },
  apollo: {
    members: {
      query: membersQuery
    }
  }
}
</script>
