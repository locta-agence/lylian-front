<template>
  <div class="gallery-item">
    <div class="image-container" @mouseenter="startTextScramble">
      <img :src="item.image" alt="" />
      <div class="overlay">
        <div class="project-info">
          <h3 ref="textElement">PROJET</h3>
          <p>Thème - Date</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps(['item'])

const textElement = ref(null)
let hasBeenHovered = ref(false)
const originalText = "PROJET"

// Génère une chaîne aléatoire de la même longueur que le texte original
const getRandomChars = (length) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return Array(length).fill().map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
}

// Fonction pour l'animation de texte
const startTextScramble = () => {
  // Si déjà vu, ne pas réanimer
  if (hasBeenHovered.value) return
  
  hasBeenHovered.value = true
  const finalText = originalText
  const el = textElement.value
  
  let iteration = 0
  const maxIterations = 10
  
  const interval = setInterval(() => {
    el.innerText = finalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return finalText[index]
        }
        return getRandomChars(1)
      })
      .join("")
    
    if (iteration >= finalText.length) {
      clearInterval(interval)
    }
    
    iteration += 1 / 3
  }, 30)
}
</script>

<style scoped>
.gallery-item {
  width: 100%;
  margin-bottom: 0px;
  overflow: hidden;
  cursor: pointer;
}

.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.image-container img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.project-info {
  text-align: center;
  color: black;
}

.project-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'Archivo Black', sans-serif;
}

/* Effet hover */
.image-container:hover img {
  transform: scale(1.05);
}

.image-container:hover .overlay {
  opacity: 1;
}
</style>

