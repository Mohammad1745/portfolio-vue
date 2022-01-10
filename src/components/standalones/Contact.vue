<template>
  <div class="container section">
    <div class="row">
      <div class="col-md-7 col-sm-12 img p-3" >
        <div class="info">
          <div class="row">
            <div class="col-6">
              <div>
                <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'location-arrow' }" style="margin-right:.5rem; color: red" />
                Location: House 2, Road 2
              </div>
              <div>Nirala Residential Area</div>
              <div>Khulna</div>
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
        </div>
      <div class="col-md-5 col-sm-12">
        <h1 class="mb-4">
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'mail-bulk' }" style="margin-right:.5rem" />
          <u>Contact</u>
        </h1>
        <p class="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit officia aspernatur veritatis. Asperiores, aliquid
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
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      image: require('@/assets/images/location.png')
    }
  }
}
</script>

<style scoped>
  .img {
    border: 1px solid #232323;
    border-radius: 5px;
    background-image: url('../../assets/images/location.png');
  }
  .info {
    width: 70%;
    background:  #232323;
    color: white;
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    border-radius: 5px;
    margin: auto;
  }
</style>