<template>
  <div class="mx-auto w-full lg:w-3/4">
    <div class="mb-10 sm:mb-16 md:mb-20 bg-gray-200 rounded-3xl">
      <div class="px-10 py-12 rounded-3xl shadow-2xl text-lightwhite transform bg-gradient-to-br" :class="[isRed ? 'from-darkred to-lightred' : 'from-darkestblue to-darkblue', rotation[rotate]]">
        <div class="lg:pr-32">
          <h3 class="leading-loose">
            {{ rule.title }}
          </h3>
          <div class="text-xl sm:text-3xl sm:leading-relaxed mb-10 sm:mb-11">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="$md.render(rule.content)" />
          </div>
          <div class="hidden lg:block absolute -right-40 top-2/4 transform -translate-y-2/4 rotate-0">
            <img
              :src="getStrapiMedia(rule.image.url)"
              :alt="rule.title"
              class="h-96 w-auto"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: {
    rule: {
      type: Object,
      required: true
    },
    isRed: {
      type: Boolean,
      description: 'Background gradient become red (instead of darkblue)',
      default: false,
      required: false
    }
  },
  data () {
    return {
      rotation: {
        '-1': '-rotate-1',
        '-2': '-rotate-1 sm:-rotate-2',
        1: 'rotate-1',
        2: 'rotate-1 sm:rotate-2'
      }
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>
