import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePeopleListStore = defineStore('people', () => {
  const people = ref<Person[]>([]);

  function addPerson(newPerson: Person) {
    people.value.push(newPerson);
  }

  return { people, increment: addPerson };
});

export interface Person {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
