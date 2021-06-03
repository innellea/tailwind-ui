<template>
<div class="w-full hidden md:flex items-center pb-2 border-b border-gray-200">
        <router-link to="/EventInner">
            <div 
                v-bind:class="[{'bg-red-100' :$route.path === '/EventInner'}]"
                class="py-2 px-4  bg-transparent hover:bg-red-50 ease-in duration-150 rounded">
                <p 
                    v-bind:class="[{'text-red-700' :$route.path === '/EventInner'}]"
                    class="text-xs xl:text-sm leading-none text-center text-gray-600">Timeline
                </p>
            </div>
        </router-link>
        <router-link to="/EventSpeakers">
            <div
                v-bind:class="[{'bg-red-100' :$route.path === '/EventSpeakers'}]"
                class="py-2 px-4 ml-24 bg-transparent hover:bg-red-50 ease-in duration-150 rounded">
                <p 
                    v-bind:class="[{'text-red-700' :$route.path === '/EventSpeakers'}]"
                    class="text-xs xl:text-sm leading-none text-gray-600">Speakers</p>
            </div>
        </router-link>
        <router-link to="/EventSponsors">
            <div
                v-bind:class="[{'bg-red-100' :$route.path === '/EventSponsors'}]"
                class="py-2 px-4 ml-24 bg-transparent hover:bg-red-50 ease-in duration-150 rounded">
                <p 
                    v-bind:class="[{'text-red-700' :$route.path === '/EventSponsors'}]"
                    class="text-xs xl:text-sm leading-none text-center text-gray-600">Sponsors</p>
            </div>
        </router-link>
        <a href="#">
            <div
                class="py-2 px-4 ml-24 bg-transparent hover:bg-red-50 ease-in duration-150 rounded">
                <p class="text-xs xl:text-sm leading-none text-gray-600">Additional
                    Information</p>
            </div>
        </a>
    </div>
    <div
        class="flex w-full text-xs justify-between md:hidden my-10 items-center border-b border-gray-200">
        <p 
            v-bind:class="[{'text-red-700 border-b-2 border-red-700' :$route.path === '/EventInner'}]"
            class="text-gray-600 text-xs">
            <router-link to="/EventInner">Timeline</router-link></p>
        <p 
            v-bind:class="[{'text-red-700 border-b-2 border-red-700' :$route.path === '/EventSpeakers'}]"
            class="text-gray-600 text-xs">
            <router-link to="/EventSpeakers">Speakers</router-link></p>
        <p 
            v-bind:class="[{'text-red-700 border-b-2 border-red-700' :$route.path === '/EventSponsors'}]"
            class="text-gray-600 text-xs">
            <router-link to="/EventSponsors">Sponsors</router-link></p>
        <p class="text-gray-600 text-xs"><a href="#">Additional Information</a></p>
    </div>
</template>
