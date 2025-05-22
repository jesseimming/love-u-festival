<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="flex flex-col ml-6 justify-center h-10">
      <h1 class="font-bold text-2xl">
        Line up<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">Discover the line up at U Festival.</h1>
    </div>
    <div class="flex flex-col space-y-6 px-3 mt-6 pb-28">
      <router-link
        to="/artists"
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-12 cursor-pointer hover:shadow-lg transition"
      >
        <h1 class="font-bold text-4xl text-black">Go to Artists</h1>
      </router-link>
      <router-link
        to="/scheme"
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-12 cursor-pointer hover:shadow-lg transition"
      >
        <h1 class="font-bold text-4xl text-black">Go to Scheme</h1>
      </router-link>
    </div>
  </div>
</template>