<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { usePeopleListStore } from './stores/peopleList'

onMounted(() => {
  usePeopleListStore().populateList()
  console.log(usePeopleListStore().people)
})
</script>

<template>
  <header>
    <nav class="bg-gray-800">
      <RouterLink class="text-blue-600" to="/">Home</RouterLink>
      <RouterLink to="/edit">Add New</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
