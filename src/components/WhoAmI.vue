<template>
  <div class="w-full md:w-6/12 px-4 flex flex-col justify-start lg:justify-center">
    <h1
        :class="textClass"
        class="text-5xl mb-3 mt-4"
    >
      {{ $t('hello') }}
    </h1>
    <p
        v-for="c in content"
        :key="c"
        :class="textClass"
        class="text-xs lg:text-base"
    >
      {{ c }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'WhoAmI',
  data() {
    return {
      textClass: 'text-primary dark:text-secondary mb-2 lg:mb-4',
      content: [
        this.$t('study'),
        this.$t('what-i-like'),
        this.$t('not-coding'),
        this.$t('current'),
        this.$t('connect'),
      ]
    }
  }
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello 👋🏻",
    "study": "I started my development journey from 2017, after two years at Webstart school, I left it before the end of my license to get started.",
    "what-i-like": "I love the JavaScript environment, it's the language I use most of the time when I code, but my main goal is to be useful, if I need to learn a new language, I learn. It is the essence of our profession.",
    "not-coding": "When I'm not coding I'm a professional volleyball player.",
    "current": "Most of the time I'm busy working at Smartness on a project called Ko, hopefully we can release it soon.",
    "connect": "We can connect on LinkedIn or you can email me at arthur.delbeke.pro [at] gmail.com"
  }
}
</i18n>
