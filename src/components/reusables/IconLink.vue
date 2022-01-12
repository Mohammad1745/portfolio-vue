<template>
  <a :href="url" :class="classNames" target="_blank">
    <font-awesome-icon v-if="icon" :icon="icon" style="margin-right: 10px" />
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "IconLink",
  props: ['title', 'url', 'icon', 'classNames']
}
</script>

<style scoped>

</style>