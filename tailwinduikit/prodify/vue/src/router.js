import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/ProdifyHome/index";
import AboutUs from "./pages/AboutUs/index";
import Pricing from "./pages/ProdifyPricing/index";
import Resources from "./pages/ProdifyResources/index";
import ResourcesInner from "./pages/ResourcesInner/index";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/AboutUs",
        name: "AboutUs",
        component: AboutUs,
        meta: {
            title: "About Us",
        },
    },
    {
        path: "/Pricing",
        name: "Pricing",
        component: Pricing,
        meta: {
            title: "Pricing",
        },
    },
    {
        path: "/Resources",
        name: "Resources",
        component: Resources,
        meta: {
            title: "Resources",
        },
    },
    {
        path: "/Resources_Inner",
        name: "ResourcesInner",
        component: ResourcesInner,
        meta: {
            title: "Resources Inner",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
