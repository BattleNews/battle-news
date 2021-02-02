<template>
  <section :id="title.toLowerCase()" class="mx-auto">
    <div class="max-width mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
      <h2 v-if="title != ''" class="heading-decoration">
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
    .max-width {
        max-width: 1700px;
    }
</style>
