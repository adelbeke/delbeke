<template>
  <main class="dark">
      <container>
        <div class="flex flex-col md:flex-row">
          <illustration />
          <who-am-i />
        </div>
      </container>
  </main>
</template>

<script>
import Container from './components/Container'
import Illustration from "@/components/Illustration";
import WhoAmI from "@/components/WhoAmI";

export default {
  name: 'App',
  components: {
    Container,
    Illustration,
    WhoAmI,
  }
}
</script>

<style>
  main {
    font-family: 'Karla', serif;
  }
</style>
