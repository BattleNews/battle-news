<template>
  <footer class="bg-darkestblue text-lightslate">
    <div class="max-w-screen-xl px-5 py-6 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="md:w-1/3 w-full mb-10">
          <div class="w-32 flex-shrink-0 md:mx-0 mx-auto">
            <img class="border-white border-8 bg-white rounded-full" src="~/assets/logo/LOGO_MOXY_Y.webp" alt="Logo Moxy">
          </div>
        </div>
        <div class="md:w-1/3 w-full px-4">
          <h3 class="uppercase font-medium tracking-widest text-white text-lg mb-3">
            Coordonnées
          </h3>
          <nav class="list-none mb-10">
            <ul>
              <li>
                <fa-icon class="w-4 h-4 inline-flex mr-1" :icon="['fas', 'server']" />
                <span class="text-slate">{{ coordinate.namespace }}</span>
              </li>
              <li>
                <fa-icon class="w-4 h-4 inline-flex mr-1" :icon="['fas', 'home']" />
                <span class="text-slate">{{ coordinate.address }}</span>
              </li>
              <li>
                <fa-icon class="w-4 h-4 inline-flex mr-1" :icon="['fas', 'phone-alt']" />
                <span class="text-slate">{{ coordinate.phone }}</span>
              </li>
              <li>
                <fa-icon class="w-4 h-4 inline-flex mr-1" :icon="['fas', 'envelope']" />
                <a :href="`mailto:${coordinate.mail}`">{{ coordinate.mail }}</a>
              </li>
              <li>
                <fa-icon class="w-4 h-4 inline-flex mr-1" :icon="['fas', 'globe-americas']" />
                <NuxtLink to="/">
                  {{ coordinate.domain }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="md:w-1/3 w-full">
          <h3 class="uppercase font-medium tracking-widest text-white text-lg mb-3">
            + d'infos
          </h3>
          <nav class="list-none mb-10">
            <ul>
              <li>
                <fa-icon class="w-3 h-3 inline-flex mr-1" :icon="['fas', 'chevron-right']" />
                <NuxtLink to="/contact">
                  Contact
                </NuxtLink>
              </li>
              <li>
                <fa-icon class="w-3 h-3 inline-flex mr-1" :icon="['fas', 'chevron-right']" />
                <NuxtLink to="/faq">
                  FAQ
                </NuxtLink>
              </li>
              <li>
                <fa-icon class="w-3 h-3 inline-flex mr-1" :icon="['fas', 'chevron-right']" />
                <NuxtLink to="/sources">
                  Sources
                </NuxtLink>
              </li>
              <li>
                <fa-icon class="w-3 h-3 inline-flex mr-1" :icon="['fas', 'chevron-right']" />
                <NuxtLink to="/cgu">
                  Conditions Générales d'Utilisation
                </NuxtLink>
              </li>
              <li>
                <fa-icon class="w-3 h-3 inline-flex mr-1" :icon="['fas', 'chevron-right']" />
                <NuxtLink to="/privacy">
                  Politique de Confidentialité
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row lg:justify-center">
      <ul class="inline-flex lg:hidden md:ml-auto md:mt-0 mb-2 justify-center md:justify-start">
        <li v-for="(socialMedia, index) in socialMedias" :key="index" class="ml-3 list-none align-top">
          <a :href="socialMedia.url" target="_blank" rel="noopener noreferrer" :aria-label="socialMedia.name">
            <fa-icon class="icon" :icon="['fab', socialMedia.icon]" />
          </a>
        </li>
      </ul>
      <p class="text-center md:text-left">
        <span>&copy; {{ new Date().getFullYear() }}, {{ coordinate.namespace }}. Tous droits réservés.</span>
        <span>
          — Réalisation :
          <a href="https://github.com/et3rnity45" rel="noopener noreferrer" class="ml-1" target="_blank">Quentin Liger</a>
        </span>
      </p>
    </div>
  </footer>
</template>

<script>
import coordinateQuery from '~/apollo/queries/coordinate'
import socialMediasQuery from '~/apollo/queries/social-medias'

export default {
  data () {
    return {
      socialMedias: [],
      coordinate: {}
    }
  },
  apollo: {
    coordinate: {
      query: coordinateQuery
    },
    socialMedias: {
      query: socialMediasQuery
    }
  }
}

</script>

<style scoped>
    .icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
    }
</style>
