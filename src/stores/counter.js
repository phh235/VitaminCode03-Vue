import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore("counter", () => {
  // state
  const count = ref(0) // khởi tạo ban đầu

  // actions
  const incrementCount = () => {
    count.value++
  }

  return { count, incrementCount }
})
