<template>
  <div class="flex dark:bg-primary bg-light items-center justify-center h-screen">
    <toggle-theme />
    <div class="w-full h-full flex justify-center items-center self-center md:w-8/12 lg:w-7/12 xl:w-6/12">
      <slot />
    </div>
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme";

export default {
  name: 'Container',
  components: {
    ToggleTheme
  }
}
</script>
