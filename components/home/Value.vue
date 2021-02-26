<template>
  <div class="p-6 lg:w-1/3 flex flex-col text-center items-center">
    <div class="w-40 h-40 lg:w-56 lg:h-56 inline-flex items-center justify-center my-12 flex-shrink-0">
      <img :src="getStrapiMedia(value.image.url)" :alt="`Visuel ${value.title}`">
    </div>
    <div class="flex flex-col flex-grow">
      <h3 class="text-lightblack text-2xl uppercase tracking-widest mb-3">
        {{ value.title }}
      </h3>
      <div class="leading-relaxed text-gray-500 text-xl text-justify flex-auto">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="$md.render(value.content)" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>

<style scoped>

.text-justify {
  text-align-last: center;
}

</style>
