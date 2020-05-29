<template>
  <main>
    <Hero/>
    <About/>
    <Experience/>
    <Volunteer/>
    <Projects/>
    <Contact/>
  </main>
</template>

<script>
  import Hero from '@/components/Hero.vue';
  import About from '@/components/About.vue';
  import Experience from '@/components/Experience.vue';
  import Volunteer from '@/components/Volunteer.vue';
  import Projects from '@/components/Projects.vue';
  import Contact from '@/components/Contact.vue';

  export default {
    name: 'Portfolio',
    components: {
      Hero,
      About,
      Experience,
      Volunteer,
      Projects,
      Contact,
    }
  }
</script>

<style scoped>

</style>