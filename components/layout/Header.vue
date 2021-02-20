<template>
  <div class="h-24 fixed z-10 top-0 flex justify-center items-center bg-darkestblue font-title text-xxs xl:text-xs w-full text-white">
    <Nav left>
      <NavItem href="/">
        Accueil
      </NavItem>
      <NavItem href="/regles">
        Règles du Jeu
      </NavItem>
      <NavItem href="/histoire">
        Qui sommes-nous ?
      </NavItem>
    </Nav>
    <NuxtLink to="/" class="relative top-7 w-1/3 md:w-1/5 flex justify-center">
      <img class="max-h-30" src="~/assets/logo/LOGO_BATTLE_NEWS.webp" alt="Logo Battle News">
    </NuxtLink>
    <Nav>
      <NavItem href="/partenaires">
        Nos Partenaires
      </NavItem>
      <NavItem href="/contact">
        Contact
      </NavItem>
      <NavItem href="/faq">
        Faq
      </NavItem>
    </Nav>
    <div class="absolute right-0 mr-4 block lg:hidden">
      <button aria-label="Menu" class="flex justify-center items-center relative z-10 -mr-1 p-1 focus:outline-none border-0 bg-transparent" @click="menuOpen = !menuOpen">
        <div class="ham-box">
          <div class="ham-box-inner" :class="menuOpen ? 'ham-open' : 'ham-close'" />
        </div>
      </button>
    </div>
    <aside class="flex justify-center items-center fixed top-0 bottom-0 right-0 py-12 px-2 h-screen bg-darkblue lg:hidden" :class="menuOpen ? 'active' : ''" :aria-hidden="!menuOpen" :tabindex="menuOpen ? 1 : -1">
      <Nav center>
        <NavItem href="/">
          Accueil
        </NavItem>
        <NavItem href="/regles">
          Règles du Jeu
        </NavItem>
        <NavItem href="/histoire">
          Qui sommes-nous ?
        </NavItem>
        <NavItem href="/partenaires">
          Nos Partenaires
        </NavItem>
        <NavItem href="/contact">
          Contact
        </NavItem>
        <NavItem href="/faq">
          Faq
        </NavItem>
      </Nav>
    </aside>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuOpen: false
    }
  },
  watch: {
    '$route' () {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>

  aside {
    z-index: 9;
    width: 100vw;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    box-shadow: -10px 0px 30px -15px rgba(38, 48, 63, 0.7);
    transform: translateX(100vw);
    visibility: hidden;
  }

  aside.active {
    transform: translateX(0vw);
    visibility: visible;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    @apply bg-orange;
    transition-duration: 0.22s;
    transition-property: transform;
  }

  .ham-close {
    transition-delay: 0s;
    transform: rotate(0deg);
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .ham-open {
    transition-delay: 0.12s;
    transform: rotate(225deg);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .ham-box-inner:before, .ham-box-inner:after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    height: 2px;
    border-radius: 4px;
    @apply bg-orange;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
  }

  .ham-close:before {
    width: 120%;
    top: -10px;
    opacity: 1;
    transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
  }

  .ham-close:after {
    width: 80%;
    bottom: -10px;
    transform: rotate(0deg);
    transition: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0,675, 0.19);
  }

  .ham-open:before {
    width: 100%;
    top: 0px;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
  }

  .ham-open:after {
    width: 100%;
    bottom: 0px;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

</style>
