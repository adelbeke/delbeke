<template>
    <div class="flex-col justify-center flex bg-primary dark:bg-light items-center h-screen">
      <toggle-theme />
    </div>
</template>

<script>
import ToggleTheme from './component/ToggleTheme'

export default {
  name: 'App',
  components: {
    ToggleTheme
  }
}
</script>

