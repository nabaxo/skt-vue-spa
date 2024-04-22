<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { usePeopleListStore } from './stores/peopleList'

const formTitle = ref('Add New')

onMounted(() => {
  usePeopleListStore().populateList()
})

const route = useRoute()
route

watch(
  () => route.params.id,
  (newId) => {
    if (newId && newId.length) {
      formTitle.value = 'Edit'
    } else {
      formTitle.value = 'Add New'
    }
  }
)
</script>

<template>
  <header>
    <nav class="bg-gray-800 pl-4 py-3 text-xl">
      <RouterLink
        class="px-4 pt-0 pb-1 rounded-md"
        active-class="bg-green-400 text-slate-900 hover:bg-green-400"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        :class="[{ 'bg-green-400 text-slate-900 hover:bg-green-400': route.name === 'edit' }]"
        class="px-4 pt-0 pb-1 rounded-md"
        to="/edit"
        >{{ formTitle }}</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
