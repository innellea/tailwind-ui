<template>
    <div class="p-8 flex items-center justify-center bg-white">
    
    <button type="button" @click="on = !on" :aria-pressed="on.toString()" aria-pressed="false" :class="{ 'bg-gray-200': !on, 'bg-indigo-600': on }" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span class="sr-only">Use setting</span>
      <span aria-hidden="true" :class="{ 'translate-x-5': on, 'translate-x-0': !on }" class="pointer-events-none translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
    </button>

    </div>
</template>

<script>
export default {
  data: () => ({
	on: false,
  })
}
</script>
