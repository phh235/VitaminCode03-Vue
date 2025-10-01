<template>
  <button class="px-3 py-2 bg-sky-500 text-white" @click="handleBackToListUser">
    Back to list user
  </button>
  <!-- <router-link to="/user-management" class="px-3 py-2 bg-sky-500 text-white">
    Back to list user
  </router-link> -->

  <h1>User detail</h1>
  <p>User ID: {{ route.params.userId }}</p>
  <!-- lấy được ID rồi thì truyền ID vào API để GET -->
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"

const route = useRoute()
const router = useRouter()

const handleBackToListUser = () => {
  router.push("/user-management")
}
</script>
