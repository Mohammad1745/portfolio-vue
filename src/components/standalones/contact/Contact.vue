<template>
  <div :class="classNames" >
    <div class="px-md-5 px-sm-0 my-md-0 my-sm-5">
      <h1 class="mb-4">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'mail-bulk' }" style="margin-right:.5rem" />
        <u>Contact</u>
      </h1>
      <p class="">
        If you have any porject or need help. Contact me
      </p>
      <div class="form">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group mt-3">
          <label>Email</label>
          <input type="email" class="form-control">
        </div>
        <div class="form-group mt-3">
          <label>Message</label>
          <textarea rows="6" class="form-control"></textarea>
        </div>
        <button type="button" class="btn btn-primary mt-3 text-white">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: ['classNames'],
}
</script>

<style scoped>

</style>