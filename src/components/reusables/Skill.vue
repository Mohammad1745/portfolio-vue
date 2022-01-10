<template>
  <div class="skill text-center">
    <font-awesome-icon :icon="icon" style="margin: 0 .5rem; float:left" />
    <span class="text-center">{{ title }}</span>
  </div>
</template>

<script>

export default {
  name: "Skill",
  props: ['title', 'icon'],
}
</script>

<style scoped>
.skill{
  /*width: 18rem ;*/
  height: 40px ;
  background: #323232 ;
  color: white ;
  padding-top: .5rem ;
  margin-top: .5rem ;
  border-radius: 5px;
  /*border: 1px solid #0dcaf0;*/
}

</style>