<template>
  <nav class="overflow-x-auto scrollbar-hidden">
    <div class="container-fluid px-4 sm:px-6">
      <ul class="flex justify-start xl:justify-center space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 whitespace-nowrap">
        <li 
          v-for="(category, index) in categories" 
          :key="index"
          @click="selectCategory(category)"
          :class="['category-item', { 'active': category === selected }]"
          ref="categoryItems"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUpdate, nextTick, watch, onUpdated, onUnmounted } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  },
  selected: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:selected']);
const categoryItems = ref([]);

// Vérifier si la première catégorie est visible au chargement
onMounted(() => {
  ensureFirstCategoryVisible();
  
  // Ajouter un écouteur de redimensionnement de fenêtre
  window.addEventListener('resize', ensureFirstCategoryVisible);
});

// S'assurer que la première catégorie reste visible après les mises à jour
onUpdated(() => {
  ensureFirstCategoryVisible();
});

function ensureFirstCategoryVisible() {
  // S'assurer que la première catégorie est visible au démarrage
  if (props.categories.length > 0) {
    nextTick(() => {
      const windowWidth = window.innerWidth;
      // Pour tous les écrans de taille inférieure à xl (1280px)
      if (windowWidth < 1280) {
        if (categoryItems.value[0]) {
          categoryItems.value[0].scrollIntoView({ behavior: 'auto', block: 'nearest' });
        }
      }
    });
  }
}

function selectCategory(category) {
  emit('update:selected', category);
  
  // Lorsqu'une catégorie est sélectionnée, assurez-vous qu'elle est visible
  nextTick(() => {
    scrollToSelectedCategory();
  });
}

// Réinitialiser les refs à chaque mise à jour du DOM
onBeforeUpdate(() => {
  categoryItems.value = [];
});

function scrollToSelectedCategory() {
  const activeIndex = props.categories.indexOf(props.selected);
  if (activeIndex !== -1 && categoryItems.value[activeIndex]) {
    categoryItems.value[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Nettoyer l'écouteur d'événement lors de la destruction du composant
onUnmounted(() => {
  window.removeEventListener('resize', ensureFirstCategoryVisible);
});
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


