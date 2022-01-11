<template>
  <div :class="classNames" >
    <div class="px-md-5 px-sm-0 my-md-0 my-sm-5">
      <SectionHeader :title="section.title" :icon="section.icon" classNames="mb-4" />
      <SectionSubtitle :content="section.subtitle" />
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
import SectionHeader from "@/components/reusables/SectionHeader";
import SectionSubtitle from "@/components/reusables/SectionSubtitle";

export default {
  name: "Contact",
  components: {SectionHeader, SectionSubtitle},
  props: ['classNames'],
  data () {
    return {
      section: {
        title: "Contact",
        icon: { prefix: 'fas', iconName: 'mail-bulk' },
        subtitle: "If you have any porject or need help. Contact me"
      }
    }
  }
}
</script>

<style scoped>

</style>