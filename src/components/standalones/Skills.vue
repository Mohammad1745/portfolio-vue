<template>
  <div class="container section">
    <div class="">
      <h1 class="text-center mb-4">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'file-code' }" style="margin-right:.5rem" />
        <u>Skills & Technologies</u>
      </h1>
<!--      <p class="text-center mb-4">-->
<!--        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimu est.-->
<!--      </p>-->
      <div class="row">
        <div
            v-for="(skill, i) in skills.data"
            :key="i"
            class="col-md-4 col-sm-12 d-inline-block justify-content-between"
        >
          <h3 class="text-center">{{ skill.type }}</h3>
          <Skill
              v-for="(title, j) in skill.titles"
              :key="j"
              :title="title"
              :icon="skills.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from "@/components/reusables/Skill";

export default {
  name: "Projects",
  components: {Skill},
  data() {
    return {
      inlineItems: 3,
      skills: {
        icon:{ prefix: 'fas', iconName: 'code' },
        data:[
          { type: 'Frameworks', titles: ['Laravel', 'Vue.js', 'Node.js(Express)', 'Flutter',] },
          { type: 'Languages', titles: ['PHP', 'JavaScript', 'C/C++', 'HTML/CSS', 'Dart',] },
          { type: 'Industrial', titles: ['Microcontroller', 'IoT', 'PCB Design',] },
        ]
      }
    }
  }
}
</script>

<style scoped>
.container {
}
</style>