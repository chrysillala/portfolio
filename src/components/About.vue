<template>
  <section class="h-screen flex flex-wrap items-center justify-center" :data-sal=animation>
    <div class="flex flex-col items-center">
      <h2 class="">🌏 Hello World 🌏</h2>
      <p class="lg:w-2/3 lg:text-xl">
        My name is Chrysilla Mayasari, a Frontend Engineer based in Jakarta, Indonesia.
        <br><br>
        I love to learn anything about Web Development and I believe that strong fundamental of HTML, CSS and JS are what makes the web as cool as today.
        <br><br>
        Why I love working in this field? It's because in software development, there's always room for us developers to grow and communities that will help us along our journey. Futhermore, doing the job is like solving puzzles everyday, and I love puzzles and riddles!
        <br><br>
        Currently, I am working as Frontend Engineer at GOJEK. My daily work consists of working with PM, Designers and other Engineers in Agile environment.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About',
    props: {
      animation: {
        type: String
      },
    },
  }
</script>

<style scoped>

</style>