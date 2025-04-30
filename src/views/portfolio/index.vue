<template>
  <main class="text-white w-full min-h-screen flex flex-col" style="background-color: #181818;">
    <div class="sticky-header bg-[#181818] z-10">
      <header class="py-4 md:py-8">
        <h1 class="text-center text-3xl md:text-4xl font-serif tracking-wider">
          <span class="logo-text">Lylianshoots</span>
        </h1>
      </header>
      
      <Navbar 
        :categories="['TOUT', ...galleryStore.categories]" 
        v-model:selected="selectedCategory"
        class="mb-2 md:mb-4" 
      />
    </div>
    
    <div class="flex-grow container mx-auto px-2 sm:px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-32 mt-2 md:mt-4">
      <MasonryGallery :items="filteredItems" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGalleryStore } from '@/stores/gallery'
import Navbar from '@/components/Navbar.vue'
import MasonryGallery from '@/components/MasonryGallery.vue'

const galleryStore = useGalleryStore()
const selectedCategory = ref('TOUT')

// Chargement des données au montage du composant
onMounted(() => {
  galleryStore.loadGalleries()
})

// Transformation des URLs d'images en objets pour compatibilité avec MasonryGallery
const allItems = computed(() => {
  if (selectedCategory.value === 'TOUT') {
    return galleryStore.allImages.map((image, index) => ({
      id: index + 1,
      image: image,
      category: 'TOUT'
    }))
  } else {
    galleryStore.setCategory(selectedCategory.value)
    return galleryStore.images.map((image, index) => ({
      id: index + 1,
      image: image, 
      category: selectedCategory.value
    }))
  }
})

const filteredItems = computed(() => allItems.value)
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  padding-bottom: 5px;
  width: 100%;
  z-index: 10;
}

.logo-text {
  font-family: 'Times New Roman', serif;
  letter-spacing: 1.5px;
  font-weight: 400;
  text-transform: none;
  padding: 0.25rem 1.5rem;
  display: inline-block;
}

@media (max-width: 640px) {
  .logo-text {
    padding: 0.15rem 1rem;
    border-width: 0.5px;
  }
}
</style>
