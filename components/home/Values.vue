<template>
  <BaseSection id="valeurs" title="Une entreprise, trois valeurs fondamentales">
    <div class="flex flex-wrap justify-center">
      <slot />
    </div>
  </BaseSection>
</template>

<script>
export default {
}
</script>

<style scoped>
    section {
        max-width: 1700px;
    }
</style>
