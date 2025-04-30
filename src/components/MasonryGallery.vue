<template>
  <div class="masonry-container">
    <MasonryWall 
      :items="items" 
      :column-width="columnWidth" 
      :gap="gapSize"
      :rtl="false"
    >
      <template #default="{ item }">
        <GalleryItem :item="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import GalleryItem from '@/components/GalleryItem.vue'

defineProps(['items'])

const windowWidth = ref(window.innerWidth)
const columnWidth = computed(() => {
  if (windowWidth.value < 640) {
    return 160  // Réduit la largeur des colonnes sur mobile
  } else if (windowWidth.value < 1024) {
    return 220  // Taille moyenne pour tablette
  } else {
    return 300  // Grande taille pour desktop
  }
})

const gapSize = computed(() => {
  return windowWidth.value < 640 ? 6 : 10
})

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<style scoped>
.masonry-container {
  width: 100%;
  padding: 0;
}

/* Ajustements spécifiques pour la vue mobile */
@media (max-width: 639px) {
  :deep(.masonry-wall) {
    margin: 0 -3px;
  }
  
  :deep(.masonry-column) {
    padding: 0 3px;
  }
  
  :deep(.masonry-item) {
    margin-bottom: 6px;
  }
}
</style>
