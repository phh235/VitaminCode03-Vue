<template>
  <div>
    <p class="text-xl font-semibold">Watch</p>
    <p class="text-green-500 text-2xl">{{ user.age }}</p>
    <button
      class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
      @click="handleChangeAge"
    >
      Tăng tuổi
    </button>
  </div>
  <div class="mt-10">
    <p class="text-xl font-semibold">WatchEffect</p>
    <p class="text-2xl font-bold text-sky-500">Count2: {{ count2 }}</p>
    <button
      class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
      @click="count1++"
    >
      Tăng count1 lên 1 đơn vị
    </button>
  </div>
  <div class="mt-10">
    <p class="text-xl font-semibold">gọi api khi data thay đổi</p>
    <button
      class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
      @click="userId++"
    >
      Tăng userId lên 1 đơn vị
    </button>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, reactive, watchEffect, watch } from "vue"
// giá trị phản ứng - reactive

const user = reactive({
  name: "Hoàng",
  age: 20,
})

const handleChangeAge = () => {
  user.age = 24
}

// ví dụ dùng cho watchEffect
const count1 = ref(0)
const count2 = ref(0)

// watch theo dõi thay đổi của `user.age`
// watch(() => user.age, (newAge, oldAge) => {
//   // func chúc mừng sinh nhật + bắn pháo hoa
// })
// tới ngày sinh nhật -> vô 1 trang web hay dùng
// hiện thông báo chúc mừng sinh nhật

// watchEffect - tự động chạy khi bất kỳ dữ liệu nào mà nó đang theo dõi có thay đổi
watchEffect(() => {
  count2.value = count1.value * 2
})

// gọi dữ liệu khi data thay đổi
const userId = ref("")
const userInfo = ref(null)

// watchEffect(async () => {
//   const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
//   userInfo.value = res.data
//   console.log(userInfo.value)
// })

watch(
  userId,
  async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
    userInfo.value = res.data
    console.log(userInfo.value)
  },
)

// watch - theo dõi 1 hoặc nhiều thằng cố định
// đếm số lần thay đổi của count
// count = 0
// changes = 0

// watchEffect - auto
// in ra console log tổng của a + b mỗi khi thay đổi
// a = 1  |  b = 2
// hàm để a++ | b++
</script>
