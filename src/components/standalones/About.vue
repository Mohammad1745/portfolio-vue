<template>
  <div class="container section">
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-12">
        <Profile />
      </div>
      <div class="col-xl-8 col-lg-7 col-md-12">
        <Introduction />
        <div class="row button-group mt-4">
          <ButtonLink
            v-for="(button, i) in buttons.info"
            :key="i"
            :classNames="buttons.classNames"
            :icon="button.icon"
            :title="button.title"
            :url="button.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/reusables/ButtonLink";
import Profile from "@/components/standalones/about/Profile";
import Introduction from "@/components/standalones/about/Introduction";

export default {
  name: "About",
  components: {Profile, Introduction,ButtonLink},
  data() {
    return {
      buttons :{
        classNames: ['col-md-4 col-sm-12', 'mt-2 btn btn-outline-primary d-block'],
        info: [
          { icon: { prefix: 'fas', iconName: 'briefcase' }, title: 'Work With Me', url: '#contact'},
          { icon: { prefix: 'fas', iconName: 'tasks' }, title: 'See My Works', url: '#projects'},
          { icon: { prefix: 'fas', iconName: 'download' }, title: 'Download Resume', url: ''},
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>