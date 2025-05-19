<template>
  <div>
    <div
      class="fixed bottom-0 p-2 w-full text-center"
      :class="banner ? 'bg-[#181818]' : ''"
    >
      <button
        v-if="!showMenu"
        @click="showMenu = true"
        class="leading-[100%] tracking-wider font-extrabold uppercase cursor-pointer"
        :class="color === 'white' ? 'text-white' : 'text-[#ACC9D3]'"
      >
        Menu
      </button>
    </div>

    <div
      v-if="showMenu"
      class="fixed inset-0 z-50 text-white flex flex-col items-center py-10 px-6 bg-[#181818F2]"
    >
      <nav class="flex flex-col items-center gap-6 text-center mt-auto">
        <router-link
          to="/portfolio"
          class="text-[24px] font-extrabold uppercase text-[#ACC9D3] transition duration-200 hover:opacity-80"
        >
          Portfolio
        </router-link>
        <router-link
          to="/services"
          class="text-[24px] font-extrabold uppercase text-[#ACC9D3] transition duration-200 hover:opacity-80"
        >
          Services & Tarifs
        </router-link>
        <a
          href="#about"
          class="text-[24px] font-extrabold uppercase text-[#ACC9D3] transition duration-200 hover:opacity-80"
        >
          À propos
        </a>
        <div class="text-center mt-12">
          <p class="text-white text-[24px] font-extrabold uppercase mb-2">Contact</p>
          <p class="text-white text-[12px] font-normal">06 38 48 28 84</p>
          <p class="text-white text-[12px] font-bold uppercase mt-1">mail@mail.com</p>
        </div>
      </nav>
      <div class="flex flex-col items-center gap-6 text-center mt-auto"></div>
      <div class="absolute bottom-6 w-full text-center">
        <button
          @click="showMenu = false"
          class="text-[#ACC9D3] leading-[100%] tracking-wider font-extrabold uppercase cursor-pointer"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  banner?: boolean,
  color?: string
}>()

const showMenu = ref(false)
</script>
