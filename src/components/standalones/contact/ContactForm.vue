<template>
  <form class="form" @submit.prevent="saveMessage">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group mt-3">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group mt-3">
      <label>Message</label>
      <textarea rows="6" class="form-control" v-model="message"></textarea>
    </div>
    <button class="btn btn-primary mt-3 text-white">Send</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data () {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    saveMessage () {
      console.log({
        name: this.name,
        email: this.email,
        message: this.message,
      })
    }
  }
}
</script>

<style scoped>

</style>