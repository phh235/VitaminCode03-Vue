<template>
  <div class="py-2">
    <button
      class="p-2 rounded shadow-xs flex items-center gap-2 text-green-600 cursor-pointer border border-green-600 hover:bg-green-600/10 hover:border-green-600"
      @click="router.push('/student-management/create')"
    >
      <PlusIcon class="size-4" /> Add new
    </button>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Student Code</th>
          <th scope="col" class="px-6 py-3">Full name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Birthday</th>
          <th scope="col" class="px-6 py-3">Gender</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white even:bg-gray-50 border-b border-gray-200"
          v-for="student in studentStore.students"
        >
          <td class="px-4 py-2">{{ student.studentCode }}</td>
          <td class="px-4 py-2">{{ student.fullName }}</td>
          <td class="px-4 py-2">{{ student.email }}</td>
          <td class="px-4 py-2">{{ dayjs(student.dateOfBirth).format("DD/MM/YYYY") }}</td>
          <td class="px-4 py-2">{{ student.gender ? "Nam" : "Nữ" }}</td>
          <td class="px-4 py-2 flex items-center gap-2">
            <button
              class="p-2 rounded shadow-xs text-blue-500 cursor-pointer border border-blue-500 hover:bg-blue-500/10 hover:border-blue-500"
              @click="router.push(`/student-management/detail/${student.studentCode}`)"
            >
              <SquarePen class="size-4" />
            </button>
            <button
              class="p-2 rounded shadow-xs text-red-500 cursor-pointer border border-red-500 hover:bg-red-500/10 hover:border-red-500"
              @click="handleDeleteStudent(student.id)"
            >
              <Trash class="size-4" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import dayjs from "dayjs"
import { useStudentStore } from "../../stores/studentStore"
import { onMounted } from "vue"
import { Trash } from "lucide-vue-next"
import { SquarePen } from "lucide-vue-next"
import { useRouter } from "vue-router"
import { PlusIcon } from "lucide-vue-next"

const studentStore = useStudentStore()
const router = useRouter()

onMounted(() => {
  studentStore.getStudents()
})

const handleDeleteStudent = async (id) => {
  try {
    const res = await studentStore.deleteStudentById(id)
    if (res) {
      studentStore.students = studentStore.students.filter((s) => s.id !== id)
      alert("Delete student successfully")
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
