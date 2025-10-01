import { createRouter, createWebHistory } from "vue-router"
// import AuthLayout from "../layouts/AuthLayout.vue"
// import LoginPage from "../views/auth/LoginPage.vue"
// import RegisterPage from "../views/auth/RegisterPage.vue"
import MainLayout from "../layouts/MainLayout.vue"
import HomePage from "../views/content/HomePage.vue"
import AboutPage from "../views/content/AboutPage.vue"
import UserManagement from "../views/user/UserManagement.vue"
import UserDetail from "../views/user/UserDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/auth",
    //   redirect: "/auth/login", // tự động chuyển hướng
    //   name: "Auth",
    //   component: AuthLayout,
    //   children: [
    //     {
    //       path: "login",
    //       name: "Login",
    //       component: LoginPage,
    //     },
    //     {
    //       path: "register",
    //       name: "Register",
    //       component: RegisterPage,
    //     },
    //   ],
    // },
    {
      path: "/",
      name: "Main",
      component: MainLayout,
    },
    {
      path: "/home",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
    },
    {
      path: "/user-management",
      name: "User management",
      component: UserManagement,
    },
    {
      path: "/user-management/detail/:userId",
      name: "User detail",
      component: UserDetail,
    },
  ],
})

export default router

router.beforeEach(async (to) => {
  document.title = to.meta.title
})
