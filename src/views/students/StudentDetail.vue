<template>
  <div class="py-2">
    <button
      class="p-2 rounded shadow-xs flex items-center gap-2 text-gray-600 cursor-pointer border border-gray-600 hover:bg-gray-600/10 hover:border-gray-600"
      @click="handleBack"
    >
      <ChevronLeft class="size-4" /> Back to list
    </button>
  </div>
  <h1>{{ route.params.studentCode ? "Edit student" : "Add new student" }}</h1>
  <div class="flex gap-2 w-full">
    <BaseInput v-model="studentStore.student.studentCode" label="Student Code" class="flex-1" />
    <BaseInput v-model="studentStore.student.fullName" label="Full name" class="flex-1" />
    <BaseInput v-model="studentStore.student.email" label="Email" class="flex-1" />
  </div>
  <label for="countries" class="block mb-2 font-medium">Select an option</label>
  <select
    id="countries"
    class="bg-gray-50 border border-[#808080] rounded-md block w-full p-2"
    v-model="studentStore.student.gender"
  >
    <option selected>Choose a gender</option>
    <option v-for="g in gender" :value="g.value">{{ g.label }}</option>
  </select>
  <div class="flex gap-2 w-full">
    <BaseInput
      type="date"
      v-model="studentStore.student.dateOfBirth"
      label="Birthday"
      class="flex-1"
    />
    <BaseInput v-model="studentStore.student.phoneNumber" label="Phone number" class="flex-1" />
  </div>
  <button
    v-if="!route.params.studentCode"
    class="px-4 py-2 rounded-full bg-[#41ba84] text-white cursor-pointer hover:bg-[#41ba84]/80 duration-200 shadow-sm mt-3"
    @click="handleSaveStudent"
  >
    Save student
  </button>
  <button
    v-else
    class="px-4 py-2 rounded-full bg-[#41ba84] text-white cursor-pointer hover:bg-[#41ba84]/80 duration-200 shadow-sm mt-3"
    @click="handleUpdateStudent"
  >
    Update student
  </button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { useStudentStore } from "../../stores/studentStore"
import { onMounted, computed, onUnmounted } from "vue"
import { ChevronLeft } from "lucide-vue-next"
import BaseInput from "../../components/BaseInput.vue"
import dayjs from "dayjs"

const studentStore = useStudentStore()
const route = useRoute()
const router = useRouter()
const studentCode = route.params.studentCode
const gender = [
  {
    label: "Male",
    value: true,
  },
  {
    label: "Female",
    value: false,
  },
]

const handleBack = () => {
  router.push("/student-management")
}

const handleSaveStudent = async () => {
  const payload = {
    ...studentStore.student,
    dateOfBirth: dayjs(studentStore.student.dateOfBirth).format("YYYY-MM-DD"),
  }
  try {
    const res = await studentStore.saveStudentInfo(payload)
    if (res) {
      alert("Create new student successfully")
      handleBack()
    }
  } catch (error) {
    console.log(error)
  }
}

const handleUpdateStudent = async () => {
  const payload = {
    ...studentStore.student,
    dateOfBirth: studentStore.student.dateOfBirth,
  }
  try {
    const res = await studentStore.updateStudentInfo(studentStore.student.id, payload)
    if (res) {
      alert("Update student successfully")
      handleBack()
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  if (studentCode) {
    studentStore.getStudentInfo(studentCode)
  }
})

onUnmounted(() => {
  studentStore.student = {}
})
</script>
