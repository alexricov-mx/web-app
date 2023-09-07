<script setup lang="ts">
import type { PropType } from 'vue/dist/vue.js';
import type { Ranking } from '@/models/ranking';

const props = defineProps({
  ranking: {
    type: Array as PropType<Ranking[]>,
    required: true,
  },
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>Ficha</v-col>
      <v-col>Nombre</v-col>
      <v-col>Juego 1</v-col>
      <v-col v-show="false">Tiempo Juego 1</v-col>
      <v-col>Juego 2</v-col>
      <v-col v-show="false">Tiempo Juego 2</v-col>
      <v-col>Juego 3</v-col>
      <v-col v-show="false">Tiempo Juego 3</v-col>
      <v-col>Juego Total</v-col>
      <v-col v-show="false">Primer uso</v-col>
      <v-col v-show="false">Ultimo uso</v-col>
      <v-col>Posición</v-col>
    </v-row>    
    <v-row v-for="item in ranking" :key="item.posicion">
      <v-col> {{ item.ficha }} </v-col>
      <v-col> {{ item.nombre }}</v-col>
      <v-col> {{ item.juego1 }}</v-col>
      <v-col v-show="false"> {{ item.tiempoJuego1 }}</v-col>
      <v-col> {{ item.juego2 }}</v-col>
      <v-col v-show="false"> {{ item.tiempoJuego2 }}</v-col>
      <v-col> {{ item.juego3 }}</v-col>
      <v-col v-show="false"> {{ item.tiempoJuego3 }}</v-col>
      <v-col> {{ item.total }}</v-col>
      <v-col v-show="false"> {{ item.primerUso }}</v-col>
      <v-col v-show="false"> {{ item.ultimoUso }}</v-col>
      <v-col> {{ item.posicion }}</v-col>
    </v-row>  
  </v-container>  
</template>
