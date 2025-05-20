<template>
  <div class="min-h-screen bg-[#181818] text-white px-0 md:px-8 py-0 md:py-12 pt-[110px]">
    <div class="fixed top-0 left-0 w-full z-50 bg-[#181818] pb-2">
      <HeaderLogo />
      <nav class="flex justify-center w-full gap-18 text-sm font-bold uppercase mt-4 mb-8">
        <button
          @click="scrollToSection('services')"
          :class="[
            'focus:outline-none cursor-pointer text-base',
            activeSection === 'services' ? 'text-[#b3c7ce]' : 'text-white'
          ]"
        >
          SERVICES
        </button>
        <button
          @click="scrollToSection('tarifs')"
          :class="[
            'focus:outline-none cursor-pointer text-base',
            activeSection === 'tarifs' ? 'text-[#b3c7ce]' : 'text-white'
          ]"
        >
          TARIFS
        </button>
      </nav>
    </div>

    <!-- Section SERVICES -->
    <section
      id="services"
      class="flex min-h-[calc(100vh-160px)] items-center justify-center px-0 md:px-[100px]"
    >
      <div class="flex flex-col md:flex-row gap-16 w-full max-w-6xl items-center justify-center">
        <div class="md:w-1/2 flex flex-col justify-center items-center md:items-end">
          <div class="max-w-md w-full flex flex-col justify-center">
            <h1 class="text-4xl md:text-7xl font-extrabold mb-4 text-center md:text-right">SERVICES</h1>
            <p class="mb-2 text-base text-left md:text-right">
              Lorem ipsum dolor sit amet consectetur. Turpis lacinia est nisl pellentesque dignissim imperdiet pellentesque. Lobortis sed maecenas arcu faucibus et nulla dictum lorem dictum.
            </p>
            <p class="text-xs md:text-sm text-center md:text-right">
              Consequat adipiscing et scelerisque pellentesque. At sed a neque duis eu egestas orci adipiscing tortor. Feugiat adipiscing id purus velit metus. Fermentum sodales et fermentum tincidunt. Enim nam arcu arcu vel vel tortor.
            </p>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center items-center">
          <img src="/service.png" alt="Portrait" class="object-cover w-full max-w-lg h-[500px] shadow-lg" />
        </div>
      </div>
    </section>

    <!-- Section TARIFS -->
    <section
      id="tarifs"
      class="flex min-h-[calc(100vh-160px)] items-center justify-center px-0 md:px-[100px]"
    >
      <div class="flex flex-col md:flex-row gap-16 w-full max-w-6xl items-center justify-center">
        <div class="md:w-1/2 flex justify-center items-center order-2 md:order-1">
          <img src="/tarif.png" alt="Ski" class="object-cover w-full max-w-lg h-[500px] shadow-lg" />
        </div>
        <div class="md:w-1/2 flex flex-col justify-center items-center md:items-start order-1 md:order-2">
          <div class="max-w-md w-full flex flex-col justify-center">
            <h2 class="text-4xl md:text-7xl font-extrabold mb-4 text-center md:text-left">TARIFS</h2>
            <p class="font-bold mb-2 text-center md:text-left">Sous devis</p>
            <p class="text-base text-center md:text-left">Numéro de tel : 06 32 54 68 24</p>
            <p class="text-base text-center md:text-left">Mail : mail@mail.com</p>
            <p class="text-base text-center md:text-left">Localisation : Rhône-Alpes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Bannière Texte -->
    <section class="flex flex-col items-center justify-center text-right min-h-[40vh] my-24 w-full">
      <p class="text-xl md:text-4xl font-light tracking-wide mb-4 w-full text-right mr-16">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <p class="text-3xl md:text-6xl font-extrabold leading-tight w-full text-right mr-16">
        Turpis lacinia est nisl<br />
        pellentesque dignissim<br />
        imperdiet<br />
        pellentesque.
      </p>
    </section>

    <!-- Menu en bas -->
    <MenuCard :banner="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderLogo from '@/components/Layout/HeaderLogo.vue'
import MenuCard from '@/components/Layout/MenuCard.vue'

const activeSection = ref('services')

const handleScroll = () => {
  const services = document.getElementById('services')
  const tarifs = document.getElementById('tarifs')
  if (!services || !tarifs) return

  const scrollY = window.scrollY + 170 // Décalage pour le header
  const servicesTop = services.offsetTop
  const tarifsTop = tarifs.offsetTop

  if (scrollY >= tarifsTop) {
    activeSection.value = 'tarifs'
  } else {
    activeSection.value = 'services'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    // Décale le scroll de 160px pour ne pas cacher sous le header
    const y = el.getBoundingClientRect().top + window.pageYOffset - 160
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>
