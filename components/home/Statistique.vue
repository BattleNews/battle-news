<template>
  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div class="border-2 border-white px-4 py-6 rounded-lg">
      <img class="w-12 h-12 mb-8 inline-block" :src="icon" :alt="`Icone ${title}`">
      <h3 class="text-3xl mb-2 text-lightwhite">
        {{ number }}
      </h3>
      <p class="leading-relaxed">
        {{ title }}
      </p>
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
    number: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
