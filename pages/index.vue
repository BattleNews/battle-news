<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <Hero />
    <Presentation />
    <CallToAction />
    <Values>
      <Value
        v-for="(value, index) in values"
        :key="index"
        :value="value"
      />
    </Values>
    <Statistiques>
      <Statistique
        v-for="(stat, index) in statistics"
        :key="index"
        :stat="stat"
      />
    </Statistiques>
    <YoutubeMedia />
  </div>
</template>

<script>
import valuesQuery from '~/apollo/queries/values'
import statsQuery from '~/apollo/queries/statistics'
import { getStrapiMedia } from '~/utils/medias'

export default {
  data () {
    return {
      values: [],
      statistics: []
    }
  },
  apollo: {
    values: {
      query: valuesQuery
    },
    statistics: {
      query: statsQuery
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>
