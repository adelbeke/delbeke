<template>
    <div class="absolute top-0 right-0 p-4 flex flex-row items-center">
      <label class="text-xs dark:text-secondary text-primary mr-2 hidden lg:block">{{ $t('toggle-theme') }}</label>
      <button
          class="flex-row"
          v-on:click="toggleStorageTheme"
      >
        <img :src="icon" alt=""/>
      </button>
    </div>
</template>

<script>
import {AvailableTheme} from "@/config";

export default {
  name: 'ToggleTheme',
  data() {
    return {
      icon: require('@/assets/svg/moon.svg')
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
      const main = document.getElementsByTagName('main')[0]
      const theme = localStorage.theme

      switch (theme) {
        case AvailableTheme.dark:
        default:
          main.classList.add('dark')
          this.icon = require('@/assets/svg/moon.svg')
          break
        case AvailableTheme.light:
          main.classList.remove('dark')
          this.icon = require('@/assets/svg/sun.svg')
          break
      }
    }
  },
  mounted() {
    const main = document.getElementsByTagName('main')[0]
    if (!main.classList.contains('dark')) {
      main.classList.add('dark')
      this.icon = require('@/assets/svg/moon.svg')
    }
  }
}
</script>

<i18n>
{
  "en": {
    "toggle-theme": "You can change the theme"
  }
}
</i18n>
