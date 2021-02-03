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
        v-for="(stat, index) in stats"
        :key="index"
        :stat="stat"
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
