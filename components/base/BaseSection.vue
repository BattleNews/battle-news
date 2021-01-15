<template>
  <section :id="title.toLowerCase()" class="mx-auto">
    <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
      <h2 class="heading-decoration">
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
      required: true
    }
  }
}
</script>
