<template>
  <form class="form" @submit.prevent="saveMessage">
    <div v-if="alertMessage" class="alert alert-success">{{ alertMessage }}</div>
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
import axios from 'axios'
export default {
  name: "ContactForm",
  data () {
    return {
      name: '',
      email: '',
      message: '',
      alertMessage: ''
    }
  },
  methods: {
    async saveMessage () {
      if (this.name && this.email && this.message) {
        let response = await axios.post('https://mohammad-portfolio-backend.herokuapp.com/mdali2016/save-message', {
          name: this.name, email: this.email, message: this.message
        })
        if(response.data.success === true){
          this.name =  ''
          this.email =  ''
          this.message =  ''
          this.alertMessage =  response.data.message
          setTimeout(() => {
            this.alertMessage = ''
          }, 1500)
        }
      }
    }
  }
}
</script>

<style scoped>
.alert{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  text-align: center;
}
</style>