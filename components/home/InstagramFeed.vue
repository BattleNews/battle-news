<template>
  <BaseSection id="instagram-feed" title="Suivez-nous sur Instagram">
    <div class="py-4">
      <client-only>
        <swiper
          ref="slider"
          class="swiper"
          :options="options"
        >
          <swiper-slide v-for="media in medias" :key="media.id" class="p-1 w-full">
            <img v-if="media.media_type !== 'VIDEO'" :src="media.media_url" :alt="`Instagram ${media.username}`">
            <div v-else>
              <client-only placeholder="Chargement de la vidéo ...">
                <video
                  :src="media.media_url"
                  :poster="media.thumbnail_url"
                  controls
                  controlslist="nodownload"
                  title="Vidéo Instagram Moxy"
                  aria-label="Lire la vidéo"
                  aria-pressed="false"
                />
              </client-only>
            </div>
          </swiper-slide>
          <div slot="button-prev" class="swiper-button-prev rounded-full p-8 bg-lightwhite bg-opacity-75" />
          <div slot="button-next" class="swiper-button-next rounded-full p-8 bg-lightwhite bg-opacity-75" />
        </swiper>
      </client-only>
    </div>
  </BaseSection>
</template>

<script>
import InstagramMediaService from '@/services/InstagramMediaService'
import { directive } from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default {
  directives: {
    swiper: directive
  },
  data () {
    return {
      medias: [],
      options: {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 4
          },
          640: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  mounted () {
    InstagramMediaService.getAll()
      .then((response) => {
        this.medias = response.data.data
      })
      .catch((error) => {
        /* eslint no-console: ["error", { allow: ["error"] }] */
        console.error(error)
      })
  }
}
</script>

<style scoped>
  @media only screen and (min-width: 1440px) {
    .container {
      max-width: 1440px;
    }
  }

  @media only screen and (min-width: 1600px) {
    .container {
      max-width: 1600px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #26303c !important;
}
</style>
