<template>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden mt-2">
        <table class="w-full bg-white">
            <thead class="items-center">
                <tr class="h-14">
                    <th v-for="(day, idx) in days" v-bind:key="idx" class="pr-6 sm:pr-0">
                        <p class="text-xs tracking-widest text-left text-gray-800 uppercase cursor-pointer"> {{ day }} </p>
                    </th>
                </tr>
            </thead>
            <tbody class="">
                <tr class="border-b border-gray-300">
                    <td class="border-r border-gray-300 ">
                        <p class="text-xs text-gray-400 pt-2 pl-2 pb-16">27</p>
                    </td>
                    <td class="border-r border-gray-300 ">
                        <p class="text-xs text-gray-400 pt-2 pl-2 pb-16">28</p>
                    </td>
                    <td class="border-r border-gray-300 ">
                        <p class="text-xs text-gray-400 pt-2 pl-2 pb-16">29</p>
                    </td>
                    <td class="border-r border-gray-300 ">
                        <p class="text-xs text-gray-400 pt-2 pl-2 pb-16">30</p>
                    </td>
                    <td class="border-r border-gray-300 ">
                        <p class="text-xs text-gray-400 pt-2 pl-2 pb-16">31</p>
                    </td>
                    <td class="border-r border-gray-300   bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">1</p>
                    </td>
                    <td class="border-r border-gray-300   bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">2</p>
                    </td>
                </tr>
                <tr class="border-b relative w-full border-gray-300">
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">3</p>
                    </td>
                    <td class="border-r relative bg-pink-100  border-gray-300">
                        <div class="pl-2">
                            <p class="text-xs text-gray-800 pt-2">4</p>
                            <p class="text-xs pl-2 leading-3 text-pink-500 pt-10 pb-2 ">Vacation</p>
                        </div>
                    </td>
                    <td class="border-r border-gray-300 bg-pink-100 ">
                        <div class="pl-2">
                            <p class="text-xs text-gray-800 pt-2">5</p>
                            <p class="text-xs pl-2 leading-3 text-pink-500 pt-10 pb-2 ">Vacation</p>
                        </div>

                    </td>
                    <td class="border-r relative bg-blue-200  border-gray-300">
                        <div class="pl-2">
                            <p class="text-xs text-gray-800 pt-2 pb-4">6</p>
                            <div class="flex pl-2 flex-col  items-start pb-2 justify-end ">
                                <p class="text-xs text-gray-800">13:00 - 14:40</p>
                                <p class="text-xs leading-6 text-blue-500">Doctor’s</p>
                            </div>
                        </div>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">7</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">8</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">9</p>
                    </td>
                </tr>
                <tr class="border-b relative border-gray-300">
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">10</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">11</p>
                    </td>
                    <td class="border-r relative xl:static border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">12</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">13</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">14</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">15</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">16</p>
                    </td>
                </tr>
                <tr class="border-b border-gray-300">
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">17</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">18</p>
                    </td>
                    <td class="border-r border-gray-300 bg-green-200 ">
                        <div class="pl-2">
                            <p class="text-xs text-gray-800 pt-2  pb-2">19</p>
                            <div class="inline-flex flex-col pb-4">
                                <p class="text-xs leading-3 text-gray-800">12 Sept – 15 Sept</p>
                                <p class="text-xs leading-6 text-green-600">Tokyo - Business Trip</p>
                            </div>
                        </div>
                    </td>
                    <td class="border-r border-gray-300 bg-green-200 ">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">20</p>
                    </td>
                    <td class="border-r border-gray-300 bg-green-200 ">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">21</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">22</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">23</p>
                    </td>
                </tr>
                <tr class="border-b border-gray-300">
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">24</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">25</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">26</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">27</p>
                    </td>
                    <td class="border-r border-gray-300">
                        <p class="text-xs text-gray-800 pt-2 pl-2 pb-16">28</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">29</p>
                    </td>
                    <td class="border-r border-gray-300  bg-gray-100 ">
                        <p class="text-xs text-gray-600 pt-2 pl-2 pb-16">30</p>
                    </td>
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
            days: [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ]
        }
    },
}
</script>