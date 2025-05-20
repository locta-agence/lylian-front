<template>
  <div class="min-h-screen bg-[#181818] text-white px-0 md:px-8 py-0 md:py-12">
    <HeaderLogo />

    <!-- Section SERVICES -->
    <section
      id="services"
      class="flex min-h-[calc(100vh-160px)] items-center justify-center px-0 md:px-[100px]"
    >
      <div class="flex flex-col md:flex-row gap-16 w-full max-w-6xl items-center justify-center">
        <div class="md:w-1/2 flex flex-col justify-center items-center md:items-end">
          <div class="max-w-md w-full flex flex-col justify-center">
            <h1 class="text-4xl md:text-7xl font-extrabold mb-4 text-center md:text-right">À PROPOS</h1>
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
    <!-- Menu en bas -->
    <MenuCard :banner="true" />
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from '@/components/Layout/HeaderLogo.vue'
import MenuCard from '@/components/Layout/MenuCard.vue'
</script>
