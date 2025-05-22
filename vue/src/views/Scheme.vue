<script setup>
import { ref } from "vue";
import artists from "../assets/artists.json";

function getRandomTime() {
  const hour = Math.floor(Math.random() * 12) + 12;
  const minute = Math.floor(Math.random() / 2 * 60); 
  return `${hour.toString().padStart(2, "0")}:${minute === 0 ? "00" : "30"}`;
}

const scheme = ref(
  artists.map((artist) => ({
    ...artist,
    time: getRandomTime(),
    imgUrl: new URL(`../assets/${artist.img}`, import.meta.url).href,
  }))
);
</script>

<template>
    <div class="flex flex-col ml-6 justify-center h-5">
      <h1 class="font-bold text-2xl">
        Scheme<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">Discover the times at U Festival.</h1>
    </div>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    
    <div class="w-full max-w-2xl space-y-4 pb-16">
      <div
        v-for="artist in scheme"
        :key="artist.name"
        class="flex items-center bg-white rounded-xl shadow p-4"
      >
        <div class="w-24 text-xl font-bold text-gray-700">{{ artist.time }}</div>
        <img
          :src="artist.imgUrl"
          alt="artist"
          class="w-16 h-16 rounded-xl object-cover mx-4"
        />
        <div>
          <div class="font-bold text-lg">{{ artist.name }}</div>
          <div class="text-sm text-gray-500">{{ artist.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>