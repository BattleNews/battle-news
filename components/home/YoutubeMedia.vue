<template>
  <BaseSection id="youtube-media" title="Suivez-nous sur Youtube">
    <div class="max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto mt-16 md:mt-32">
      <div class="aspectRatio relative w-full bg-darkgray h-0 my-4">
        <iframe class="absolute left-0 top-0 w-full h-full" src="https://www.youtube.com/embed/h1WFn-JHHJI" frameborder="0" allowfullscreen="true" />
        <div class="absolute right-16 -top-16 md:-top-24 lg:-top-32">
          <img class="h-16 md:h-24 lg:h-32 w-auto" src="~assets/logo/OISEAU.webp" alt="Pigeon Logo">
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
export default {}
</script>

<style scoped>
.aspectRatio {
  padding-bottom: 56.25%;
}
</style>
