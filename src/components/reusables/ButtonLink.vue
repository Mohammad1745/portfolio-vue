<template>
  <div :class="classNames[0]">
    <a :class="classNames[1]" :href="url">
      <font-awesome-icon :icon="icon" style="margin-right:.5rem" />
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "ButtonLink",
  props: ['classNames', 'icon', 'title', 'url']
}
</script>

<style scoped>

</style>