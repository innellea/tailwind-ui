<template>
    <div class="w-full">
        <p class="text-base md:text-xl font-bold leading-tight text-gray-600">Upcoming events</p>
        <div class="flex items-center">
            <div class="w-full -ml-1.5 overflow-x-scroll 2xl:overflow-x-hidden overflow-y-hidden md:mt-8 mt-4">
                <table class="w-full relative alignTop">
                    <tbody>
                        <tr class="w-full">
                            <td class="xl:w-auto">
                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                            viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                </svg>
                                <div class="h-20 sm:h-16 z-0 absolute border-l border-gray-200 ml-1"></div>
                            </td>
                            <td class="xl:w-auto">
                                <p class="text-xs text-gray-700 pl-3">17&nbsp;Jun</p>
                            </td>
                            <td class="pl-8 w-1/4 xl:w-auto">
                                <div class="flex flex-col items-end">
                                    <p class="text-xs font-bold text-gray-700">Lake Casandra</p>
                                    <p class="text-xs leading-3 text-gray-400 mt-1">05:49AM</p>
                                </div>
                            </td>
                            <td class="pl-4 w-1/2 xl:w-auto">
                                <div class="flex items-center pl-4 border-l border-gray-100">
                                    <div>
                                        <p class="text-xs font-bold text-gray-700">80/200 tickets sold</p>
                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at $53</p>
                                    </div>
                                </div>
                            </td>
                            <td class="pl-8 w-1/4 xl:w-auto">
                                <div class="flex items-center">
                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                </div>
                            </td>
                        </tr>
                        <tr
                            v-for="idx in 3" v-bind:key="idx"
                        >
                            <td class="pt-8 xl:w-auto">
                                <svg class="relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                            viewBox="0 0 10 10" fill="none">
                                    <circle cx="5" cy="5" r="5" fill="#718096"></circle>
                                </svg>
                                <div
                                    v-show="idx !== 3" 
                                    class="h-20 sm:h-16 z-0 absolute border-l border-gray-200 ml-1"></div>
                            </td>
                            <td class="pt-8 xl:w-auto">
                                <p class="text-xs text-gray-700 pl-3"> {{ timeline.date }} </p>
                            </td>
                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                <div class="flex flex-col items-end">
                                    <p class="text-xs font-bold text-gray-700"> {{ timeline.name }} </p>
                                    <p class="text-xs leading-3 text-gray-400 mt-1">{{timeline.time}}AM</p>
                                </div>
                            </td>
                            <td class="pl-4 pt-8 w-1/2 xl:w-auto">
                                <div class="flex items-center pl-4 border-l border-gray-100">
                                    <div>
                                        <p class="text-xs font-bold text-gray-700">{{timeline.tickets}} tickets sold</p>
                                        <p class="text-xs leading-3 mt-1 text-gray-400">Starting at {{timeline.price}}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="pl-8 pt-8 w-1/4 xl:w-auto">
                                <div class="flex items-center">
                                    <img src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                    <img class="ml-1" src="https://cdn.tuk.dev/assets/templates/virtual-event-management/profile-1.png" alt="profile-1" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            timeline: {
                date: "22 June",
                name: "Lake Casandra",
                time: "05:49",
                tickets: "80/200",
                price: "$53"
            }
        }
    }
}
</script>