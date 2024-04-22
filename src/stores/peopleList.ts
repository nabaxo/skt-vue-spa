import { ref } from 'vue';
import { defineStore } from 'pinia';
import { faker } from '@faker-js/faker';

export const usePeopleListStore = defineStore('people', () => {
  const people = ref<Person[]>([]);

  function addPerson(newPerson: Person) {
    people.value.push({ ...newPerson, id: faker.string.uuid() });
  }

  function removePerson(p: Person) {
    people.value.splice(people.value.indexOf(p), 1);
  }

  function editPerson(p: Person) {
    const index = people.value.findIndex(person => p.id === person.id);
    people.value.splice(index, 1, p);
  }

  function getPerson(id: string) {
    return people.value.find(p => p.id === id);
  }

  function populateList() {
    people.value.splice(0, people.value.length);

    for (let index = 0; index < 10; index++) {
      const person: Person = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        id: faker.string.uuid(),
      };

      addPerson(person);
    }

  }

  return { people, addPerson, removePerson, editPerson, getPerson, populateList };
});

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}
