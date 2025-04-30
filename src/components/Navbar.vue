<template>
  <div class="flex flex-wrap justify-center gap-4 py-4">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="$emit('update:selected', cat)"
      :class="['uppercase font-bold', selected === cat ? 'text-white' : 'text-gray-400']"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
defineProps(['categories', 'selected'])
defineEmits(['update:selected'])
</script>
