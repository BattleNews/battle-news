<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" :title="title">
      <div class="flex flex-wrap justify-center pt-10 lg:pt-20">
        <RulesCard
          v-for="(rule, index) in rules"
          :key="index"
          :rule="rule"
          :is-red="index % 2 == 1"
          :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
        />
      </div>
    </BaseSection>
  </div>
</template>

<script>
import rulesQuery from '~/apollo/queries/rules'

export default {
  data () {
    return {
      title: 'Les Règles du Jeu',
      rules: []
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
    rules: {
      query: rulesQuery
    }
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
