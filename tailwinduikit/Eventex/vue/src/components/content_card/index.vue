<template>
    <div
        v-for="idx in 3" v-bind:key="idx"  
        class="md:flex hidden items-center justify-center py-2">
        <div class=" bg-gray-100 rounded-sm hidden lg:flex">
            <img v-bind:src="employee.photo" class="object-cover object-center" alt="Profile">
            <div class="pl-4 pt-4">
                <p class="text-base font-bold leading-none text-gray-700"> {{ employee.name }}
                </p>
                <p class="text-xs leading-3 text-gray-600 mt-1"> {{ employee.job}} </p>
                <p class="text-xs leading-tight text-gray-600 mt-3 w-full md:w-9/12">
                    {{ employee.description }}</p>
            </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-sm py-4 lg:hidden block">
            <div class="flex items-center px-4">
                <img v-bind:src="employee.photo" class="object-cover object-center h-20" alt="Profile">
                <div class="pl-4">
                    <p class="text-base font-bold leading-none text-gray-700">
                        {{ employee.name }}
                    </p>
                    <p class="text-xs leading-3 text-gray-600 mt-1">
                        {{ employee.job }}
                    </p>
                </div>
            </div>
            <div class="px-4 pt-2">
                <p class="text-xs leading-tight text-gray-600 w-full md:w-9/12">
                    {{ employee.description }}
                </p>
            </div>
        </div>
    </div>
    <div 
        v-for="idx in 3" v-bind:key="idx" 
        class="mt-4 md:mt-8">
        <div class="block md:hidden">
            <div class="flex flex-col bg-gray-100 rounded-sm py-4">
                <div class="flex items-center px-4">
                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-12.png"
                        class="object-cover object-center h-20" alt="Profile">
                    <div class="pl-4">
                        <p class="text-base font-bold leading-none text-gray-700">
                            {{ employee.name }}
                        </p>
                        <p class="text-xs leading-3 text-gray-600 mt-1">
                            {{ employee.job }}
                        </p>
                    </div>
                </div>
                <div class="px-4 pt-2">
                    <p class="text-xs leading-tight text-gray-600 w-full md:w-9/12">
                        {{ employee.description }} </p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            employee:{ 
                photo: "https://cdn.tuk.dev/assets/templates/virtual-event-management/events-inner-12.png",
                name: "James Iverson",
                job: "Freelance Artist",
                description: "“Widely acknowledged as one of Australia's busiest &amp; best MC's and a global authority on Industry, James Iverson shares his expertise and insights into this fascinating Professional Speaking niche, lessons that he has learned and experienced.”"
            }
        }
    }
}
</script>
