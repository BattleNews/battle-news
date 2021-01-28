<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
    <BaseSection class="mt-14 lg:mt-28" title="Nous contacter">
      <div class="flex flex-col text-center w-full">
        <p class="text-md leading-7 text-orange mx-auto sm:text-xl sm:max-w-xl xl:max-w-2xl">
          Une idée de carte ? Des questions sur notre jeu ?
          <br>
          N'hésitez pas à nous le dire !
        </p>
      </div>
      <div class="flex flex-wrap justify-center pt-8 lg:pt-16">
        <div class="md:w-4/5 xl:w-3/5 px-4 mx-auto">
          <form id="contact-form" class="flex flex-wrap bg-secondary shadow-lg rounded px-4 py-10 sm:p-10" role="form" method="POST">
            <div class="w-full sm:w-1/2 px-4 mb-4">
              <label for="firstname" class="form-label">Prénom</label>
              <input
                id="firstname"
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
                type="text"
                name="honeypot"
                class="form-input"
              >
            </div>
            <div class="w-1/2 ml-auto">
              <button type="submit" class="btn btn-default float-right mr-3 uppercase">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseSection>
  </div>
</template>

<script>
export default {}
</script>
