<template>
  <ChildComp
    message="Hello World!"
    :age="21"
    :isActive="false"
    :userInfo="userInfo"
    @send-event="handleReceiveEventFromChild"
  />
  <BaseInputV2 label="Username" v-model="username" placeholder="Vui lòng nhập username" />
  <BaseInputV2 label="Email" type="email" v-model="email" placeholder="Vui lòng nhập email" />
  <BaseInputV2
    label="Password"
    type="password"
    v-model="password"
    placeholder="Vui lòng nhập password"
  />
  <p>{{ username }}</p>
  <p>{{ email }}</p>
  <p>{{ password }}</p>
</template>

<script setup>
import BaseInputV2 from "../../components/BaseInputV2.vue"
import ChildComp from "./ChildComp.vue"
import { ref } from "vue"
// string, number, boolean, object, array
// data binding
const username = ref("")
const email = ref("")
const password = ref("")

const userInfo = ref({
  name: "Thái",
  age: 26,
  email: "thai@gmail.com",
})

const handleReceiveEventFromChild = () => {
  console.log("Đã nhận được emit từ ChildComponent")
}
</script>
