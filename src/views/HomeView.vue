<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePeopleListStore } from '../stores/peopleList'

const peopleListStore = usePeopleListStore()
const { people } = storeToRefs(peopleListStore)
</script>

<template>
  <main class="h-full relative bg-slate-50 rounded-xl dark:bg-slate-800/25">
    <div class="shadow-sm my-8">
      <table class="table-auto border-2 w-full">
        <thead>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            First Name
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Last Name
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Email
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Edit
          </th>
          <th
            class="border-b dark:border-slate-600 font-medium p-4 pb-3 text-slate-400 dark:text-slate-200 text-left"
          >
            Delete?
          </th>
        </thead>
        <tbody class="bg-white dark:bg-slate-800">
          <tr v-for="person in people" :key="person.email">
            <td
              class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
            >
              {{ person.firstName }}
            </td>
            <td
              class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
            >
              {{ person.lastName }}
            </td>
            <td
              class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
            >
              {{ person.email }}
            </td>
            <td
              class="border-b border-slate-100 dark:border-slate-700 p-4 text-blue-300 dark:text-slate-400 text-3xl font-black hover:scale-150 w-0 hover:cursor-default text-center"
            >
              <RouterLink
                class="hover:bg-inherit"
                :to="{ name: 'edit', params: { id: person.id } }"
              >
                &#x270E;
              </RouterLink>
            </td>
            <td
              @click="usePeopleListStore().removePerson(person)"
              class="border-b border-slate-100 dark:border-slate-700 p-4 text-red-700 dark:text-slate-400 text-3xl font-black hover:scale-150 w-0 hover:cursor-default text-center"
            >
              &#xd7;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
