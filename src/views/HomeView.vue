<template>
  <div
    class="relative h-screen w-screen bg-cover bg-center transition-all duration-1000"
    :style="{ backgroundImage: `url(${currentBg})` }"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <LogoCard />
      <h2 class="text-[40px] font-extrabold leading-[100%] text-[#FCFCFC] text-center uppercase">
        Photographer
      </h2>
      <h2 class="text-[40px] font-extrabold leading-[100%] text-[#FCFCFC] text-center uppercase">
        & Filmmaker
      </h2>
    </div>

    <MenuCard color="white" />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LogoCard from '@/components/Layout/LogoCard.vue'
import MenuCard from '@/components/Layout/MenuCard.vue'

const bgImages = [
  '/bg/bg1.png',
  '/bg/bg2.png',
  '/bg/bg3.png',
  '/bg/bg4.png',
  '/bg/bg5.png'
]

const currentIndex = ref(0)
const currentBg = ref(bgImages[currentIndex.value])
const showMenu = ref(false)

let interval: NodeJS.Timeout

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bgImages.length
    currentBg.value = bgImages[currentIndex.value]
  }, 3000) // 3 secondes
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
