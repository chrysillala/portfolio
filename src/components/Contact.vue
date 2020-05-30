<template>
  <section class="" data-sal="fade">
    <h3>Connect With Me</h3>
    <ul>
      <li class="inline-block mr-3"
        v-for="social in socials">
        <a :href="social.url" target="_blank" class="transform hover:text-teal-500">
          <font-awesome-icon :icon="[social.iconPrefix, social.iconName]" size="3x" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

  library.add(faEnvelope, faGithub, faLinkedin)

  export default {
    name: 'Contact',
    data() {
      return {
        socials: [
          {
            name: 'github',
            iconPrefix: 'fab',
            iconName: 'github',
            url: 'https://github.com/chrysillala'
          },
          {
            name: 'linkedin',
            iconPrefix: 'fab',
            iconName: 'linkedin',
            url: 'https://www.linkedin.com/in/chrysillamayasari/'
          },
          {
            name: 'email',
            iconPrefix: 'fas',
            iconName: 'envelope',
            url: 'mailto:chrysilla_mysr@hotmail.com'
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>