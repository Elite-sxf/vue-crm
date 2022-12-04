import main from "../layouts/index.vue"
export default [
    {
        path: "/",
        name: 'home',
        componet: (resolve) => require(["@/views/home/index.vue"], resolve),
        component: main,
        redirect: "/home",
        meta: {title: "首页"},
        children: [
            {
                path: "/home",
                name: 'home',
                component: ()=>import("@/views/home/index.vue"),
                meta: {title: "首页"}
            }
        ]
    },
    {
        path: "/login",
        name: 'login',
        component: ()=>import("@/views/login/index.vue"),
        meta: {title: "denglu"}
    },
]