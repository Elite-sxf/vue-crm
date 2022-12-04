import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";



Vue.use(VueRouter)
const router = new VueRouter({
    // mode: "hash",
    routes
})
router.beforeEach((to,from,next)=> {
    
    const userDatas = sessionStorage.getItem("userDatas") || {};
    if(to.path === "/home" && !userDatas.name) {
        next("/login")
    }else {
        next()
    }
})

export default router