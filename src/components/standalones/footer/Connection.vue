<template>
  <div :class="classNames">
    <div>{{ title }}</div>
    <div class="icons d-flex my-2">
      <IconLink
          v-for="(link, i) in links"
          :key="i"
          :url="link.url"
          :icon="link.icon"
          classNames="text-dark" />
    </div>
  </div>
</template>

<script>
import IconLink from "@/components/reusables/IconLink";

export default {
  name: "Connection",
  props: ['classNames'],
  components: {IconLink},
  data(){
    return {
      title: "Connect with me through ~",
      links: [
        {url: "https://www.facebook.com/profile.php?id=100014636023010", icon: { prefix: 'fab', iconName: 'facebook-square' }},
        {url: "https://www.linkedin.com/in/mohammad-ali-90215715a/", icon: { prefix: 'fab', iconName: 'linkedin' }},
        {url: "https://twitter.com/Mohamma94810554", icon: { prefix: 'fab', iconName: 'twitter-square' }},
      ],
    }
  }
}
</script>

<style scoped>
  .icons {
    font-size: 35px;
  }
</style>