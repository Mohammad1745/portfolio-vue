<template>
  <div class="container section">
    <div class="row">
      <Map classNames="col-md-7 col-sm-12 "/>
      <ContactForm classNames="col-md-5 col-sm-12" />
    </div>
  </div>
</template>

<script>
import Map from "@/components/standalones/contact/Map"
import ContactForm from "@/components/standalones/contact/Contact";

export default {
  name: "Contact",
  components: {Map, ContactForm},
}
</script>

<style scoped>
</style>