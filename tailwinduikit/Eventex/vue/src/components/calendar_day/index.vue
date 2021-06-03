<template>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden mt-6">
        <table class="min-w-full bg-white">
            <thead class="items-center">
                <tr class="h-20">
                    <th v-for="(time, idx) in timings" v-bind:key="idx" class="border-r-2 border-gray-200 px-10">
                        <p class="text-gray-800 font-light text-xs"> {{ day }} </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="relative">
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20">
                    </td>
                    <td class="border-r-2 border-gray-200 h-20 relative">
                        <div
                            class="w-4 h-2 flex justify-center bg-yellow-400 absolute inset-0 mx-auto -mt-3">
                            <div class="vl border-l border-yellow-400 mt-2"></div>
                        </div>
                    </td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr class="relative">
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 relative xl:static border-gray-200 h-20">
                        <div class="absolute border-t-2 border-indigo-500 -ml-0.5 bg-indigo-100">
                            <div class="flex">
                                <div class="flex-shrink-0 w-72 2xl:w-96 py-4 pl-3 h-24 ">
                                    <div class="text-indigo-700">
                                        <p class="text-sm leading-5 ">Barcelona Design
                                            <br>Conference
                                        </p>
                                        <p class="mt-3 text-xs leading-3 ">2:00pm - 4:00pm</p>
                                    </div>
                                </div>
                                <div class="flex-shrink-0 w-11 xl:w-40  2xl:w-64 ml-2 xl:ml-3 2xl:ml-8">
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 relative border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
                <tr>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                    <td class="border-r-2 border-gray-200 h-20"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            timings: [
                "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
            ]
        }
    },
}
</script>