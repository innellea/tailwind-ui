<template>
    <div class="flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-16 px-0">
        <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div  
            v-for="(card, idx) in cards" v-bind:key="idx" 
            class="flex w-full justify-center">
            <div class="flex flex-col items-center">
                <div class="pt-4 px-5 hoverDiv border-t-2 flex-col items-center border-l-2 border-r-2 border-black flex 2xl:w-96">
                    <div class="relative w-full">
                      <img v-bind:src="card.image" v-bind:alt="card.alt" class="w-full" />
                      <div class="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                          <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                                    fill="white"
                                />
                            </svg>
                          </div>
                          <div class="cursor-pointer">
                            <svg class="ml-9" xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
                                <path
                                    d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                                    fill="white"
                                />
                            </svg>
                          </div>
                          <div class="cursor-pointer">
                            <svg class="ml-9" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                                    fill="white"
                                />
                            </svg>
                          </div>
                      </div>
                  </div>
                </div>
                <h4 class="text-2xl text-gray-800 font-semibold mt-2">{{card.name}}</h4>
                <div class="pb-4 px-5 mt-4 flex flex-col border-b-2 border-l-2 border-r-2 border-black w-full items-center">
                  <svg
                    v-if="!card.email" 
                    xmlns="http://www.w3.org/2000/svg" width="3" height="31" viewBox="0 0 3 31" fill="none">
                      <line x1="1.5" y1="-4.88672e-08" x2="1.5" y2="31" stroke=" #4338CA" stroke-width="3" />
                  </svg>
                  <svg v-else 
                    xmlns="http://www.w3.org/2000/svg" width="42" height="4" viewBox="0 0 42 4" fill="none">
                      <line y1="2" x2="41.5939" y2="2" stroke=" #4338CA" stroke-width="3" />
                  </svg>
                  <h5 class="text-gray-800 text-lg mt-2 font-medium">{{card.rank}}</h5>
                  <h6 
                    v-if="card.email"
                    class="mt-2 text-indigo2 text-sm tracking-wider">{{card.email}}</h6>
                </div>
            </div>
        </div>
      </div>
      <Indicators />
    </div>
</template>

<script>
import Indicators from "../Indicators"
import Data from "@/mixins"

export default {
  name: "index",
  mixins: [Data],
  components: {
    Indicators
  }
}
</script>