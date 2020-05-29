<template>
  <section class="bg-blue-900 text-white p-6 md:p-12">
    <h3>Projects</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <a :href=project.url class="transform hover:scale-105"
        v-for="project in projects"
        :key="project.id"
        v-if="project.isShown">
        <div class="flex justify-center items-center rounded shadow-lg bg-white text-black h-full">
          <div class="px-6 py-4">
            <div class="font-bold text-3xl mb-2">{{ project.title }}</div>
            <div class="py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                v-for="tag in project.tags">{{ tag }}</span>
            </div>
          </div>
        </div>
      </a>
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
            isShown: true
          },
          {
            id: 2,
            title: 'Gojek Career',
            url: 'https://career.gojek.com',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true
          },
          {
            id: 3,
            title: 'Gojek Singapore',
            url: 'https://www.gojek.com/sg',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true
          },
          {
            id: 4,
            title: 'Harkulnas 2019',
            url: 'https://harkulnas.co.id',
            tags: ['Django', 'jQuery', 'SCSS'],
            isShown: true
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
            title: 'Ghibli API',
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
        ]
      }
    },
  }
</script>

<style scoped>

</style>