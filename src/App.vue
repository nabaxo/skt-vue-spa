<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { usePeopleListStore } from './stores/peopleList'
import { onMounted } from 'vue'

onMounted(() => {
  usePeopleListStore().populateList()
  console.log(usePeopleListStore().people)
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="bg-gray-800">
        <RouterLink class="text-blue-600" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
