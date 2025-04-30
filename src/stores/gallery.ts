
import { defineStore } from 'pinia'

interface GalleryData {
  [category: string]: string[]
}

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    galleries: {} as GalleryData,
    currentCategory: '' as string
  }),

  getters: {
    categories(state): string[] {
      return Object.keys(state.galleries)
    },

    images(state): string[] {
      return state.currentCategory
        ? state.galleries[state.currentCategory] || []
        : []
    },

    allImages(state): string[] {
      return Object.values(state.galleries).flat()
    }
  },

  actions: {
    async loadGalleries() {
      if (Object.keys(this.galleries).length) return // déjà chargé
      const res = await fetch('/galleries.json')
      const data = await res.json()
      this.galleries = data
    },

    setCategory(category: string) {
      this.currentCategory = category
    }
  }
})
