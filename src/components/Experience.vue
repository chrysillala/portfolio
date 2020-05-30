<template>
  <section class="h-screen bg-blue-900 text-white">
    <h3 data-sal="fade">Professional Experience</h3>
    <div class="grid grid-rows-2 lg:grid-cols-9 lg:grid-rows-5 h-full text-white">
      <div class="lg:col-start-2 lg:col-span-3 lg:row-span-3 border-b-4 rounded-lg card-exp" data-sal="slide-down">
        <p class="text-left">2Y</p>
        <h3>Gojek</h3>
        <p class="font-bold">Frontend Engineer</p>
        <div>
          <span class="mr-2">Django</span>
          <span class="mr-2">jQuery</span>
          <span class="mr-2">Vanilla JS</span>
          <span class="mr-2">SCSS</span>
          <span class="mr-2">Gulp</span>
        </div>
      </div>
      <div class="lg:col-start-6 lg:row-start-2 lg:col-span-3 lg:row-span-3 border-b-4 rounded-lg card-exp" data-sal="slide-up" data-sal-delay="500">
        <p class="text-right">1Y</p>
        <h3>aCommerce</h3>
        <p class="font-bold">Frontend Web Developer</p>
        <div>
          <span class="mr-2">Magento</span>
          <span class="mr-2">jQuery</span>
          <span class="mr-2">SCSS</span>
          <span class="mr-2">LESS</span>
          <span class="mr-2">Gulp</span>
          <span class="mr-2">Compass</span>
        </div>
      </div>
      <!-- <div class="bg-white shadow-lg rounded-lg overflow-hidden text-black"
        v-for="(professional, index) in experiences"
        :key="professional.id">
        <h4>{{ professional.organization }}</h4>
        <p>
          {{ professional.role }}<br>
          {{ joinDate[index] }}
        </p>
      </div> -->
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Experience',
    data() {
      return {
        experiences: [
          {
            id: 1,
            type: 'professional',
            organization: 'Gojek',
            role: 'Frontend Engineer',
            description: '',
            startDate: 'July 2018',
            endDate: 'Present'
          },
          {
            id: 2,
            type: 'professional',
            organization: 'aCommerce',
            role: 'Frontend Web Developer',
            description: '',
            startDate: 'October 2017',
            endDate: 'July 2018'
          },
          {
            id: 3,
            type: 'professional',
            organization: 'aCommerce',
            role: 'Content Specialist',
            description: '',
            startDate: 'September 2016',
            endDate: 'October 2017'
          },
          {
            id: 4,
            type: 'professional',
            organization: 'MNC Tencent',
            role: 'Content and Product Management Executive',
            description: '',
            startDate: 'October 2014',
            endDate: 'January 2016'
          },
        ]
      }
    },
    computed: {
      joinDate() {
        return this.experiences.map( experience => {
          return `${experience.startDate} - ${experience.endDate}`
        })
      }
    },
  }
</script>

<style scoped>
.card-exp {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 70%;
  @media (min-width: 1024px) {
    height: auto;
  }
}
</style>