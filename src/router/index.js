import { createRouter, createWebHistory } from "vue-router"
// import AuthLayout from "../layouts/AuthLayout.vue"
// import LoginPage from "../views/auth/LoginPage.vue"
// import RegisterPage from "../views/auth/RegisterPage.vue"
import MainLayout from "../layouts/MainLayout.vue"
import HomePage from "../views/content/HomePage.vue"
import AboutPage from "../views/content/AboutPage.vue"
import UserManagement from "../views/user/UserManagement.vue"
import UserDetail from "../views/user/UserDetail.vue"
import { Info, Home, UserRound, FileText } from "lucide-vue-next"
import LifecycleHooks from "../views/content/LifecycleHooks.vue"
import { Gauge } from "lucide-vue-next"
import PostPage from "../views/content/PostPage.vue"
import ParentComponent from "../views/props/ParentComponent.vue"
import { ArrowBigDown } from "lucide-vue-next"

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
      meta: {
        icon: Home,
        isShow: true,
      },
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
      meta: {
        icon: Info,
        isShow: true,
      },
    },
    {
      path: "/user-management",
      name: "User management",
      component: UserManagement,
      meta: {
        icon: UserRound,
        isShow: true,
      },
    },
    {
      path: "/user-management/detail/:id",
      name: "User detail",
      component: UserDetail,
      meta: {
        isShow: false,
      },
    },
    {
      path: "/lifecycle-hooks",
      name: "Lifecycle hooks",
      component: LifecycleHooks,
      meta: {
        icon: Gauge,
        isShow: true,
      },
    },
    {
      path: "/posts",
      name: "Posts",
      component: PostPage,
      meta: {
        icon: FileText,
        isShow: true,
      },
    },
    {
      path: "/props",
      name: "Props",
      component: ParentComponent,
      meta: {
        icon: ArrowBigDown,
        isShow: true,
      },
    },
  ],
})

export default router

router.beforeEach(async (to) => {
  document.title = to.meta.title
})
