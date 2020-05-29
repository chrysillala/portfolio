<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Portfolio/>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Portfolio from './components/Portfolio.vue'
import Footer from './components/Footer.vue'

import sal from 'sal.js'

export default {
  name: 'App',
  components: {
    Portfolio,
    Footer
  },
  mounted () {
    // disable sal for small screen
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (width < 768) {
      sal({
        disable: true
      })
    } else {
      sal({
        threshold: .8,
        once: false
      })
    }
  }
}
</script>

<style>
@import './../node_modules/sal.js/dist/sal.css';

:root {
  --color-black: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
