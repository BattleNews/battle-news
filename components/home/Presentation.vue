<template>
  <BaseSection id="presentation" title="Présentation">
    <div class="flex flex-wrap justify-center">
      <div class="p-4 lg:w-1/2 mb-0 flex flex-col items-center justify-center">
        <div class="leading-relaxed text-gray-500 text-xl">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="$md.render(presentation.content)" />
        </div>
      </div>
      <div class="p-4 lg:w-1/2 flex flex-col text-center items-center">
        <img :src="getStrapiMedia(presentation.image.url)" alt="Visuel de la boite du jeu">
      </div>
    </div>
  </BaseSection>
</template>

<script>
import presentationQuery from '~/apollo/queries/presentation'
import { getStrapiMedia } from '~/utils/medias'

export default {
  data () {
    return {
      presentation: {}
    }
  },
  apollo: {
    presentation: {
      query: presentationQuery
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>

<style scoped>
    section {
        max-width: 1700px;
    }
</style>
