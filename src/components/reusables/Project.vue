<template>
  <div class="project h-250 m-3">
    <div
        v-if="show"
        @mouseenter="hideImage"
        class="details border-radius-2 w-500 h-250"
    >
      <img
          :src="image"
          width="500"
          height="250"
          alt="Loading..."
          class="border-radius-2"
      >
    </div>
    <div
        v-else
        @mouseleave="showImage"
        class="details border-radius-2 w-500 h-250 p-5"
    >
      <div class="text-center">
        <h4>{{ title }}</h4>
      </div>
      <div class="mt-1 text-center">
        <p>{{ subtitle }}</p>
      </div>
      <div class="mt-5 text-center">
        <ButtonLink
            :classNames="['','btn btn-outline-primary']"
            title="Project Link"
            :url="url" />
      </div>
      <div class="mt-2 text-center">
        <p>{{ stack }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/reusables/ButtonLink";

export default {
  name: "Project",
  props: ['image', 'title', 'subtitle', 'url', 'stack'],
  components: {ButtonLink},
  data() {
    return {
      show: true,
    }
  },
  methods:{
    showImage() {
      this.show = true
    },
    hideImage () {
      this.show = false
    },
  }
}
</script>

<style scoped>
.project{
}
.details {
  background: #232323;
  color: #ddd;
}
</style>