<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" :title="title">
      <div class="flex flex-col text-center w-full">
        <p class="text-md leading-7 text-orange mx-auto sm:text-xl sm:max-w-xl xl:max-w-2xl">
          Une idée de carte ? Des questions sur notre jeu ?
          <br>
          N'hésitez pas à nous le dire !
        </p>
      </div>
      <div class="flex flex-wrap justify-center pt-8 lg:pt-16">
        <div v-if="isBot" class="rounded bg-green-400 text-white text-lg p-4">
          Bravo! Vous êtes un bot ou un petit malin! J'ai supprimé le formulaire juste pour vous.
        </div>
        <div v-else class="md:w-4/5 xl:w-3/5 px-4 mx-auto">
          <div v-if="success" class="rounded bg-green-400 text-white text-lg p-4">
            Parfait! Votre message a été envoyé avec succès. Nous essayerons d'y répondre rapidement.
          </div>
          <div v-if="errored" class="rounded bg-red-400 text-lg p-4">
            Oops! Votre message n'a pas pu être envoyé. Avez-vous rempli tout les champs?
          </div>
          <form
            v-else
            id="contact-form"
            class="flex flex-wrap bg-secondary shadow-lg rounded px-4 py-10 sm:p-10"
            role="form"
            data-aos="fade-up"
            @submit.prevent="submitForm"
          >
            <div class="w-full sm:w-1/2 px-4 mb-4">
              <label for="firstname" class="form-label">Prénom</label>
              <input
                id="firstname"
                v-model="firstname"
                type="text"
                name="firstname"
                placeholder="Xavier"
                class="form-input"
                required
              >
            </div>
            <div class="w-full sm:w-1/2 px-4 mb-4">
              <label for="lastname" class="form-label">Nom</label>
              <input
                id="lastname"
                v-model="lastname"
                type="text"
                name="lastname"
                placeholder="Dupont"
                class="form-input"
                required
              >
            </div>
            <div class="w-full px-4 mb-4">
              <label for="email" class="form-label">Adresse mail</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                placeholder="xavier.dupont@gmail.com"
                class="form-input"
                required
              >
            </div>
            <div class="w-full px-4 mb-4">
              <label for="message" class="form-label">Votre message</label>
              <textarea
                id="message"
                v-model="message"
                name="message"
                placeholder="Rédigez-ici ..."
                rows="6"
                class="form-input form-textarea"
                required
              />
            </div>
            <div class="w-full px-4 mb-4 invisible hidden">
              <label for="honeypot" class="form-label">Veuillez laisser ce champ vide.</label>
              <input
                id="honeypot"
                v-model="honeypot"
                type="text"
                name="honeypot"
                class="form-input"
              >
            </div>
            <div class="w-1/2 ml-auto">
              <button type="submit" class="btn btn-default float-right mr-3 uppercase">
                {{ loading ? "Envoi du message..." : "Envoyer" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseSection>
  </div>
</template>

<script>
import CreateMessage from '~/apollo/queries/message'

export default {
  data () {
    return {
      title: 'Nous contacter',
      loading: false,
      success: false,
      errored: false,
      isBot: false,
      firstname: null,
      lastname: null,
      email: null,
      message: null,
      honeypot: null
    }
  },
  methods: {
    submitForm () {
      this.loading = true
      if (this.honeypot != null) {
        this.isBot = true
      } else {
        this.$apollo.mutate({
          mutation: CreateMessage,
          variables: {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            message: this.message
          }
        })
          .then((response) => {
            this.success = true
            this.errored = false
            this.firstname = ''
            this.lastname = ''
            this.email = ''
            this.message = ''
          })
          .catch(() => {
            this.errored = true
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og-title', property: 'og:title', content: this.title + ' - BattleNews' },
        { hid: 'twitter-title', property: 'twitter:title', content: this.title + ' - BattleNews' }
      ]
    }
  }
}
</script>
