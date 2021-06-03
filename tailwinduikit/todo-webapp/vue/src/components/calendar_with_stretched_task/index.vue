<template>
    <div class="mx-auto container py-20 px-6">
        <div class="w-full flex items-cente justify-between">
            <div>
                <h4 class="text-xs xl:text-base text-custom-1">September 2018</h4>
            </div>
            <div class="md:flex justify-center hidden w-1/2">
                <div class="flex items-center">
                    <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="15 6 9 12 15 18"></polyline>
                    </svg>
                    <svg class="cursor-pointer ml-20" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#353F47" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                </div>
            </div>
            <div>
                <a href="#">
                    <h4 class="text-orange cursor-pointer text-xs lg:text-base font-light text-right">Month view</h4>
                </a>
            </div>
            <div>
                <a href="#">
                    <h4 class="text-xs lg:text-base cursor-pointer text-custom-2 font-light text-right ml-6">Week view
                    </h4>
                </a>
            </div>
            <div>
                <a href="#">
                    <h4 class="text-xs lg:text-base cursor-pointer text-custom-2 font-light text-right ml-6">Day view
                    </h4>
                </a>
            </div>
        </div>
        <div class="w-full overflow-x-scroll xl:overflow-x-hidden mt-4">
            <table class="min-w-full bg-white">
                <thead class="items-center">
                    <tr class="h-20">
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Monday</p>
                        </th>
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Tuesday</p>
                        </th>
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Wednesday</p>
                        </th>
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Thursday</p>
                        </th>
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Friday</p>
                        </th>
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Saturday</p>
                        </th>
                        <th class="px-10">
                            <p class="text-xs text-left text-custom-3 uppercase cursor-pointer">Sunday</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-300">
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">27</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">28</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">29</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">30</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">31</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">1</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">2</p>
                        </td>
                    </tr>
                    <tr class="border-b relative w-full border-gray-300">
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">3</p>
                        </td>
                        <td class="border-r relative xl:static border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">4</p>
                            <div
                                class="absolute w-64 xl:w-1/5 ml-3 -mt-16 flex items-center bg-custom-gray border-custom-green py-1">
                                <div class="ml-1">
                                    <p class="text-xs">4 Sept – 5 Sept</p>
                                    <p class="text-xs text-custom-blue mt-0.5">Vacation</p>
                                </div>
                            </div>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">5</p>
                        </td>
                        <td class="border-r relative border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">6</p>
                            <div class="flex items-center -mt-16 absolute ml-4">
                                <div class="w-3 h-3 bg-custom-yellow rounded"></div>
                                <div class="ml-2">
                                    <p class="text-xs">13:00 - 14:40</p>
                                    <p class="text-xs text-custom-blue mt-1">Doctor’s</p>
                                </div>
                            </div>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">7</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">8</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">9</p>
                        </td>
                    </tr>
                    <tr class="border-b relative border-gray-300">
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">10</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">11</p>
                        </td>
                        <td class="border-r relative xl:static border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">12</p>
                            <div
                                class="absolute custom-width ml-3 -mt-16 flex items-center bg-custom-gray border-custom-green py-1">
                                <div class="ml-1">
                                    <p class="text-xs">12 Sept – 15 Sept</p>
                                    <p class="text-xs text-custom-blue mt-0.5">Tokyo - Business Trip</p>
                                </div>
                            </div>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">13</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">14</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">15</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">16</p>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">17</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">18</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">19</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">20</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">21</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">22</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">23</p>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">24</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">25</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">26</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">27</p>
                        </td>
                        <td class="border-r border-gray-300">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">28</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">29</p>
                        </td>
                        <td class="border-r border-gray-300 bg-custom-orange">
                            <p class="text-xs text-custom-4 pt-2 pl-2 pb-16">30</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    body {
        font-family: "Lato", sans-serif;
    }

    @media screen and (min-width: 375px) {
        .custom-width {
            width: 40rem;
        }
    }

    @media screen and (min-width: 1300px) {
        .custom-width {
            width: 50%;
        }
    }

    .text-orange {
        color: #F6AD55;
    }



    .bg-custom-yellow {
        Background: #B8C819;
    }



    .bg-custom-gray-2 {
        background: #DEDEDE;
    }

    .bg-custom-orange {
        background: #FFFAF0;
        box-shadow: inset -1px 0px #D0D5D9;
    }

    .bg-custom-gray {
        background: #F1F1F1;
    }

    .border-custom-green {
        border-left: 4px solid #19C89A;
        border-radius: 4px;
    }
</style>