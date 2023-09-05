<template>
  <div style="height: 75vh; width: 50vw;">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="[21.160377, -101.109149]" @move="log('move')">      
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>      
      <l-control-layers />
      <l-geo-json v-if="show" :geojson="polygonmx" :options="polygonmx" :options-style="styleFunction" />
    </l-map>
  </div>
</template>
<script lang="ts">
import {
  LMap,  LIcon,  LTileLayer,  LMarker,  LControlLayers,  LTooltip,  LPopup,
  LPolyline,  LPolygon,  LRectangle,  LGeoJson, } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import axios from 'axios';

export default {  
  components: {
    LMap,    LIcon,    LTileLayer,    LMarker,    LControlLayers,    LTooltip,    LPopup,
    LPolyline,    LPolygon,    LRectangle,    LGeoJson,
  },
  data() {
    return {
      show: true,
      zoom: 5,
      iconWidth: 25,
      iconHeight: 40,
      polygonmx: [],
      fillColor: "#e4ce7f",
    };
  },
  computed: {    
    styleFunction() {
      const fillColor = this.fillColor;
      return () => {
        return {
          weight: 2,
          color: "red", 
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
  },
  mounted: async function() {     
      return await axios.get('https://raw.githubusercontent.com/bsrweb/geo-json-countries-mapbox/master/countries/mexico.json')
      .then(response => {               
        this.polygonmx = response.data;        
      }      
      )
      .catch(error => {
        console.log(error);        
      });    
  },
  methods: {
    log(a: any) {
      console.log(a);
    },    
  },
};
</script>