<script setup lang="ts">

import { ref, onMounted } from 'vue';
import axios from 'axios';

import ResumeTable from '@/components/ResumeTable.vue'
import RankingTable from '@/components/RankingTable.vue'
import MapComponent from '@/components/MapComponent.vue';
import MapaCom from '@/components/MapaComp.vue';
import type { Ranking } from '@/models/ranking';
import type { Resume } from '@/models/resume';
import type { Punto } from '@/models/punto';

const search = ref('');

const resume : Array<Resume> = [
  {
    id: "Total",
    juego1:"00:00:00",
    juego2:"00:00:00",
    juego3:"00:00:00",
  },
  {
    id: "Porcentaje",
    juego1: "5%",
    juego2: "0%",
    juego3: "0%",
    
  },
  {
    id: "Progreso",    
    juego1: "0",  
    juego2: "0",
    juego3: "0"
  }
];

const ranking : Array<Ranking> = [
  {
    ficha:"445626",
    nombre:"Alex Rico",
    juego1:"5,324",
    tiempoJuego1:"5,324",
    juego2:"4,234",
    tiempoJuego2:"4,234",
    juego3:"3,234",
    tiempoJuego3:"3,234",
    total:"12,792",
    primerUso:"2021-08-01",
    ultimoUso:"2021-08-31",
    posicion:"1",
  },
  {
    ficha:"372415",
    nombre:"Efren Espinosa",
    juego1:"5,324",
    tiempoJuego1:"5,324",
    juego2:"4,234",
    tiempoJuego2:"4,234",
    juego3:"3,234",
    tiempoJuego3:"3,234",
    total:"12,792",
    primerUso:"2021-08-01",
    ultimoUso:"2021-08-31",
    posicion:"2",
  },
  {
    ficha:"246631",
    nombre:"Checo Leal",
    juego1:"5,324",
    tiempoJuego1:"5,324",
    juego2:"4,234",
    tiempoJuego2:"4,234",
    juego3:"3,234",
    tiempoJuego3:"3,234",
    total:"12,792",
    primerUso:"2021-08-01",
    ultimoUso:"2021-08-31",
    posicion:"3",    
  }
];

const puntos : Array<Punto> =
  [
    {
      "lat": 19.4326,
      "lng": -99.1332
    },
    {
      "lat": 20.6597,
      "lng": -103.3506
    },
    {
      "lat": 25.6866,
      "lng": -100.315
    },
    {
      "lat": 18.9629941, "lng": -98.2839639
    },
    { "lat": 19.4408169, "lng": -99.1752073 },
    {
      "lat": 19.4402817, "lng": -99.1766728
    }
  ];

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
  <v-icon color="primary" icon="numeric-2"/>  
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-row>
          <v-col>
            <v-card>
              <v-toolbar color="primary">
                <v-toolbar-title>Resumen General</v-toolbar-title>                
              </v-toolbar>             
              <v-card-text>
                <ResumeTable :resume="resume" />
              </v-card-text>
            </v-card>            
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-toolbar color="primary">
                <v-toolbar-title>Ranking Top 10</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details
                  variant="outlined"                  
                ></v-text-field>
              </v-toolbar>
              <v-card-text>
                <RankingTable :ranking="ranking" />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Ver más</v-btn>
              </v-card-actions>    
            </v-card>        
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <!-- <MapComponent :puntos="puntos" /> -->
        <v-card 
          color="secondary"
          variant="outlined"          
          >
          <v-sheet 
            class="pa-2"
            color="primary" 
          >
            <MapaCom :coordenadas="puntos" />
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>