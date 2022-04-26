<template>
  <div  :class="classNames" >
    <Info/>
    <div class="map p-3">
      <l-map style="height: 50vh; max-width: 90vh" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng" ></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import Info from "./Info";

export default {
  name: "Map",
  props: ['classNames'],
  components: {
    Info,
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 7,
      center: [22.8021459,89.5555336],
      weight: 0,
      opacity: 0.1,
      fillOpacity: 0.5,
      markerLatLng: [22.8021459,89.5555336]
    }
  },
}
</script>

<style scoped>

.map {
  border: 1px solid #232323;
  border-radius: 5px;
  background-size: 100% 100%;
}
.vue2leaflet-map{
  z-index: 8;
}
@media (max-width:767px) {
  .map {
    height: 400px;
  }
}
</style>