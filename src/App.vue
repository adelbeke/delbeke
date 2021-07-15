<template>
  <main class="dark">
    <div class="flex-col justify-center flex dark:bg-primary bg-light items-center h-screen">
      <toggle-theme />
    </div>
  </main>
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

<style>
  main {
    font-family: 'Karla', serif;
  }
</style>
