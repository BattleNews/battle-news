<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" title="Les Règles du Jeu">
      <div class="flex flex-wrap justify-center pt-10 lg:pt-20">
        <client-only>
          <RulesCard
            v-for="(rule, index) in rules"
            :key="rule.id"
            :rule="rule"
            :is-red="index % 2 == 1"
          />
        </client-only>
      </div>
    </BaseSection>
  </div>
</template>

<script>
import rulesQuery from '~/apollo/queries/rules'

export default {
  data () {
    return {
      rules: []
    }
  },
  apollo: {
    rules: {
      prefetch: true,
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
