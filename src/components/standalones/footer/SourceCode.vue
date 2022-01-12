<template>
  <div :class="classNames">
    <IconLink url="https://github.com/Mohammad1745/portfolio-vue" :icon="{ prefix: 'fab', iconName: 'github' }" title="Source Code" />
  </div>
</template>

<script>
import IconLink from "@/components/reusables/IconLink";

export default {
  name: "SourceCode",
  props: ['classNames'],
  components: {IconLink}
}
</script>

<style scoped>

</style>