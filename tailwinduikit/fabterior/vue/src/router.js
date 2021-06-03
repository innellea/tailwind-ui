import { createRouter, createWebHistory } from "vue-router";

import FabHome from "./pages/fab home/index";

const routes = [
    {
        path: "/",
        name: "FabHome",
        component: FabHome,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
