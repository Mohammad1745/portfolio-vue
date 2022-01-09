<template>
  <div class="intro">
    <div class="intro-title mt-4">
      <h1>{{ title }}</h1>
    </div>
    <div class="intro-subtitle mt-4">
      <h2>{{ subtitle }}</h2>
    </div>
    <div class="intro-description mt-5">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  data() {
    return {
      title: 'Hi, I\'m Mohammad Ali',
      subtitle: 'I love building amazing web apps.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?',
    }
  }
}
</script>

<style scoped>

</style>