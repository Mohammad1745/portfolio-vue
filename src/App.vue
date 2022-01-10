<template>
  <div class="app">
    <Navbar />
    <About id="about" />
    <Projects id="projects" />
    <Skills id="skills" />
  </div>
</template>

<script>
import Navbar from './components/standalones/Navbar'
import About from './components/standalones/About'
import Projects from "@/components/standalones/Projects";
import Skills from "@/components/standalones/Skills";

export default {
  components: {Navbar, About, Projects, Skills},
}
</script>

<style scoped>
.app {
  margin-top: 80px;
}
</style>
