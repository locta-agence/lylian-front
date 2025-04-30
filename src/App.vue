<script setup lang="ts">
import { onMounted } from 'vue'
import { useGalleryStore } from '@/stores/gallery'

const galleryStore = useGalleryStore()

onMounted(() => {
  galleryStore.loadGalleries()
})

console.log(galleryStore.galleries)
</script>

<template>
  <div>
    <h2>Catégories</h2>
    <ul>
      <li
        v-for="category in galleryStore.categories"
        :key="category"
        @click="galleryStore.setCategory(category)"
      >
        {{ category }}
      </li>
    </ul>

    <h2>Images de la catégorie "{{ galleryStore.currentCategory }}"</h2>
    <div v-if="galleryStore.images.length">
      <img
        v-for="img in galleryStore.images"
        :key="img"
        :src="img"
        style="width: 200px; margin: 5px"
      />
    </div>

    <h2>Toutes les images</h2>
    <div>
      <img
        v-for="img in galleryStore.allImages"
        :key="img"
        :src="img"
        style="width: 100px; margin: 3px"
      />
    </div>
  </div>
</template>
