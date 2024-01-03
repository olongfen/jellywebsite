<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageHeader    from "@/views/HomeView/components/PageHeader.vue";
</script>

<template>
  <header>
    <page-header/>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
