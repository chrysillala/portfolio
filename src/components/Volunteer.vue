<template>
  <section class="lg:h-screen">
    <h3 data-sal="fade">Volunteer Experience</h3>
    <p class="mb-4" data-sal="fade">By sharing I learn a lot, that's why I love to share by becoming a mentor. Here are some of my previous volunteering experience</p>
    <div class="grid lg:grid-cols-2 gap-4" data-sal="fade">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden" data-sal="zoom-in" :data-sal-delay=index*100
        v-for="(volunteer, index) in experiences"
        :key="volunteer.id"
        v-if="volunteer.type === 'volunteer'">
        <!-- <div class="relative pb-2/3"> -->
          <img class="h-64 w-full object-cover" :src="volunteer.imageUrl" :alt="volunteer.event">
        <!-- </div> -->
        <div class="p-4">
          <div class="mb-4">
            <h4 class="text-2xl font-bold">{{ volunteer.organization }}</h4>
            <p>{{ volunteer.event }}</p>
            <p>{{ volunteer.date }}</p>
          </div>
          <p>{{ volunteer.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // In a Vue regular setup, /assets is not served. That's why we need require()
  export default {
    name: 'Volunteer',
    data() {
      return {
        experiences: [
          {
            id: 1,
            type: 'volunteer',
            organization: 'Generation Girl',
            event: 'Winter Club 2018',
            role: 'Mentor',
            description: 'Winter Club is a one week program by Generation Girl to introduce web development (STEM) for girls around 12-16 years old. Volunteered as Mentor for Web Development Bahasa class.',
            date: 'December 2018',
            imageUrl: require('@/assets/images/winter-club.jpg')
          },
          {
            id: 2,
            type: 'volunteer',
            organization: 'Facebook Developer Circle: Jakarta',
            event: 'Study Group Batch 3',
            role: 'Mentor',
            description: 'Volunteered as Frontend Mentor, in charge of assisting study group in completing their course (HTML, CSS, JS, React)',
            date: 'February - March 2020',
            imageUrl: require('@/assets/images/fb-devc.jpg')
          },
        ]
      }
    },
    computed: {
      getImageUrl() {
        return this.experiences
      }
    },
  }
</script>

<style scoped>

</style>