<template>
    <div class="flex-col justify-center flex bg-primary dark:bg-light items-center h-screen">
      <toggle-theme />
      <hello-i18n />
    </div>
</template>

<script>
import ToggleTheme from './components/ToggleTheme'

export default {
  name: 'App',
  components: {
    ToggleTheme,
  }
}
</script>

