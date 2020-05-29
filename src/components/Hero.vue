<template>
  <section class="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 p-0 h-screen">
    <div class="flex flex-col items-center justify-center">
      <div data-sal="fade">
        <h1 class="animate mb-0">Chrysilla Mayasari</h1>
        <h2 class="mb-0">Frontend Enthusiast</h2>
      </div>
    </div>
    <div class="flex items-center justify-center bg-blue-900 text-white">
      <img class="rounded-full w-2/4 h-2/4" src="../assets/images/profile-pic2.jpg" alt="Chrysilla Mayasari">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Hero',
  }
</script>

<style scoped>
.name {
  -webkit-text-stroke: 3px var(--color-black)
}

.animate {
  /* background: url('https://png.pngtree.com/element_our/md/20171208/md_5a2aea2511740.jpg'); */
  background: linear-gradient(270deg, #2a4365, #1eb991);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: moveBg 5s linear infinite;
  -webkit-animation: moveBg 5s linear infinite;
  font-weight: 900;
  /* letter-spacing: 5px; */
  /* -webkit-text-stroke: 1px #000; */
}

@keyframes moveBg {
  /* from {
    background-position: 50% 100%;
  }
  to {
    background-position: 0% 30%;
  } */
  0%{background-position:0% 60%}
  50%{background-position:100% 45%}
  100%{background-position:0% 60%}
}
</style>