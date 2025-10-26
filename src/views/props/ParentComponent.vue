<template>
  <ChildComponent
    title="Hello World!"
    :age="10"
    :isActive="true"
    :user="userInfo"
    @send-event="handleReceiveEventFromChild"
  />
  <InputEmitData @update="handleUpdate" />
  <p>{{ name }}</p>

  <div class="mt-10 flex flex-col gap-2">
    <BaseInput label="Username" v-model="username" placeholder="Vui lòng nhập username" />
    <BaseInput label="Email" type="email" v-model="email" placeholder="Vui lòng nhập email" />
    <BaseInput
      label="Password"
      type="password"
      v-model="password"
      placeholder="Vui lòng nhập password"
    />
    <p>{{ username }}</p>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
  </div>
</template>

<script setup>
import BaseInput from "../../components/BaseInput.vue"
import InputEmitData from "../../components/InputEmitData.vue"
import ChildComponent from "./ChildComponent.vue"
import { ref } from "vue"

// props (properties) - cách truyền dữ liệu từ comp cha xuống comp con
// props - read-only ~ comp con ko thể thay đổi trực tiếp giá trị của props được truyền xuống từ comp cha
// one-way binding - truyền dữ liệu 1 chiều / two-way binding - truyền dữ liệu 2 chiều
const userInfo = ref({ name: "Hoàng", age: 21 })

// emit - comp con gửi sự kiện (event) lên comp cha
// đây là cách duy nhất để comp con "truyền" dữ liệu ngược lên comp cha
// emit với event
const handleReceiveEventFromChild = () => {
  console.log("Event received from child")
}

// emit với dữ liệu
// InputComp
const name = ref("")
const handleUpdate = (inputValue) => {
  name.value = inputValue
}

// BaseInput
const username = ref("")
const email = ref("")
const password = ref("")

console.log(username.value)
console.log(email.value)
console.log(password.value)

// provide / inject - cho phép comp cha (hoặc comp tổ tiên, cố, nội ngoại) bên dưới nó mà không cần truyền qua từng cấp như props
// tránh việc bị "props drilling" - truyền props qua nhiều cấp comp
</script>
