import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/home/index";
import SearchResults from "./pages/search page/index";
import SearchInner from "./pages/search inner/index";
import SearchAlternative from "./pages/search alternative/index";
import Chats from "./pages/chats/index";

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
        path: "/search_results",
        name: "SearchResults",
        component: SearchResults,
    },
    {
        path: "/search_inner",
        name: "SearchInner",
        component: SearchInner,
    },
    {
        path: "/search_alternative",
        name: "SearchAlternative",
        component: SearchAlternative,
    },
    {
        path: "/chats",
        name: "Chats",
        component: Chats,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
