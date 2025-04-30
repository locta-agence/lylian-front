<template>
  <div class="absolute bottom-6 w-full text-center">
    <button v-if="!showMenu" @click="showMenu = true" class="text-white uppercase font-semibold tracking-wide">
        Menu
    </button>
  </div>

  <div v-if="showMenu" @click="showMenu = false" class="fixed inset-0 z-50 bg-[#181818F2] text-white flex flex-col items-center py-10 px-6">
    <!-- Logo -->
    <h1 class="font-serif text-4xl">Lilianshoots</h1>

    <!-- Menu -->
    <nav class="flex flex-col items-center gap-6 text-center mt-auto">
      <a
        href="#portfolio"
        class="text-[24px] font-extrabold uppercase text-[#ACC9D3] transition duration-200 hover:opacity-80"
      >
        Portfolio
      </a>
      <a
        href="#services"
        class="text-[24px] font-extrabold uppercase text-[#ACC9D3] transition duration-200 hover:opacity-80"
      >
        Services & Tarifs
      </a>
      <a
        href="#about"
        class="text-[24px] font-extrabold uppercase text-[#ACC9D3] transition duration-200 hover:opacity-80"
      >
        À propos
      </a>

      <!-- Contact -->
      <div class="text-center mt-12">
        <p class="text-white text-[24px] font-extrabold uppercase mb-2">Contact</p>
        <p class="text-white text-[12px] font-normal">06 38 48 28 84</p>
        <p class="text-white text-[12px] font-bold uppercase mt-1">mail@mail.com</p>
      </div>
    </nav>

    <div class="flex flex-col items-center gap-6 text-center mt-auto"></div>
    <!-- Bouton Fermer -->
     <div class="absolute bottom-6 w-full text-center">
       <button
       @click="$emit('close')"
       class="text-[#ACC9D3] uppercase font-extrabold tracking-wide text-sm hover:underline mt-12"
       >
       Fermer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showMenu = ref(false)
</script>
