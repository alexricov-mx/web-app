<template>  
  <div style="height: 75vh;">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="[21.160377, -101.109149]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" name="IncluP"
        layer-type="base"></l-tile-layer>
      <l-geo-json v-if="show" :geojson="polygonmx" :options="polygonmx" :options-style="styleFunction" />
      <div v-for="punto in puntos">
        <l-marker :lat-lng="[punto.lat, punto.lng]"> </l-marker>
      </div>
    </l-map>
  </div>  
</template>
<script lang="ts">
import { LMap, LIcon, LTileLayer, LMarker, LGeoJson } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import axios from 'axios';
import type { punto } from "@/models/punto";

export default {  
  props: {
    puntos: {
      type: Array<punto>,
      required: true,
    }
  },
  components: {
    LMap, 
    LIcon,
    LTileLayer,
    LMarker,    
    LGeoJson
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
          fillOpacity: .2
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
</script>@/models/punto