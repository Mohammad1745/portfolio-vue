<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12">
      <ProfileImage  />
    </div>

    <div class="col-xl-12 col-lg-12 col-md-6 col-sm-12 social-links mt-3">
      <ButtonLink
          v-for="(button, i) in buttons.info"
          :key="i"
          :classNames="buttons.classNames"
          :icon="button.icon"
          :title="button.title"
          :url="button.url" />
    </div>
  </div>
</template>

<script>
import ProfileImage from "@/components/standalones/about/ProfileImage";
import ButtonLink from "@/components/reusables/ButtonLink";

export default {
  name: "Profile",
  components: {ProfileImage, ButtonLink},
  data() {
    return {
      buttons :{
        classNames: ['','link-item w-250 mt-2 btn btn-outline-dark'],
        info: [
          { icon: { prefix: 'fab', iconName: 'github-square' }, title: 'Github', url: 'https://github.com/Mohammad1745'},
          { icon: { prefix: 'fab', iconName: 'linkedin' }, title: 'Linked In', url: 'https://www.linkedin.com/in/mohammad-ali-90215715a/'},
          { icon: { prefix: 'fab', iconName: 'facebook-square' }, title: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100014636023010'},
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>