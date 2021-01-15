<template>
  <section :id="title.toLowerCase()" class="relative block text-darkestblue bg-darkestblue my-12 md:my-24">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20">
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="-2 -2 2560 100"
      >
        <polygon
          class="fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
    <div class="container mx-auto py-12 text-white">
      <h2 class="text-lightwhite">
        {{ title }}
      </h2>
      <slot />
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mb-20 h-20">
      <svg
        class="absolute top-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
      >
        <polygon
          class="fill-current"
          points="-2 -2 2560 0 0 100"
        />
      </svg>
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
