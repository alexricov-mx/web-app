<template>
    <div>
      <div id="map" style="height: 75vh;"></div>
    </div>
  </template>
  
  <script lang="ts">
import 'leaflet/dist/leaflet.css';
// import 'leaflet.markercluster/dist/MarkerCluster.css'; // Estilos del agrupamiento
// import "leaflet.markercluster/dist/leaflet.markercluster.js";
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css'; // Estilos del agrupamiento
// import 'leaflet.markercluster';
import L from 'leaflet';
import type { punto } from '@/models/punto';
  
export default {
props: {
    coordenadas: {
    type: Array<punto>,
    required: true,
    },
},
mounted() {
    const map = L.map('map').setView([21.160377, -101.109149], 5); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    
    // // Crea un grupo para los clusters
    // const markers = L.markerClusterGroup();

    // Utiliza v-for para renderizar marcadores para cada par de coordenadas
    this.coordenadas.forEach(coordenada => {
    L.marker([coordenada.lat, coordenada.lng]).addTo(map);
    // markers.addLayer(marker); // Agrega el marcador al grupo de clusters   
    // const marker = L.marker([coordenada.lat, coordenada.lng]);
    // markers.addLayer(marker); // Agrega el marcador al grupo de clusters

    });

    // map.addLayer(markers); // Agrega el grupo de clusters al mapa

    // Utiliza fetch para cargar el archivo GeoJSON desde la ruta
    fetch('datos.geojson')
      .then(response => response.json())
      .then(geojson => {
        L.geoJSON(geojson,{
            style: function (feature) {
                return {
                fillColor: '#e4ce7f',
                weight: 2,
                opacity: 1,
                color: 'red',
                dashArray: '3',
                fillOpacity: 0.2
                }
            }
        }).addTo(map);
      });
    },
};
</script>