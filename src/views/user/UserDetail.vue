<template>
  <button
    class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
    @click="handleBackToListUser"
  >
    Back to list user
  </button>
  <!-- <router-link to="/user-management" class="px-3 py-2 bg-sky-500 text-white">
    Back to list user
  </router-link> -->

  <h1>User detail</h1>
  <p>User ID: {{ route.params.id }}</p>
  <!-- lấy được ID rồi thì truyền ID vào API để GET -->
  <p>Name: {{ user.name }}</p>
  <p>Username: {{ user.email }}</p>
  <p>Address: {{ user.address?.street }}</p>
  <p>Company: {{ user.company?.name }}</p>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"

const route = useRoute()
const router = useRouter()
const user = ref({}) // object

const handleBackToListUser = () => {
  router.push("/user-management")
}

onMounted(async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  user.value = res.data
})
</script>
