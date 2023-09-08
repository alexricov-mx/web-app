<script setup lang="ts">
import type { PropType } from 'vue/dist/vue.js';
import type { Resume } from '@/models/resume';

const props = defineProps({
  resume: {
    type: Array as PropType<Resume[]>,
    required: true,
  },
});
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Resumen
        </th>
        <th class="text-left">
          Juego 1
        </th>
        <th class="text-left">
          Juego 2
        </th>
        <th class="text-left">
          Juego 3
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in resume" :key="resume.id">
        <tr>
          <td class="text-left">
            {{ item.id }}
          </td>
          <td class="text-left">
            {{ item.juego1 }} 
          </td>
          <td class="text-left">
            {{ item.juego2 }} 
          </td>
          <td class="text-left">
            {{ item.juego3 }} 
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>
