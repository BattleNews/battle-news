<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" title="Les Règles du Jeu">
      <div class="flex flex-wrap justify-center pt-10 lg:pt-20">
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
