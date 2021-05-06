<template>
    <div class="bg-gray-100 py-12 px-4 flex justify-center sm:px-6 lg:py-16 lg:px-8">
    
      <div class="w-full max-w-3xl mx-auto">
      
    <fieldset x-data="radioGroup()">
      <legend class="sr-only">
        Pricing plans
      </legend>
      <ul class="relative bg-white rounded-md -space-y-px" x-ref="radiogroup">
      
        
            <li>
              <div :class="{ 'border-gray-200': !(active === 0), 'bg-indigo-50 border-indigo-200 z-10': active === 0 }" class="relative border rounded-tl-md rounded-tr-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                <label class="flex items-center text-sm cursor-pointer">
                  <input name="pricing_plan" type="radio" @click="select(0)" @keydown.space="select(0)" @keydown.arrow-up="onArrowUp(0)" @keydown.arrow-down="onArrowDown(0)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" aria-describedby="plan-option-pricing-0 plan-option-limit-0">
                  <span class="ml-3 font-medium text-gray-900">Startup</span>
                </label>
                <p id="plan-option-pricing-0" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span :class="{ 'text-indigo-900': active === 0, 'text-gray-900': !(active === 0) }" class="font-medium">$29 / mo</span>
                  <span :class="{ 'text-indigo-700': active === 0, 'text-gray-500': !(active === 0) }">($290 / yr)</span>
                </p>
                <p id="plan-option-limit-0" :class="{ 'text-indigo-700': active === 0, 'text-gray-500': !(active === 0) }" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Up to 5 active job postings</p>
              </div>
            </li>
        
        
            <li>
              <div :class="{ 'border-gray-200': !(active === 1), 'bg-indigo-50 border-indigo-200 z-10': active === 1 }" class="relative border border-gray-200 p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                <label class="flex items-center text-sm cursor-pointer">
                  <input name="pricing_plan" type="radio" @click="select(1)" @keydown.space="select(1)" @keydown.arrow-up="onArrowUp(1)" @keydown.arrow-down="onArrowDown(1)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" aria-describedby="plan-option-pricing-1 plan-option-limit-1" checked="">
                  <span class="ml-3 font-medium text-gray-900">Business</span>
                </label>
                <p id="plan-option-pricing-1" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span :class="{ 'text-indigo-900': active === 1, 'text-gray-900': !(active === 1) }" class="font-medium">$99 / mo</span>
                  <span :class="{ 'text-indigo-700': active === 1, 'text-gray-500': !(active === 1) }">($990 / yr)</span>
                </p>
                <p id="plan-option-limit-1" :class="{ 'text-indigo-700': active === 1, 'text-gray-500': !(active === 1) }" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Up to 25 active job postings</p>
              </div>
            </li>
        
        
            <li>
              <div :class="{ 'border-gray-200': !(active === 2), 'bg-indigo-50 border-indigo-200 z-10': active === 2 }" class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                <label class="flex items-center text-sm cursor-pointer">
                  <input name="pricing_plan" type="radio" @click="select(2)" @keydown.space="select(2)" @keydown.arrow-up="onArrowUp(2)" @keydown.arrow-down="onArrowDown(2)" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" aria-describedby="plan-option-pricing-2 plan-option-limit-2">
                  <span class="ml-3 font-medium text-gray-900">Enterprise</span>
                </label>
                <p id="plan-option-pricing-2" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span :class="{ 'text-indigo-900': active === 2, 'text-gray-900': !(active === 2) }" class="font-medium">$249 / mo</span>
                  <span :class="{ 'text-indigo-700': active === 2, 'text-gray-500': !(active === 2) }">($2490 / yr)</span>
                </p>
                <p id="plan-option-limit-2" :class="{ 'text-indigo-700': active === 2, 'text-gray-500': !(active === 2) }" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right">Unlimited active job postings</p>
              </div>
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
