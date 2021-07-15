<template>
  <main class="dark">
      <container>
        <p class="dark:text-secondary text-primary text-xl font-bold">Hello 👋🏻</p>
      </container>
  </main>
</template>

<script>
import Container from './components/Container'

export default {
  name: 'App',
  components: {
    Container,
  }
}
</script>

<style>
  main {
    font-family: 'Karla', serif;
  }
</style>
