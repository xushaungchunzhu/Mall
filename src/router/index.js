import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = ()=> import("../pages/home/home")
const category = () => import("../pages/category/category")
const cart = () => import("../pages/cart/cart")
const profile = () => import("../pages/profile/profile")

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/category",
      component: category
    },
    {
      path: "/cart",
      component: cart
    },
    {
      path: "/profile",
      component: profile
    }
  ],
  mode: 'history'
})
