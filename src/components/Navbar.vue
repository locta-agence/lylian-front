<template>
  <nav class="overflow-x-auto scrollbar-hidden">
    <ul class="flex justify-start md:justify-center space-x-4 md:space-x-8 px-2 whitespace-nowrap">
      <li 
        v-for="(category, index) in categories" 
        :key="index"
        @click="selectCategory(category)"
        :class="['category-item', { 'active': category === selected }]"
      >
        {{ category }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    default: () => []
  },
  selected: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:selected'])

function selectCategory(category) {
  emit('update:selected', category);
}
</script>

<style scoped>
.category-item {
  font-family: 'Archivo Black', sans-serif;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 0.25rem 0;
}

@media (min-width: 640px) {
  .category-item {
    font-size: 0.875rem;
  }
}

.active {
  color: #ACC9D3;
}

/* Masquer la scrollbar mais garder la fonctionnalité */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
</style>


