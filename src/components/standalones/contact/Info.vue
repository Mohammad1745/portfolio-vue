<template>
  <div class="info" :class="classNames" >
    <div class="row">
      <div class="col-6">
        <div>
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'location-arrow' }" style="margin-right:.5rem; color: red" />
          Location: House 2, Road 2, Nirala Residential Area, Khulna
        </div>
      </div>
      <div class="col-6">
        <div>
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'phone-alt' }" style="margin-right:.5rem; color: green" />
          +880 1631 292 463
        </div>
        <div>
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'mail-bulk' }" style="margin-right:.5rem; color: green" />
          mdali2016.227@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: ['classNames'],
}
</script>

<style scoped>
.info {
  height: 0;
}
.row {
  z-index: 10;
  transform: translateY(20px);
  height: auto;
  width: 80%;
  background:  #232323;
  color: white;
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  border-radius: 5px;
  margin: auto;
}
</style>