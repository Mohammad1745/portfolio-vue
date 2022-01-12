<template>
  <div>
    <Navbar />
    <About id="about" />
    <Projects id="projects" />
    <Skills id="skills" />
    <Contact id="contact" />
    <hr>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/standalones/Navbar'
import About from './components/standalones/About'
import Projects from "@/components/standalones/Projects";
import Skills from "@/components/standalones/Skills";
import Contact from "@/components/standalones/Contact";
import Footer from "@/components/standalones/Footer";

export default {
  components: {Navbar, About, Projects, Skills, Contact, Footer},
}
</script>

<style scoped>
</style>
