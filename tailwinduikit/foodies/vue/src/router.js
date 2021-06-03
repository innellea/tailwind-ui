import { createRouter, createWebHistory } from "vue-router"

import FoodiesHome from "./pages/home"
import FoodiesMenu from "./pages/menu"
import Contact from "./pages/contact"

const routes = [
    {
        path: "/",
        name: "FoodiesHome",
        component: FoodiesHome,
    },
    {
        path: "/FoodiesMenu",
        name: "FoodiesMenu",
        component: FoodiesMenu,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
