<template>
    <div class="p-8 flex justify-center bg-white" style="min-height: 600px;">
    
      <div class="w-full max-w-xl mx-auto">
      
    <fieldset x-data="radioGroup()">
      <legend id="radiogroup-label" class="sr-only">
        Server size
      </legend>
      <ul class="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label" x-ref="radiogroup">
      
          <li id="radiogroup-option-0" :tabindex="active === 0 || active === null ? '0' : '-1'" tabindex="0" @click="select(0)" @keydown.space.stop.prevent="select(0)" role="radio" aria-checked="true" :aria-checked="active === 0" @keydown.arrow-up.stop.prevent="onArrowUp(0)" @keydown.arrow-down.stop.prevent="onArrowDown(0)" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="font-medium text-gray-900">
                    Hobby
                  </p>
                  <div class="text-gray-500">
                    <p class="sm:inline">8GB / 4 CPUs</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                    <p class="sm:inline">160 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div class="font-medium text-gray-900">$40</div>
                <div class="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            <div :class="{ 'border-indigo-500': active === 0, 'border-transparent': !(active === 0) }" class="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
          </li>
      
          <li id="radiogroup-option-1" :tabindex="active === 1 || active === null ? '0' : '-1'" tabindex="-1" @click="select(1)" @keydown.space.stop.prevent="select(1)" role="radio" aria-checked="false" :aria-checked="active === 1" @keydown.arrow-up.stop.prevent="onArrowUp(1)" @keydown.arrow-down.stop.prevent="onArrowDown(1)" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="font-medium text-gray-900">
                    Startup
                  </p>
                  <div class="text-gray-500">
                    <p class="sm:inline">12GB / 6 CPUs</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                    <p class="sm:inline">256 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div class="font-medium text-gray-900">$80</div>
                <div class="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            <div :class="{ 'border-indigo-500': active === 1, 'border-transparent': !(active === 1) }" class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
          </li>
      
          <li id="radiogroup-option-2" :tabindex="active === 2 || active === null ? '0' : '-1'" tabindex="-1" @click="select(2)" @keydown.space.stop.prevent="select(2)" role="radio" aria-checked="false" :aria-checked="active === 2" @keydown.arrow-up.stop.prevent="onArrowUp(2)" @keydown.arrow-down.stop.prevent="onArrowDown(2)" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="font-medium text-gray-900">
                    Business
                  </p>
                  <div class="text-gray-500">
                    <p class="sm:inline">16GB / 8 CPUs</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                    <p class="sm:inline">512 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div class="font-medium text-gray-900">$160</div>
                <div class="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            <div :class="{ 'border-indigo-500': active === 2, 'border-transparent': !(active === 2) }" class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
          </li>
      
          <li id="radiogroup-option-3" :tabindex="active === 3 || active === null ? '0' : '-1'" tabindex="-1" @click="select(3)" @keydown.space.stop.prevent="select(3)" role="radio" aria-checked="false" :aria-checked="active === 3" @keydown.arrow-up.stop.prevent="onArrowUp(3)" @keydown.arrow-down.stop.prevent="onArrowDown(3)" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
            <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="font-medium text-gray-900">
                    Enterprise
                  </p>
                  <div class="text-gray-500">
                    <p class="sm:inline">32GB / 12 CPUs</p>
                    <span class="hidden sm:inline sm:mx-1" aria-hidden="true">·</span>
                    <p class="sm:inline">1024 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div class="font-medium text-gray-900">$240</div>
                <div class="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            <div :class="{ 'border-indigo-500': active === 3, 'border-transparent': !(active === 3) }" class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
          </li>
      
      </ul>
    </fieldset>

      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
	
  })
}
</script>
