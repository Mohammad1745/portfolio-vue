<template>
  <b-nav-item :href="url">{{ name }}</b-nav-item>
</template>

<script>
export default {
  name: "NavItem",
  props: ['name','url']
}
</script>

<style scoped>

</style>