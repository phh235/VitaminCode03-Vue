import { defineStore } from "pinia"
import { ref } from "vue"
import {
  deleteStudent,
  getAllStudents,
  getStudentByStudentCode,
  saveStudent,
  updateStudent,
} from "../api/students"

export const useStudentStore = defineStore("student", () => {
  const students = ref([])
  const student = ref({})

  const getStudents = async () => {
    const response = await getAllStudents()
    students.value = response.data
  }

  const getStudentInfo = async (studentCode) => {
    const response = await getStudentByStudentCode(studentCode)
    student.value = response.data
  }

  const saveStudentInfo = async (student) => {
    const response = await saveStudent(student)
    return response
  }

  const updateStudentInfo = async (id, student) => {
    const response = await updateStudent(id, student)
    return response
  }

  const deleteStudentById = async (studentId) => {
    const response = await deleteStudent(studentId)
    return response
  }

  return {
    students,
    student,
    getStudents,
    getStudentInfo,
    saveStudentInfo,
    updateStudentInfo,
    deleteStudentById,
  }
})
