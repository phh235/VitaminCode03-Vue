<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
    <div
      v-for="user in users"
      :key="user.id"
      class="border border-gray-300 rounded-2xl p-3 shadow"
    >
      <p>{{ user.name }}</p>
      <p>{{ user.username }}</p>
      <p class="line-clamp-1">{{ user.phone }}</p>
      <p class="truncate">{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"

const users = ref([]) // nhận vào 1 mảng
// onMounted -> được gọi khi component được mount.
onMounted(async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  users.value = response.data
  console.log("User value", users.value)
})
</script>
