<template>
  <nav :class="[center ? 'flex flex-col justify-between align-center w-screen text-center' : 'w-2/5 hidden lg:block']">
    <ul :class="['flex items-center', { 'justify-end' : left , 'flex-col' : center }]">
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    left: Boolean,
    center: Boolean
  }
}
</script>
