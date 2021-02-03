<template>
  <div class="p-4 w-full md:w-1/2 lg:w-1/4">
    <div class="border-2 border-white px-4 py-6 rounded-lg">
      <img class="w-12 h-12 mb-8 inline-block" :src="require('~/assets/icon/' + stat.icon)" :alt="`Icone ${stat.title}`">
      <h3 class="text-3xl mb-2 text-lightwhite">
        {{ stat.number }}
      </h3>
      <p class="leading-relaxed">
        {{ stat.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stat: {
      type: Object,
      required: true
    }
  }
}
</script>
