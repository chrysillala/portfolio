<template>
  <section class="bg-blue-900 text-white p-6 md:p-12">
    <h3 data-sal="fade">Projects</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="" data-sal="slide-down" :data-sal-delay=index*100
        v-for="(project, index) in projects"
        :key="project.id"
        v-if="project.isShown">
        <a class="flex justify-center items-center rounded shadow-lg bg-white text-black h-full transform hover:scale-105"
          :href=project.url
          target="_blank">
          <div class="px-6 py-4">
            <div class="font-bold text-3xl mb-2">{{ project.title }}</div>
            <div class="py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                v-for="tag in project.tags">{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'gojek.com',
            url: 'https://www.gojek.com',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true,
            delay: 100
          },
          {
            id: 2,
            title: 'Gojek Career',
            url: 'https://career.gojek.com',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true,
            delay: 150
          },
          {
            id: 3,
            title: 'Gojek Singapore',
            url: 'https://www.gojek.com/sg',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true,
            delay: 200
          },
          {
            id: 4,
            title: 'Harkulnas 2019',
            url: 'https://harkulnas.co.id',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true,
            delay: 250
          },
          {
            id: 5,
            title: 'Gojek Help Center',
            url: 'https://gojek.com/help',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true
          },
          {
            id: 6,
            title: 'Findaya',
            url: 'https://findaya.com',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true
          },
          {
            id: 7,
            title: 'Lia Stephanie School',
            url: 'https://lscs.sch.id',
            tags: ['Wordpress', 'jQuery', 'SCSS'],
            isShown: true
          },
          {
            id: 8,
            title: 'Ghibli Movies',
            url: 'https://chrysillala.github.io/ghibli-api/',
            tags: ['Vanilla JS'],
            isShown: true
          },
          {
            id: 9,
            title: 'Social Media Dashboard',
            url: 'https://fem-sns-dashboard.now.sh/',
            tags: ['Vanilla JS'],
            isShown: true
          },
          {
            id: 10,
            title: 'Super Smash Bros Amiibo',
            url: 'https://learn-vue-router.now.sh/',
            tags: ['Vue JS'],
            isShown: true
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>