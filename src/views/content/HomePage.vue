<template>
  <p v-for="u in userArray" :key="u.id">{{ u.username }} - {{ u.age }}</p>
  <p>{{ counterStore.count }}</p>
  <button @click="counterStore.incrementCount">Tăng</button>
</template>

<script setup>
import { ref } from "vue"
import { useCounterStore } from "../../stores/counter"

const userArray = ref([
  {
    id: 1,
    username: "Tuệ",
    age: 20,
  },
  {
    id: 2,
    username: "Danh",
    age: 20,
  },
  {
    id: 3,
    username: "Thái",
    age: 20,
  },
  {
    id: 4,
    username: "Đạt",
    age: 20,
  },
])

const counterStore = useCounterStore()
</script>
