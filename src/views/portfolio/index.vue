<template>
  <main class="text-white w-full min-h-screen flex flex-col" style="background-color: #181818;">
    <div class="sticky-header bg-[#181818] z-10">
      <HeaderLogo />  
      
      <div class="navbar-container">
        <div class="container mx-auto px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-48 relative">
          <Navbar 
            :categories="['TOUT', ...galleryStore.categories]" 
            v-model:selected="selectedCategory"
            class="mb-2 md:mb-4" 
          />
        </div>
      </div>
    </div>
    
    <div class="flex-grow container mx-auto px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-48 mt-2 md:mt-4">
      <!-- Affichage conditionnel basé sur la catégorie sélectionnée -->
      <MasonryGallery v-if="selectedCategory === 'TOUT'" :items="allItems" />
      <CategoryGallery v-else :items="categoryItems" :category="selectedCategory" />
    </div>

    <MenuCard :banner="true" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGalleryStore } from '@/stores/gallery'
import Navbar from '@/components/Navbar.vue'
import MasonryGallery from '@/components/MasonryGallery.vue'
import CategoryGallery from '@/components/CategoryGallery.vue'
import HeaderLogo from '@/components/Layout/HeaderLogo.vue'
import MenuCard from '@/components/Layout/MenuCard.vue'


const galleryStore = useGalleryStore()
const selectedCategory = ref('TOUT')

// Chargement des données au montage du composant
onMounted(() => {
  galleryStore.loadGalleries()
})

// Items pour l'affichage "TOUT" (masonry)
const allItems = computed(() => {
  return galleryStore.allImages.map((image, index) => ({
    id: index + 1,
    image: image,
    category: 'TOUT'
  }))
})

// Items pour l'affichage par catégorie
const categoryItems = computed(() => {
  galleryStore.setCategory(selectedCategory.value)
  return galleryStore.images.map((image, index) => ({
    id: index + 1,
    image: image,
    category: selectedCategory.value
  }))
})
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

.navbar-container {
  overflow: visible;
  width: 100%;
}

@media (max-width: 640px) {
  .logo-text {
    padding: 0.15rem 1rem;
    border-width: 0.5px;
  }
}
</style>
