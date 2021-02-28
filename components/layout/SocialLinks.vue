<template>
  <div class="side fixed hidden z-10 w-10 text-slate lg:block">
    <ul class="social flex flex-col items-center">
      <li v-for="(socialMedia, index) in socialMedias" :key="index" class="social-item">
        <a :href="socialMedia.url" target="_blank" rel="noopener noreferrer" :aria-label="socialMedia.name">
          <fa-icon class="icon" :icon="['fab', socialMedia.icon]" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import socialMediasQuery from '~/apollo/queries/social-medias'

export default {
  data () {
    return {
      socialMedias: []
    }
  },
  apollo: {
    socialMedias: {
      query: socialMediasQuery
    }
  }
}
</script>

<style scoped>
    .side {
        bottom: 0;
        left: 20px;
        right: auto;
    }

    .social:after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        @apply bg-lightslate;
    }

    .social-item {
        padding: 10px;
    }

    .social-item:last-of-type {
        margin-bottom: 20px;
    }

    .social-item a:hover, .social-item a:focus {
        transform: translateY(-3px);
    }

    .icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
    }
</style>
