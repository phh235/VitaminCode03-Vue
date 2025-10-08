<template>
  <!-- <h1>Computed</h1>
  <div class="text-blue-500">
    <p>{{ fullName }}</p>
  </div>

  <h1 class="mt-10">Bình thường</h1>
  <div class="text-red-400">
    <p>{{ consoleLogWhenChangeName(firstName + " " + lastName) }}</p>
  </div>

  <button @click="handleChangeName" class="bg-sky-500 text-white px-4 py-1 rounded cursor-pointer">
    Đổi tên
  </button> -->
  <h1>Optional chaining</h1>
</template>

<script setup>
// import { ref, computed } from "vue"

// const firstName = ref("Phan")
// const lastName = ref("Hoàng")

// // tính toán lại nhiều lần, xuất hiện nhiều lần => dùng computed (cache)
// // tính toán fullName 1 lần, chỉ tính lại khi cần
// // nếu ko ko dùng computed, mỗi lần render đều phải tính lại (component sẽ chạy lại)
// const fullName = computed(() => {
//   console.log("computed chạy lại")
//   return `${firstName.value} ${lastName.value}`
// })

// const consoleLogWhenChangeName = (value) => {
//   console.log("firstName và lastName đã được render:" + value)
//   return value
// }

// const handleChangeName = () => {
//   firstName.value = "Wang Quốc"
//   lastName.value = "Thái"
//   console.log("Đổi tên thành công")
// }

const userInfo = {
  name: "Hoàng",
  email: "hhh@gmail.com",
  // address: {
  //   city: "Bình Dương",
  // },
}

// ?? - gán giá trị mặc định nếu value là undefined/null
console.log(userInfo.address?.city ?? "Không xác định")
</script>
