<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app class="bg-grey-lighten-4">
    <v-app-bar app color="primary">
      <v-toolbar-title>App IncluPemex</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">General</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>       
</v-app>
</template>

<style scoped>
</style>
