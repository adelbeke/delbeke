<template>
  <main class="dark">
    <div class="flex-col justify-center flex bg-yellow-300 dark:bg-blue-300 items-center h-screen">
      <div class="text-4xl">
        Hello 👋🏼
      </div>
      <button v-on:click="toggleStorageTheme">
        Toggle dark theme
      </button>
    </div>
  </main>
</template>

<script>
import {AvailableTheme} from "../config";

export default {
  name: 'App',
  methods: {
    toggleStorageTheme() {
      const current = localStorage.theme
      localStorage.theme = current === AvailableTheme.dark
          ? AvailableTheme.light
          : AvailableTheme.dark

      return this.toggleMainClass()
    },
    toggleMainClass() {
      const main = document.getElementsByTagName('main')[0]
      const theme = localStorage.theme
      switch (theme) {
        case AvailableTheme.dark:
        default:
          main.classList.add('dark')
          break
        case AvailableTheme.light:
          main.classList.remove('dark')
          break
      }
    }
  },
  mounted() {
    this.toggleMainClass()
  }
}
</script>

