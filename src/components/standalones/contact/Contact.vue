<template>
  <div :class="classNames" >
    <div class="px-md-5 px-sm-0 my-md-0 my-sm-5">
      <SectionHeader :title="section.title" :icon="section.icon" classNames="mb-4" />
      <SectionSubtitle :content="section.subtitle" />
      <ContactForm />
    </div>
  </div>
</template>

<script>
import SectionHeader from "@/components/reusables/SectionHeader";
import SectionSubtitle from "@/components/reusables/SectionSubtitle";
import ContactForm from "@/components/standalones/contact/ContactForm";

export default {
  name: "Contact",
  components: {SectionHeader, SectionSubtitle, ContactForm},
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