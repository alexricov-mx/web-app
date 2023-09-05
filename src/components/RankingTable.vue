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
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Ficha
        </th>
        <th class="text-left">
          Nombre
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
        <th class="text-left">
          Total
        </th>
        <th class="text-left">
          Posición
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in ranking" :key="ranking.id">
        <tr>
          <td class="text-left">
            {{ item.ficha}}
          </td>
          <td class="text-left">
            {{ item.nombre }}
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
          <td class="text-left">
            {{ item.total }}
          </td>
          <td class="text-left">
            {{ item.posicion }}
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>
