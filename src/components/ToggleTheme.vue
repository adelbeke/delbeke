<template>
  <div class="absolute top-0 right-0 p-4">
    <button v-on:click="toggleStorageTheme">
      <img :src="icon" alt="" />
    </button>
  </div>
</template>

<script>
import {AvailableTheme} from "@/config";

export default {
  name: 'ToggleTheme',
  data() {
      return {
        icon: require('@/assets/svg/sun.svg')
      }
  },
  methods: {
    toggleStorageTheme() {
      const current = localStorage.theme
      localStorage.theme = current === AvailableTheme.dark
          ? AvailableTheme.light
          : AvailableTheme.dark

      return this.toggleMainClass()
    },
    toggleMainClass() {
      const main = document.getElementsByTagName('html')[0]
      const theme = localStorage.theme

      switch (theme) {
        case AvailableTheme.dark:
        default:
          main.classList.add('dark')
          this.icon = require('@/assets/svg/sun.svg')
          break
        case AvailableTheme.light:
          main.classList.remove('dark')
          this.icon = require('@/assets/svg/moon.svg')
          break
      }
    }
  },
  mounted() {
    this.toggleMainClass()
  }
}
</script>
