import { createRouter, createWebHistory } from "vue-router"

import Radian from "./pages/radian home"
import AboutUs from "./pages/radian about us"
import Projects from "./pages/radian projects"
import Clients from "./pages/radian clients"
import Team from "./pages/radian team"
import Contacts from "./pages/radian contacts"

const routes = [
    {
        path: "/",
        name: "Radian",
        component: Radian,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/AboutUs",
        name: "AboutUs",
        component: AboutUs,
        meta: {
            title: "Work",
        },
    },
    {
        path: "/Projects",
        name: "Projects",
        component: Projects,
        meta: {
            title: "Projects",
        },
    },
    {
        path: "/Clients",
        name: "Clients",
        component: Clients,
        meta: {
            title: "Testimonials",
        },
    },
    {
        path: "/Team",
        name: "Team",
        component: Team,
        meta: {
            title: "Team",
        },
    },
    {
        path: "/Contacts",
        name: "Contacts",
        component: Contacts,
        meta: {
            title: "Contact",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
