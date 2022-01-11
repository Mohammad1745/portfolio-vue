<template>
  <div class="intro">
    <div class="intro-title mt-4">
      <h1>{{ title }}</h1>
    </div>
    <div class="intro-subtitle mt-4">
      <h2>{{ subtitle }}</h2>
    </div>
    <div class="intro-description mt-5">
      <div v-for="(text, i) in description" :key="i">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  data() {
    return {
      title: 'Hi, I\'m Mohammad Ali',
      subtitle: 'I love building amazing web apps.',
      description: [
          `It was really hard to carry motivation as a self-taught programmer. But love for coding, taking on new challenges and solving problems always push me up to my next milestone.`,
          `Currently, I am working on Vue.js. Before that, I worked on Node.js(Express and WebSocket) for 1 years and laravel for 3 years and did some cool projects with that. In the meantime, I did some local projects based on Laravel.`
      ],
    }
  }
}
</script>

<style scoped>

</style>