<template>
  <MasonryWall :items="items" :column-width="300" :gap="10">
    <template #default="{ item }">
      <GalleryItem :item="item" />
    </template>
  </MasonryWall>
</template>

<script setup>
import MasonryWall from 'vue-masonry-wall'
import GalleryItem from './GalleryItem.vue'
defineProps(['items'])
</script>
