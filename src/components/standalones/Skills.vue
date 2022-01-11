<template>
  <div class="container section">
    <div class="">
      <SectionHeader :title="section.title" :icon="section.icon" classNames="text-center mb-4" />
      <SectionSubtitle :content="section.subtitle" />

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
import SectionHeader from "@/components/reusables/SectionHeader";
import SectionSubtitle from "@/components/reusables/SectionSubtitle";

export default {
  name: "Projects",
  components: {Skill, SectionHeader, SectionSubtitle},
  data() {
    return {
      section: {
        title: "Skills & Technologies",
        icon: { prefix: 'fas', iconName: 'file-code' },
        subtitle: ""
      },
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