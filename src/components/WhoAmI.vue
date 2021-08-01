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
        v-html="c"
    />
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
    "study": "I started my development journey from 2017, after two years at <a href='https://ecole-webstart.com/' target='_blank' class='italic font-bold'>Webstart</a> school, I left it before the end of my license to get started.",
    "what-i-like": "I love the JavaScript environment, it's the language I use most of the time when I code, but my main goal is to be useful, if I need to learn a new language, I learn. It is the essence of our profession.",
    "not-coding": "When I'm not coding <a href='https://volleybox.net/fr/arthur-delbeke-p32927/clubs' target='_blank' class='italic font-bold'>I'm a professional volleyball player.</a>",
    "current": "Most of the time I'm busy working at <a href='https://smartness.co/' target='_blank' class='italic font-bold'>Smartness</a> on a project called <a href='https://www.justko.eu/' target='_blank' class='italic font-bold'>Ko</a>, hopefully we can release it soon.",
    "connect": "We can connect on <a href='https://www.linkedin.com/in/arthurdelbeke/' target='_blank' class='italic font-bold'>LinkedIn</a> or you can email me at arthur.delbeke.pro [at] gmail.com"
  }
}
</i18n>
