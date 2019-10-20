import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("views/home/Home")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile.vue")
const Category = () => import("views/category/Category.vue")
const Detail = () => import('views/details/Details')

const router = new VueRouter({
    routes: [{
            path: "",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/category",
            name: "category",
            component: Category
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        },
        {
            path: '/details',
            name: 'details',
            component: Detail
        }
    ],
    mode: 'history'
})

export default router