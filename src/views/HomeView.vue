<script setup lang="ts">
import ResumeTable from '@/components/ResumeTable.vue'
import RankingTable from '@/components/RankingTable.vue'

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
</script>

<template>
  <h1>Home</h1>
  <div>
    <ResumeTable :resume="resume" />
  </div>    
  <br><br>
  <div>
    <RankingTable :ranking="ranking" />
  </div>
</template>
