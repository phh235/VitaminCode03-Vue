<template>
  <p>Lifecycle Hooks</p>
  <p>{{ count }}</p>
  <button @click="handleIncrement">Tăng</button>
</template>

<script setup>
import { ref, onMounted, onUpdated, onBeforeUpdate, onUnmounted } from "vue"
const count = ref(0)
// onMounted -> được gọi khi component được mount.
onMounted(() => {
  console.log("Đã gọi hàm onMounted")
  // call api, xử lý logic...
})
const timer = setInterval(() => {
  console.log("Still running...", 1000)
}, 1000)
onUnmounted(() => {
  clearInterval(timer)
})
// vào youtube -> thấy render UI trước -> xong mới hiển thị thumbnail, title, views (call API)

const handleIncrement = () => {
  count.value++
}
onBeforeUpdate(() => {
  console.log("Count sắp được +1")
})
// được gọi mỗi khi giao diện, component được cập nhật
onUpdated(() => {
  console.log("Count đã được update thành", count.value)
})

// case study
// khi vào facebook -> sẽ bấm qua trang khác (có thể đang thực hiện call api bài viết, xử lý tracker, ads for feeds) -> trang cũ sẽ được unmount
// bấm từ trang Feeds -> Watch Video (ads for video) -> thực hiện unmounted
// hủy call api (force - bắt buộc) -> api call lâu (hủy call api - dùng abort controller web api)
</script>
