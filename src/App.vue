<template>
  <div>
    <Navbar />
    <About id="about" />
    <Projects id="project" />
  </div>
</template>

<script>
import Navbar from './components/standalones/Navbar'
import About from './components/standalones/About'
import Projects from "@/components/standalones/Projects";

export default {
  components: {Navbar, About, Projects},
}
</script>

<style scoped>

</style>
