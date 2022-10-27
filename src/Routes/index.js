import Home from "@/Pages/Home"
import Cart from "@/Pages/Cart"
import Login from "@/Pages/Login"
import Register from "@/Pages/Register"
import NotFound from "@/Pages/NotFound"
import ProductView from "@/Pages/ProductView"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/cart', component: Cart },
    { path: '*', component: NotFound, layout: null },
    { path: '/products/product-:productId', component: ProductView }
]

const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}