<template>
  <button
    class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
    @click="handleBackToListUser"
  >
    Back to list user
  </button>

  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Username</label>
      <input
        type="text"
        class="border border-[#f5f5f5] px-2 py-1 rounded"
        v-model="userStore.user.username"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Role</label>
      <input
        type="text"
        class="border border-[#f5f5f5] px-2 py-1 rounded"
        v-model="userStore.user.role"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Password</label>
      <input
        type="password"
        class="border border-[#f5f5f5] px-2 py-1 rounded"
        v-model="userStore.user.password"
      />
    </div>
  </div>
  <button
    v-if="!username"
    class="px-4 py-2 rounded-full bg-[#41ba84] text-white cursor-pointer hover:bg-[#41ba84]/80 duration-200 shadow-sm mt-3"
    @click="handleCreateUser"
  >
    Create user
  </button>
  <button
    v-else
    class="px-4 py-2 rounded-full bg-[#41ba84] text-white cursor-pointer hover:bg-[#41ba84]/80 duration-200 shadow-sm mt-3"
    @click="handleSaveUser"
  >
    Save user
  </button>
</template>

<script setup>
import { onMounted, toRaw } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useUserStore } from "../../stores/userStore"

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const username = route.params.username

const handleBackToListUser = () => {
  router.push("/user-management")
}

const handleCreateUser = async () => {
  const payload = [toRaw(userStore.user)]
  try {
    await userStore.createNewUser(payload)
    alert("Lưu thành công")
  } catch (e) {
    console.log(e)
  }
}

const handleSaveUser = () => {
  console.log(userStore.user)
}

onMounted(() => {
  if (username) {
    userStore.getUserInfo(username)
  } else {
    userStore.user.username = ""
    userStore.user.role = ""
  }
})
</script>
