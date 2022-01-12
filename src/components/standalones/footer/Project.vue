<template>
  <div :class="classNames">
    <div class="text-end">{{ title }}</div>
    <div class="icons d-flex justify-content-end my-2">
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
      title: "Explore my other projects on ~",
      links: [
        {url: "https://github.com/Mohammad1745", icon: { prefix: 'fab', iconName: 'github-square' }},
        {url: "https://codepen.io/mohammad1745", icon: { prefix: 'fab', iconName: 'codepen' }},
        {url: "https://gitlab.com/Mohammad1745", icon: { prefix: 'fab', iconName: 'gitlab' }},
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