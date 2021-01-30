<template>
  <div class="mx-auto w-full lg:w-3/4">
    <div class="mb-10 sm:mb-16 md:mb-20 bg-gray-200 rounded-3xl">
      <div class="px-10 py-12 rounded-3xl shadow-2xl text-lightwhite transform bg-gradient-to-br" :class="[isRed ? 'from-darkred to-lightred' : 'from-darkestblue to-darkblue', rotation[rotate]]">
        <div class="lg:pr-32">
          <h3 class="leading-loose">
            {{ title }}
          </h3>
          <div class="text-xl sm:text-3xl sm:leading-relaxed mb-10 sm:mb-11">
            <slot />
          </div>
          <div class="hidden lg:block absolute -right-40 top-2/4 transform -translate-y-2/4 rotate-0">
            <img class="h-96 w-auto" :src="imageUrl" :alt="`Visuel carte ${title}`">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      description: 'Side card image',
      default: ''
    },
    isRed: {
      type: Boolean,
      description: 'Background gradient become red (instead of darkblue)',
      default: false,
      required: false
    },
    rotate: {
      type: String,
      required: true
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
  }
}
</script>
