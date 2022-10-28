import Home from "@/Pages/Home"
import Cart from "@/Pages/Cart"
import Login from "@/Pages/Login"
import Register from "@/Pages/Register"
import Phone from "@/Pages/Phone"
import ProductView from "@/Pages/ProductView"
import NotFound from "@/Pages/NotFound"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/cart', component: Cart },
    { path: '/phone', component: Phone },
    { path: '/products/product-:productId', component: ProductView },
    { path: '*', component: NotFound, layout: null },
]

const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}