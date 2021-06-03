import { createRouter, createWebHistory } from "vue-router"

import ReelsHome from './pages/ReelsHome'
import GalleryCategory from './pages/GalleryCategory'
import ReelsGallery from './pages/ReelsGallery'

import ReelsContact from './pages/ReelsContact'

const routes = [
    {
        path: "/",
        name: "ReelsHome",
        component: ReelsHome,
    },
    {
        path: "/ReelsGallery",
        name: "ReelsGallery",
        component: ReelsGallery,
    },
    {
        path: "/GalleryCategory",
        name: "GalleryCategory",
        component: GalleryCategory,
    },
    {
        path: "/ReelsContact",
        name: "ReelsContact",
        component: ReelsContact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
