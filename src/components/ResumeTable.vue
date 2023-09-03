<script setup lang="ts">
const props = defineProps({
  resume: {
    type: Array as PropType<Resume[]>,
    required: true,
  },
});
</script>

<template>
  <v-table theme="dark">
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
            Total
          </td>
          <td class="text-left">
            {{ item.total }}
          </td>
          <td class="text-left">
            {{ item.porcentaje }}
          </td>
          <td class="text-left">
            {{ item.progreso }}
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>
