<template>
  <p :class="classNames">
    {{ content }}
  </p>
</template>

<script>
export default {
  name: "SectionHeader",
  props: ['content', 'classNames']
}
</script>

<style scoped>

</style>