<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <Hero />
    <Presentation />
    <CallToAction />
    <Values>
      <Value
        v-for="(value, index) in values"
        :key="index"
        :title="value.title"
        :image-url="getStrapiMedia(value.image.url)"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="$md.render(value.content)" />
      </Value>
    </Values>
    <Statistiques>
      <Statistique
        v-for="(statistic, index) in statistics"
        :key="index"
        :title="statistic.title"
        :number="statistic.number"
        :icon="getStrapiMedia(statistic.icon.url)"
      />
    </Statistiques>
    <YoutubeMedia />
  </div>
</template>

<script>
import valuesQuery from '~/apollo/queries/values'
import statsQuery from '~/apollo/queries/stats'
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
