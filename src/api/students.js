import { apiService } from "./apiService"

export const getAllStudents = async () => {
  const response = await apiService.get("students")
  return response
}

export const getStudentByStudentCode = async (studentCode) => {
  const response = await apiService.get(`students/${studentCode}`)
  return response
}

export const saveStudent = async (student) => {
  const response = await apiService.post("students", student)
  return response
}

export const deleteStudent = async (studentId) => {
  const response = await apiService.delete(`students?id=${studentId}`)
  return response
}
