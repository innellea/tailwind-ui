<template>
    <div class="flex flex-row xl:flex-col w-full xl:w-auto items-center 2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 xl:px-4 px-0">

        <router-link class="hidden xl:block" v-if="$route.path === '/'" to="/Contacts">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Contacts'" to="/Team">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Team'" to="/Clients">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Clients'" to="/Projects">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Projects'" to="/AboutUs">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/AboutUs'" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none">
                <path d="M1 18L17.5 1L34 18" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>

        <router-link class="xl:hidden" v-if="$route.path === '/'" to="/Contacts">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </router-link>
        <router-link class="xl:hidden" v-if="$route.path === '/Contacts'" to="/Team">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </router-link>
        <router-link class="xl:hidden" v-if="$route.path === '/Team'" to="/Clients">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </router-link>
        <router-link class="xl:hidden" v-if="$route.path === '/Clients'" to="/Projects">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </router-link>
        <router-link class="xl:hidden" v-if="$route.path === '/Projects'" to="/AboutUs">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </router-link>
        <router-link class="xl:hidden" v-if="$route.path === '/AboutUs'" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </router-link>

        <div class="flex items-center xl:flex-col justify-center  py-16">
            <router-link to="/">
                <div 
                    v-bind:class="[{'bg-indigo-700' :$route.path === '/'}]"
                    class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300"></div>
            </router-link>
            <router-link to="/AboutUs">
                <div 
                    v-bind:class="[{'bg-indigo-700' :$route.path === '/AboutUs'}]"
                    class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10"></div>
            </router-link>
            <router-link to="/Projects">
                <div
                    v-bind:class="[{'bg-indigo-700' :$route.path === '/Projects'}]"
                    class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10"></div>
            </router-link>
            <router-link to="/Clients">
                <div 
                    v-bind:class="[{'bg-indigo-700' :$route.path === '/Clients'}]"
                    class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10"></div>
            </router-link> 
            <router-link to="/Team">
                <div 
                    v-bind:class="[{'bg-indigo-700' :$route.path === '/Team'}]"
                    class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10"></div>
            </router-link>
            <router-link to="/Contacts">
                <div 
                    v-bind:class="[{'bg-indigo-700' :$route.path === '/Contacts'}]"
                    class="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray-300 xl:mt-10"></div>
            </router-link>
        </div>

        <router-link class="xl:hidden" v-if="$route.path === '/'" to="/Contacts">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/'" to="/AboutUs">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/AboutUs'" to="/Projects">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Projects'" to="/Clients">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Clients'" to="/Team">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>
        <router-link class="hidden xl:block" v-if="$route.path === '/Team'" to="/Contacts">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
                <path d="M34 1L17.5 17L1 1" stroke="#718096" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </router-link>

        <router-link class="ml-5 xl:hidden" v-if="$route.path === '/'" to="/AboutUs">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </router-link>
        <router-link class="ml-5 xl:hidden" v-if="$route.path === '/AboutUs'" to="/Projects">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </router-link>
        <router-link class="ml-5 xl:hidden" v-if="$route.path === '/Projects'" to="/Clients">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </router-link>
        <router-link class="ml-5 xl:hidden" v-if="$route.path === '/Clients'" to="/Team">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </router-link>
        <router-link class="ml-5 xl:hidden" v-if="$route.path === '/Team'" to="/Contacts">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </router-link>
        <router-link class="ml-5 xl:hidden" v-if="$route.path === '/Contacts'" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>