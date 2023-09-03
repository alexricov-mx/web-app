<script setup lang="ts">
import ResumeTable from '@/components/ResumeTable.vue'

const resume = [
  {
    total: "0",
    porcentaje: "0",
    progreso: "0",  
  },
  {
    total: "0",
    porcentaje: "0",
    progreso: "0",  
  },
  {
    total: "0",
    porcentaje: "0",
    progreso: "0",  
  }
]
</script>

<template>
  <main>
    <ResumeTable :resume="resume" />
  </main>
</template>
