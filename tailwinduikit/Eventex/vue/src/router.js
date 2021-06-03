import { createRouter, createWebHistory } from "vue-router"

import Events from "./pages/events"
import EventInner from "./pages/event inner"
import EventSpeakers from "./pages/event inner"
import EventSponsors from "./pages/event inner"
import Sales from "./pages/sales"
import Analytics from "./pages/analytics"
import Calendar from "./pages/calendar"
import CalendarWeek from "./pages/calendar"
import CalendarDay from "./pages/calendar"

const routes = [
    {
        path: "/",
        name: "Events",
        component: Events,
        meta: {
            title: "Events",
        },
    },
    {
        path: "/EventInner",
        name: "EventInner",
        component: EventInner,
        meta: {
            title: "Event",
        },
    },
    {
        path: "/EventSpeakers",
        name: "EventSpeakers",
        component: EventSpeakers,
        meta: {
            title: "Event Speakers",
        },
    },
    {
        path: "/EventSponsors",
        name: "EventSponsors",
        component: EventSponsors,
        meta: {
            title: "Event Sponsors",
        },
    },
    {
        path: "/Sales",
        name: "Sales",
        component: Sales,
        meta: {
            title: "Sales",
        },
    },
    {
        path: "/Analytics",
        name: "Analytics",
        component: Analytics,
        meta: {
            title: "Analytics",
        },
    },
    {
        path: "/Calendar",
        name: "Calendar",
        component: Calendar,
        meta: {
            title: "Calendar",
        },
    },
    {
        path: "/CalendarWeek",
        name: "CalendarWeek",
        component: CalendarWeek,
        meta: {
            title: "Calendar",
        },
    },
    {
        path: "/CalendarDay",
        name: "CalendarDay",
        component: CalendarDay,
        meta: {
            title: "Calendar",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
