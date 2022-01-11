<template>
  <div class="container section">
    <div class="">
      <SectionHeader :title="section.title" :icon="section.icon" classNames="text-center mb-4" />
      <SectionSubtitle :content="section.subtitle" />

      <div
        v-for="j in parseInt(projects.length/inlineItems+1)"
        :key="j"
        class="d-flex justify-content-center"
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
      return window.innerWidth > 1085 ? 2 : 1
    }
  }
}
</script>

<style scoped>
.container {
}
</style>