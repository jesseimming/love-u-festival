<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const newsSlides = [
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg",
    title: "The World Ended Yesterday",
    text: "You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have an attitude.",
    dateday: "28",
    datemonth: "Oct"
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg",
    title: "An Abstract Post Heading",
    text: "Sometimes the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
    dateday: "17",
    datemonth: "Nov"
  },
  {
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg",
    title: "Down with this sort of thing",
    text: "I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.",
    dateday: "01",
    datemonth: "Dec"
  }
];

const currentSlide = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % newsSlides.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

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
    <h1 class="font-bold text-2xl ml-6 mt-6">
      News<span class="text-4xl font-bold text-vermilion">.</span>
    </h1>
    <h1 class="text-xs ml-6">See what is happening:</h1>
    <div class="flex justify-center items-center flex-wrap px-2 mt-6">
  <figure class="relative bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs min-w-[350px] mx-2 my-4 text-left group transition-all duration-700">
    <div class="overflow-hidden">
      <img
        class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        :src="newsSlides[currentSlide].img"
        :alt="newsSlides[currentSlide].title"
      />
    </div>
    <figcaption class="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
      <div class="absolute inset-0 bg-gradient-to-r from-[#700877]/90 to-[#ff2759]/90 opacity-90 -z-10 rounded-b-lg"></div>
      <div class="absolute right-6 -top-8">
        <div class="bg-white text-[#700877] font-bold text-lg rounded-full w-12 h-12 flex flex-col items-center justify-center shadow">
          <span class="leading-none text-xl">{{ newsSlides[currentSlide].dateday }}</span>
          <span class="text-xs uppercase leading-none">{{ newsSlides[currentSlide].datemonth }}</span>
        </div>
      </div>
      <h3 class="font-bold text-lg mb-2">{{ newsSlides[currentSlide].title }}</h3>
      <p class="text-sm leading-relaxed">
        {{ newsSlides[currentSlide].text }}
      </p>
    </figcaption>
    <a href="#" class="absolute inset-0 z-20"></a>
  </figure>
</div>
    <h1 class="font-bold text-2xl ml-6 mt-6">
      Stages<span class="text-4xl font-bold text-vermilion">.</span>
    </h1>
    <h1 class="text-xs ml-6">All the stages at U Festival.</h1>

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

