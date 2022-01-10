<template>
  <div class="container section">
    <div class="">
      <h1 class="text-center mb-4">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'tasks' }" style="margin-right:.5rem" />
        <u>Projects I've Made</u>
      </h1>
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

export default {
  name: "Projects",
  components: {Project},
  data() {
    return {
      inlineItems: 2,
      projects: [
        {
          title: 'Pathfinder Algorithm Visualizer',
          subtitle: 'Subtitle',
          url: 'https://mohammad1745.github.io/pathfinder_algorithm_visualizer',
          stack: 'Vanilla.js',
          image: require('@/assets/images/pathfinder.png'),
        },
        {
          title: 'Sorting Algorithm Visualizer',
          subtitle: 'Subtitle',
          url: 'https://mohammad1745.github.io/sorting_algorithm_visualizer',
          stack: 'Vanilla.js',
          image: require('@/assets/images/sorting.png'),
        },
        {
          title: 'Character Reader Engine',
          subtitle: 'Subtitle',
          url: 'https://mohammad1745.github.io/character-reader-engine',
          stack: 'Vanilla.js',
          image: require('@/assets/images/character_reader.png'),
        },
        {
          title: 'Ecommerce Site',
          subtitle: 'Subtitle',
          url: 'https://github.com/Mohammad1745/asthar-bazar',
          stack: 'Laravel',
          image: require('@/assets/images/ecommerce.png'),
        },
      ]
    }
  }
}
</script>

<style scoped>
.container {
}
</style>