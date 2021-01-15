<template>
  <div class="mx-auto w-3/4">
    <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
      <div class="px-10 py-12 rounded-3xl shadow-2xl text-lightwhite transform bg-gradient-to-br" :class="[isRed ? 'from-darkred to-lightred' : 'from-darkestblue to-darkblue', rotation[rotate], translation[translate]]">
        <h3 class="leading-loose">
          {{ title }}
        </h3>
        <div class="max-w-4xl text-xl sm:text-3xl sm:leading-relaxed mb-10 sm:mb-11">
          <slot />
        </div>
        <div class="absolute -right-40 top-2/4 transform -translate-y-2/4">
          <img class="h-96 w-auto" :src="imageUrl">
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
      required: true
    },
    rotate: {
      type: String,
      required: true
    },
    translate: {
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
      },
      translation: {
        smallLeft: '-translate-x-12',
        left: '-translate-x-16',
        smallRight: 'translate-x-12',
        right: 'translate-x-16'
      }
    }
  }
}
</script>
