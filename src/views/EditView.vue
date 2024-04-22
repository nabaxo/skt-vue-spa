<script setup lang="ts">
import { usePeopleListStore } from '@/stores/peopleList'
import type { Person } from '@/stores/peopleList'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const person = ref<Person>({
  firstName: '',
  lastName: '',
  email: '',
  id: ''
})

onMounted(() => {
  if (id.length > 0) {
    const p = usePeopleListStore().getPerson(id.toString())
    if (p !== undefined) {
      person.value = p
    }
  }
})

function submitPerson() {
  if (id.length > 0) {
    usePeopleListStore().editPerson(person.value)

    router.push('/')
  } else {
    usePeopleListStore().addPerson(person.value)

    router.push('/')
  }
}
</script>

<template>
  <main class="h-full relative bg-slate-50 rounded-xl dark:bg-slate-800/25">
    <form @submit="submitPerson">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  v-model="person.firstName"
                  required
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  v-model="person.lastName"
                  required
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  v-model="person.email"
                  required
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <RouterLink class="hover:bg-inherit" to="/">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
        </RouterLink>
        <button
          type="submit"
          value="Submit"
          class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </main>
</template>
