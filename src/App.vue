<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader    from "@/views/PageHeader/index.vue";
import HomeView from "@/views/HomeView/index.vue";
</script>

<template>
  <header>
    <page-header/>
  </header>
  <main>
    <home-view/>
  </main>

</template>

<style scoped>

</style>
