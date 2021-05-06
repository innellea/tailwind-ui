<template>
    <div class="bg-gray-100 py-12 px-4 flex justify-center sm:px-6 lg:py-16 lg:px-8">
    
      <div class="w-full max-w-3xl mx-auto">
      
    <fieldset x-data="radioGroup()">
      <legend class="sr-only">
        Privacy setting
      </legend>

      <div class="bg-white rounded-md -space-y-px" x-ref="radiogroup">
      
        
            <div :class="{ 'border-gray-200': !(active === 0), 'bg-indigo-50 border-indigo-200 z-10': active === 0 }" class="relative border rounded-tl-md rounded-tr-md p-4 flex">
              <div class="flex items-center h-5">
                <input id="settings-option-0" name="privacy_setting" type="radio" @click="select(0)" @keydown.space="select(0)" @keydown.arrow-up="onArrowUp(0)" @keydown.arrow-down="onArrowDown(0)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" checked="">
              </div>
              <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                <span :class="{ 'text-indigo-900': active === 0, 'text-gray-900': !(active === 0) }" class="block text-sm font-medium">
                  Public access
                </span>
                <span :class="{ 'text-indigo-700': active === 0, 'text-gray-500': !(active === 0) }" class="block text-sm">
                  This project would be available to anyone who has the link
                </span>
              </label>
            </div>
        
        
            <div :class="{ 'border-gray-200': !(active === 1), 'bg-indigo-50 border-indigo-200 z-10': active === 1 }" class="relative border border-gray-200 p-4 flex">
              <div class="flex items-center h-5">
                <input id="settings-option-1" name="privacy_setting" type="radio" @click="select(1)" @keydown.space="select(1)" @keydown.arrow-up="onArrowUp(1)" @keydown.arrow-down="onArrowDown(1)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
              </div>
              <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                <span :class="{ 'text-indigo-900': active === 1, 'text-gray-900': !(active === 1) }" class="block text-sm font-medium">
                  Private to Project Members
                </span>
                <span :class="{ 'text-indigo-700': active === 1, 'text-gray-500': !(active === 1) }" class="block text-sm">
                  Only members of this project would be able to access
                </span>
              </label>
            </div>
        
        
            <div :class="{ 'border-gray-200': !(active === 2), 'bg-indigo-50 border-indigo-200 z-10': active === 2 }" class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
              <div class="flex items-center h-5">
                <input id="settings-option-2" name="privacy_setting" type="radio" @click="select(2)" @keydown.space="select(2)" @keydown.arrow-up="onArrowUp(2)" @keydown.arrow-down="onArrowDown(2)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
              </div>
              <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                <span :class="{ 'text-indigo-900': active === 2, 'text-gray-900': !(active === 2) }" class="block text-sm font-medium">
                  Private to you
                </span>
                <span :class="{ 'text-indigo-700': active === 2, 'text-gray-500': !(active === 2) }" class="block text-sm">
                  You are the only one able to access this project
                </span>
              </label>
            </div>
        
      </div>
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
