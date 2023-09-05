<script setup lang="ts">

import { ref, onMounted } from 'vue';
import axios from 'axios';

import ResumeTable from '@/components/ResumeTable.vue'
import RankingTable from '@/components/RankingTable.vue'
import MapComponent from '@/components/MapComponent.vue';

const resume = [
  {
    id: "Total",
    total: {
      horas: "0",
      minutos: "0",
      segundos: "0",
    },
    porcentaje: "0",
    progreso: "0",  
  },
  {
    id: "Porcentaje",
    total: {
      horas: "0",
      minutos: "0",
      segundos: "0",
    },
    porcentaje: "0",
    progreso: "0",  
  },
  {
    id: "Progreso",
    total: {
      horas: "0",
      minutos: "0",
      segundos: "0",
    },
    porcentaje: "0",
    progreso: "0",  
  }
]

const ranking = [
  {
    ficha:"445626",
    nombre:"Alex Rico",
    juego1:"5,324",
    juego2:"4,234",
    juego3:"3,234",
    total:"12,792",
    posicion:"1",
  },
  {
    ficha:"372415",
    nombre:"Efren Espinosa",
    juego1:"5,324",
    juego2:"4,234",
    juego3:"3,234",
    total:"12,792",
    posicion:"2",
  },
  {
    ficha:"246631",
    nombre:"Checo Leal",
    juego1:"5,324",
    juego2:"4,234",
    juego3:"3,234",
    total:"12,792",
    posicion:"3",    
  }
]

// TODO:  las funciones para obtener mis datos de la API
// Resumen
// Ranking
// coordenadas para llenar mi mapa

// TODO: onMounted para ejecutar las funciones de la API
// onMounted(async () => {
//   try {
//     const response = await axios.get('../assets/arcades.json'); // Asegúrate de que la ruta sea correcta
//     // datos.value = response.data;
//     datos = JSON.parse(response.data)
//   } catch (error) {
//     console.error('Error al cargar el archivo JSON', error);
//   }
// });
</script>

<template>
  <h1>Tablero APP IncluPemex PNUD</h1>
  <div>
    <div>
      <ResumeTable :resume="resume" />
    </div>    
    <br><br>
    <div>
      <RankingTable :ranking="ranking" />
    </div>
  </div>
  <br><br>
  <div>
    <MapComponent/>
  </div>
</template>@/models/tipo-geojson