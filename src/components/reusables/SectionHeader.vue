<template>
  <h1 :class="classNames">
    <font-awesome-icon :icon="icon" style="margin-right:.5rem" />
    <u>{{ title }}</u>
  </h1>
</template>

<script>
export default {
  name: "SectionHeader",
  props: ['title', 'icon', 'classNames']
}
</script>

<style scoped>

</style>