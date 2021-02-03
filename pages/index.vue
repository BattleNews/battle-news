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
        :image-url="require('~/assets/background/'+ value.img)"
      >
        <nuxt-content :document="value" />
      </Value>
    </Values>
    <Statistiques>
      <Statistique
        v-for="(stat, index) in stats"
        :key="index"
        :title="stat.title"
        :number="stat.number"
        :icon="require('~/assets/icon/' + stat.icon)"
      />
    </Statistiques>
    <YoutubeMedia />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const values = await $content('values').sortBy('rank').fetch()
    const stats = await $content('stats').sortBy('rank').fetch()
    return { values, stats }
  }
}
</script>
