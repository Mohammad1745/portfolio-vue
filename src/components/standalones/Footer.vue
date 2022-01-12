<template>
  <div class="container">
    <div class="row">
      <Connection classNames="col-4" />
      <SourceCode classNames="col-4 d-flex justify-content-center my-2" />
      <Project classNames="col-4" />
    </div>
  </div>
</template>

<script>
import Connection from "@/components/standalones/footer/Connection";
import Project from "@/components/standalones/footer/Project";
import SourceCode from "@/components/standalones/footer/SourceCode";

export default {
  name: "Footer",
  components: {Connection, SourceCode,Project},
  data() {
    return {

      gitLinks: [
        {url: "https://github.com/Mohammad1745", icon: { prefix: 'fab', iconName: 'github-square' }},
        {url: "https://codepen.io/mohammad1745", icon: { prefix: 'fab', iconName: 'codepen' }},
        {url: "https://gitlab.com/Mohammad1745", icon: { prefix: 'fab', iconName: 'gitlab' }},
      ]
    }
  }
}
</script>

<style scoped>
.row{
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>