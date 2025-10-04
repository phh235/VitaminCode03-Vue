<template>
  <!-- <h1 class="text-2xl">
    {{ username }}
  </h1> -->
  <!-- <h1 class="text-2xl">
    {{ count }}
  </h1>
  <button
    class="bg-[#333] text-white py-2 px-4 rounded cursor-pointer hover:bg-[#333]/90"
    @click="handleIncrement"
  >
    Tăng 1 giá trị
  </button>
  <button
    class="bg-[#333] text-white py-2 px-4 rounded cursor-pointer hover:bg-[#333]/90"
    @click="handleDecrement"
  >
    Giảm 1 giá trị
  </button>
  <div class="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      :class="['size-10', liked ? 'text-red-500' : 'text-gray-500/30']"
      @click="handleLike"
    >
      <path
        ill-rule="evenodd"
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-1.522-.96 25.18 25.18 0 01-3.697-3.17C4.57 14.052 3 11.75 3 9.25 3 6.322 5.322 4 8.25 4c1.64 0 3.204.806 4.207 2.09C13.546 4.806 15.11 4 16.75 4 19.678 4 22 6.322 22 9.25c0 2.5-1.57 4.802-3.397 6.515a25.18 25.18 0 01-3.697 3.17 15.247 15.247 0 01-1.522.96l-.022.012-.007.003a.75.75 0 01-.608 0z"
        clip-rule="evenodd"
      />
    </svg>
    <p>{{ likes }}</p>
  </div> -->
  <!-- <div>
    <p>{{ isUpdated }}</p>
    <button
      class="bg-[#333] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#333]/90"
      @click="handleUpdate"
    >
      Cập nhật
    </button>
  </div>
  <div class="mt-10">
    <p>Tên: {{ userInfo.username }}</p>
    <p>Email: {{ userInfo.email }}</p>
    <p>Giới tính: {{ userInfo.gender ? "Nữ" : "Nam" }}</p>
    <p>Tuổi: {{ userInfo.age }}</p>
    <button
      class="bg-[#333] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#333]/90"
      @click="handleUpdateUserInfo"
    >
      Cập nhật thông tin người dùng
    </button>
  </div>
  <input
    type="text"
    class="px-2 py-1 h-10 border border-[#d9d9d9] rounded mt-10"
    v-model="inputSearch"
  />
  {{ inputSearch }}

  <div class="mt-10">
    <p v-if="isShow">Đang hiển thị</p>
    <p v-else>Không hiển thị</p>
  </div> -->
  <p v-for="u in userArray" :key="u.id">{{ u.username }} - {{ u.age }}</p>
</template>

<script setup>
import { ref } from "vue"
// ref | reactive | directives
//-------------------------
// ref - sử dụng để tạo các giá trị phản ứng (reactive) - những giá trị này tự động cập nhật khi giao diện thay đổi
//  ref (string, number, boolean, [], object)
// const username = ref("Danh")
// muốn dùng ref ở trong script thì bắt thuộc phải .value
// const count = ref(0) // giá trị phản ứng
// const likes = ref(99)
// const liked = ref(false)

// const handleLike = () => {
//   liked.value = !liked.value
//   if (liked.value) {
//     likes.value++
//   } else {
//     likes.value--
//   }
// }

// const handleIncrement = () => {
//   count.value++ // lấy value hoặc cập nhật
// }
// const handleDecrement = () => {
//   count.value--
// }

// reactive - được sử dụng để tạo đối tượng hoặc mảng phản ứng
// [...] - tất cả value trong mảng đều là giá trị phản ứng
// const isUpdated = ref("Chưa cập nhật")
// const handleUpdate = () => {
//   isUpdated.value = "Đã cập nhật"
// }

// const userInfo = reactive({
//   username: "Hoàng",
//   email: "hoangaatrox23504@gmail.com",
//   gender: false, // false: Nam, true: Nữ
//   age: 21,
// })
// const handleUpdateUserInfo = () => {
//   userInfo.username = "Thái"
//   userInfo.age++
// }

// v-model - 1 trong những vue directives cơ bản
// v-if v-else v-for v-show v-slot
// v-model - đồng bộ theo value đang được ánh xạ
// const inputSearch = ref("")

// v-if với v-show
// const isShow = ref(false)

// reactive - khai báo thông tin mà object đó muốn nhận

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

// primitive - ref
// object - array - reactive (ref***)

// call api để lấy dữ liệu

// performance với big object
// lib chart, editor (shallowRef/shallowReactive)
</script>
