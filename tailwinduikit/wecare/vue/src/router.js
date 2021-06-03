import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/index";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "WeCare",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
