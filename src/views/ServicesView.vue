<template>
  <div class="min-h-screen bg-[#181818] text-white px-0 md:px-8 py-0 md:py-12">
    <HeaderLogo />
    <nav class="flex justify-center w-full gap-18 text-sm font-bold uppercase mt-4 mb-8">
      <button @click="scrollToSection('services')" class="focus:outline-none cursor-pointer text-base">SERVICES</button>
      <button @click="scrollToSection('tarifs')" class="focus:outline-none cursor-pointer text-base">TARIFS</button>
    </nav>

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

    <section class="flex flex-col items-center text-center my-24">
      <p class="text-lg md:text-2xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
      <p class="text-2xl md:text-3xl font-extrabold">
        Turpis lacinia est nisl<br />
        pellentesque dignissim<br />
        imperdiet pellentesque.
      </p>
    </section>

    <!-- Menu en bas -->
    <MenuCard banner="true" />
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from '@/components/Layout/HeaderLogo.vue'
import MenuCard from '@/components/Layout/MenuCard.vue'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    // Décale le scroll de 160px pour ne pas cacher sous le header
    const y = el.getBoundingClientRect().top + window.pageYOffset - 160
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>
