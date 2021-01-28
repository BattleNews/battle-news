<template>
  <li class="text-sm uppercase mx-8 py-8">
    <NuxtLink
      :to="href"
      class="nav-link relative tracking-widest"
    >
      <slot />
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .nav-link::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 102%;
        top: 25px;
        height: 1px;
        background-color: white;
        transition: .3s ease-in-out;
        transition-property: right;
    }

    .nav-link:hover::before, .nav-link:focus::before {
        right: 0;
    }
</style>
