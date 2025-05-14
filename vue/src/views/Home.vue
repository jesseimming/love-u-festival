<template>
  <div class="bg-gray-100">
    <div class="flex flex-col ml-6 justify-center h-10">
      <h1 class="font-bold text-2xl">
        Discover<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">Discover U Festival at his best.</h1>
    </div>
    <div class="flex space-x-2 overflow-x-auto px-4 no-scrollbar">
      <img class="w-95 h-35 mt-7 rounded-2xl" src="../assets/home.jpg" />
      <img class="w-95 h-35 mt-7 rounded-2xl" src="../assets/artists.png" />
      <img class="w-95 h-35 mt-7 rounded-2xl" src="../assets/line-up.png" />
    </div>

    <div class="flex flex-col space-y-6 px-4 mt-6 pb-28">
      <!-- First Section -->
      <div
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/Mainstage.jpg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">Mainstage</h1>
          <h1>(Mainstage, Poton) Head acts</h1>
        </div>
      </div>

      <!-- Second Section -->
      <div
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/thelake.jpg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">The Lake</h1>
          <h1>(The Lake) Unknown talents</h1>
        </div>
      </div>

      <!-- Third Section -->
      <div
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/club.jpeg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">The Club</h1>
          <h1>(The Club) Theater/Stand-up comedy</h1>
        </div>
      </div>

      <!-- Fourth Section -->
      <div
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/hangar.jpeg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">Hanggar</h1>
          <h1>(Hanggar) non stop house/techno/dance</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
