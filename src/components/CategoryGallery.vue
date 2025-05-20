<template>
  <div class="category-gallery">
    <!-- Carrousel de projets avec défilement horizontal -->
    <div class="project-carousel" ref="carouselContainer" @mousedown="startDrag" @mouseup="stopDrag" @mouseleave="stopDrag" @mousemove="onDrag">
      <div 
        class="carousel-track" 
        :style="{ transform: `translateX(${translateX}px)` }"
        ref="carouselTrack"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index" 
          class="project-slide"
          :class="{ 'active': currentIndex === index }"
        >
          <div class="project-container">
            <img :src="item.image" :alt="'Image de ' + category" class="w-full h-auto object-cover">
          </div>
          <div v-if="currentIndex === index" class="project-info">
            <h2 class="project-title">{{ index === 0 ? category : category + ' ' + index }}</h2>
            <p class="project-date">Thème - Date</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Indicateurs de navigation (optionnel) -->
    <div class="navigation-dots">
      <span 
        v-for="(_, index) in items" 
        :key="index" 
        class="dot"
        :class="{ 'active': currentIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

// État pour le carrousel
const currentIndex = ref(0);
const translateX = ref(0);
const slideWidth = ref(0);
const carouselContainer = ref(null);
const carouselTrack = ref(null);

// Variables pour le glissement
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;

// Calculer la largeur des slides et initialiser le carrousel
onMounted(() => {
  calculateSlideWidth();
  window.addEventListener('resize', calculateSlideWidth);
  
  // Position initiale centrée sur le premier élément
  updateTranslateX();
});

// Recalculer quand les éléments changent
watch(() => props.items.length, () => {
  calculateSlideWidth();
  updateTranslateX();
});

function calculateSlideWidth() {
  if (carouselContainer.value) {
    // Slide principale occupe 60% de la largeur, laissant 20% de chaque côté pour les slides adjacentes
    slideWidth.value = carouselContainer.value.offsetWidth * 0.6;
    updateTranslateX();
  }
}

function updateTranslateX() {
  // Centrer la slide active
  const containerWidth = carouselContainer.value?.offsetWidth || 0;
  const offset = (containerWidth - slideWidth.value) / 2;
  translateX.value = -(currentIndex.value * slideWidth.value) + offset;
  currentTranslate = translateX.value;
}

function goToSlide(index) {
  if (index >= 0 && index < props.items.length) {
    currentIndex.value = index;
    updateTranslateX();
  }
}

function nextSlide() {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++;
    updateTranslateX();
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateTranslateX();
  }
}

// Fonctions pour le glissement
function startDrag(e) {
  isDragging = true;
  startPos = e.clientX;
  document.body.style.cursor = 'grabbing';
}

function stopDrag() {
  if (!isDragging) return;
  
  isDragging = false;
  document.body.style.cursor = 'default';
  
  // Déterminer la direction du glissement
  const dragDistance = translateX.value - currentTranslate;
  
  // Si le glissement est significatif, changer de slide
  if (Math.abs(dragDistance) > slideWidth.value * 0.2) { // Seuil de 20%
    if (dragDistance > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  } else {
    // Sinon revenir à la position d'origine
    updateTranslateX();
  }
}

function onDrag(e) {
  if (!isDragging) return;
  
  const currentPosition = e.clientX;
  const difference = currentPosition - startPos;
  translateX.value = currentTranslate + difference;
}
</script>

<style scoped>
.category-gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}

.project-carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-x;
  user-select: none;
  height: 60vh;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-out;
  height: 100%;
  will-change: transform;
}

.project-slide {
  min-width: 60%;
  padding: 0 20px;
  height: 100%;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Suppression de l'effet de flou/opacité */
.project-slide {
  opacity: 1;
}

.project-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 90%;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.project-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Titre déplacé sous l'image */
.project-info {
  padding: 16px 0;
  color: white;
  text-align: center;
}

.project-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.project-date {
  font-size: 16px;
  opacity: 0.8;
}

.navigation-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: white;
}

/* Responsive pour tailles d'écran plus petites */
@media (max-width: 768px) {
  .project-carousel {
    height: 50vh;
  }
  
  .project-slide {
    min-width: 80%;
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  .project-carousel {
    height: 40vh;
  }
  
  .project-slide {
    min-width: 90%;
    padding: 0 5px;
  }
  
  .project-title {
    font-size: 20px;
  }
}
</style>