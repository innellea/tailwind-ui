import { createRouter, createWebHistory } from "vue-router"

import TodoHome from "./pages/kanban"
import Inbox from "./pages/inbox"

const routes = [
    {
        path: "/",
        name: "TodoHome",
        component: TodoHome,
        meta: {
            pageTitle: "Task Overview"
        }
    },
    {
        path: "/inbox",
        name: "Inbox",
        component: Inbox,
        meta: {
            pageTitle: "Inbox"
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
