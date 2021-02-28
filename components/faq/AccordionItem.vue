<template>
  <div class="rounded-lg shadow-md mb-6 bg-gray-50" :class="[isOpened ? 'shadow-xl' : '']">
    <div class="flex px-8 cursor-pointer" role="accordionItem" aria-expanded="" @click="isOpened = !isOpened">
      <div class="flex flex-grow my-8">
        <h4 class="text-lightblack text-xl md:text-2xl">
          {{ question.title }}
        </h4>
      </div>
      <div class="-mr-8 p-8 text-gray-500 flex items-center">
        <fa-icon class="transition-transform duration-300" :class="[isOpened ? 'transform rotate-180' : '']" :icon="['fas', 'angle-down']" size="lg" />
      </div>
    </div>
    <div class="max-h-0 overflow-hidden transition-maxHeight duration-700" :class="[isOpened ? 'max-h-96' : '']">
      <div class="rounded-lg px-8 pb-8 pt-4">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="font-light text-gray-700" v-html="$md.render(question.content)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isOpened: false
    }
  }
}
</script>
