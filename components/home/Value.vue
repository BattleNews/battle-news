<template>
  <div class="p-6 lg:w-1/3 flex flex-col text-center items-center">
    <div class="w-40 h-40 lg:w-56 lg:h-56 inline-flex items-center justify-center my-12 flex-shrink-0">
      <img :src="require('~/assets/background/'+ value.img)" :alt="`Visuel ${value.title}`">
    </div>
    <div class="flex flex-col flex-grow">
      <h3 class="text-lightblack text-2xl uppercase tracking-widest mb-3">
        {{ value.title }}
      </h3>
      <div class="leading-relaxed text-gray-500 text-xl text-justify flex-auto">
        <nuxt-content :document="value" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.text-justify {
  text-align-last: center;
}

</style>
