<template>
  <div class="mx-auto w-full md:w-5/6 lg:w-4/6">
    <div class="mb-16 sm:mb-16 md:mb-32">
      <div class="px-10 py-12 rounded-3xl shadow-2xl text-lightwhite transform bg-gradient-to-br" :class="[isRed ? 'from-darkred to-lightred' : 'from-darkestblue to-darkblue']">
        <div class="lg:pr-32">
          <h3 class="leading-loose uppercase">
            {{ member.name }}
          </h3>
          <div class="text-xl sm:text-3xl sm:leading-relaxed mb-10 sm:mb-11">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="$md.render(member.biography)" />
          </div>
          <div class="absolute -right-3 -top-10 md:-right-10 lg:-right-20 lg:-top-20">
            <img class="h-32 md:h-44 lg:h-56 w-auto rounded-full" :src="getStrapiMedia(member.image.url)" :alt="`Photo ${member.name}`">
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
    member: {
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
