<template>
  <div class="container section">
    <div class="">
      <SectionHeader :title="section.title" :icon="section.icon" classNames="text-center mb-4" />
      <SectionSubtitle :content="section.subtitle" />

      <div
          v-for="j in parseInt(projects.length/inlineItems+1)"
          :key="j"
          class="project-list"
      >
        <Project
            v-for="(project, i) in projects.slice(j*inlineItems-inlineItems, j*inlineItems)"
            :key="i"
            :image="project.image"
            :title="project.title"
            :subtitle="project.subtitle"
            :url="project.url"
            :stack="project.stack"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/reusables/Project";
import SectionSubtitle from "@/components/reusables/SectionSubtitle";
import SectionHeader from "@/components/reusables/SectionHeader";

export default {
  name: "Projects",
  components: {Project, SectionHeader, SectionSubtitle},
  data() {
    return {
      section: {
        title: "Projects I've Made",
        icon: { prefix: 'fas', iconName: 'tasks' },
        subtitle: ""
      },
      projects: [
        {
          title: 'Covid-19 information',
          subtitle: 'Covid-19 Information, Countrywise DataTable, Charts & spreding of COVID overtime map.',
          url: 'https://covid19information.netlify.app/',
          stack: 'Nuxt.js',
          image: require('@/assets/images/overtime.png'),
        },
        {
          title: 'Healthcare Management System',
          subtitle: 'An online healthcare management system for the healthcare professional and the patients.',
          url: 'https://www.doctorsinlife.com/',
          stack: 'Laravel',
          image: require('@/assets/images/DiL.png'),
        },
        {
          title: 'Pathfinder Algorithm Visualizer',
          subtitle: 'A Visual Demonstration: how the pathfinder algorithms work.',
          url: 'https://mohammad1745.github.io/pathfinder_algorithm_visualizer',
          stack: 'Vanilla.js',
          image: require('@/assets/images/pathfinder.png'),
        },
        {
          title: 'Sorting Algorithm Visualizer',
          subtitle: 'A Visual Demonstration: how the soritng algorithms work.',
          url: 'https://mohammad1745.github.io/sorting_algorithm_visualizer',
          stack: 'Vanilla.js',
          image: require('@/assets/images/sorting.png'),
        },
        {
          title: 'Character Reader Engine',
          subtitle: 'Fully custom built that can read number written on the sketch area.',
          url: 'https://mohammad1745.github.io/character-reader-engine',
          stack: 'Vanilla.js',
          image: require('@/assets/images/character_reader.png'),
        },
        {
          title: 'Multi-vendor Ecommerce',
          subtitle: 'Multi-vendor Ecommerce Site with user referral system',
          url: 'https://github.com/Mohammad1745/asthar-bazar',
          stack: 'Laravel',
          image: require('@/assets/images/ecommerce.png'),
        },
      ]
    }
  },
  computed: {
    inlineItems: () => {
      return window.innerWidth > 1085 ? 20 : 10
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
}
.project-list {
  display: flex;
  overflow-x: scroll;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius:10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>