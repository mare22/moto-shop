import { createRouter, createWebHistory} from 'vue-router'
import { auth } from '../firebaseInit'
import Products from '../pages/Products.vue'
import Home from '../pages/Home.vue'
import SingleProduct from '../pages/SingleProduct.vue'
import AboutUs from '../pages/AboutUs.vue'
import NewsPage from '../pages/NewsPage.vue'
import Chart from '../pages/Chart.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'
import Comments from '../components/Comments.vue'
import Admin from '../pages/Admin.vue'
import Register from '../components/Register.vue'
const routes = [
    {
        path: '/products/:category',
        component: Products,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/',
        component: Home,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/SingleProduct/:id',
        component: SingleProduct,
        
    },
    {
        path: '/AboutUs',
        component: AboutUs,
       
    },
    {
        path: '/NewsPage',
        name: 'NewsPage',
        component: NewsPage,
        
    },
    {
        path: '/chart',
        component: Chart,
        
    },
    {
        path: '/Contact',
        component: Contact,
       
    },
    {
        path: '/login',
        component: Login,
        
    },
    {
        path: '/comments',
        component: Comments
    },
     {
        path: '/admin',
        component: Admin
     },
     {
        path: '/register',
        component: Register
     }
   
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next) => { //to-gde ce nas voditi, from-odakle, next-gde hocemo sledece da idemo
    if (to.path === '/login' && auth.currentUser) {
        next('/')
        return;
    } //ako smo na putanji u login stranici i takodje ako je trenutni user tu, zelimo redirect to home

    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return;
    } // 
    next()
}) //proveravamo da li se slaze da smo ulogovani i da nismo ulogovani predji na sledece
    //ako se ne poklapa ni sa jednim od uslova prelazimo dalje

export default router