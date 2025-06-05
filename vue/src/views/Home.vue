<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, onUnmounted } from "vue";
const { t } = useI18n();

const newsSlides = [
  {
    img: "https://content.presspage.com/uploads/1802/c1920_vincentpatty-2.jpg?73345",
    titleKey: "news1Title",
    textKey: "news1Text",
    dateday: "22",
    datemonth: "Oct",
  },
  {
    img: "https://www.kindamuzik.net/gfx/jiggy-grp-1006.jpg",
    titleKey: "news2Title",
    textKey: "news2Text",
    dateday: "22",
    datemonth: "Oct",
  },
  {
    img: "https://www.vikingentertainment.nl/uploads/product/groot/jiggy-dje-1549893443.jpg",
    titleKey: "news3Title",
    textKey: "news3Text",
    dateday: "22",
    datemonth: "Oct",
  },
];

const currentSlide = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % newsSlides.length;
  }, 4500);

  // Show notification after 5 seconds
  setTimeout(() => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Don't leave!", {
          body: "Stay tuned for more festival news!",
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Don't leave!", {
              body: "Stay tuned for more festival news!",
            });
          }
        });
      }
    }
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-600">
    <div class="flex flex-col ml-6 justify-center h-10">
      <h1 class="font-bold text-2xl">
        {{ t("discover")
        }}<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">{{ t("discoverSubtitle") }}</h1>
    </div>
    <div class="flex space-x-2 overflow-x-auto px-4 no-scrollbar">
      <img class="w-95 h-35 mt-7 rounded-2xl" src="../assets/home.jpg" />
      <img class="w-95 h-35 mt-7 rounded-2xl" src="../assets/artists.png" />
      <img class="w-95 h-35 mt-7 rounded-2xl" src="../assets/line-up.png" />
    </div>
    <h1 class="font-bold text-2xl ml-6 mt-6">
      {{ t("news") }}<span class="text-4xl font-bold text-vermilion">.</span>
    </h1>

    <h1 class="text-xs ml-6">{{ t("newsSubtitle") }}</h1>
    <div class="flex justify-center items-center flex-wrap px-2 mt-2">
      <figure
        class="relative bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs min-w-[370px] mx-2 my-4 text-left group transition-all duration-700"
      >
        <div class="overflow-hidden">
          <img
            class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            :src="newsSlides[currentSlide].img"
            :alt="t(newsSlides[currentSlide].titleKey)"
          />
        </div>
        <figcaption
          class="absolute bottom-0 left-0 right-0 p-6 z-10 text-white"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#700877]/90 to-[#ff2759]/90 opacity-90 -z-10 rounded-b-lg"
          ></div>
          <div class="absolute right-6 -top-8">
            <div
              class="bg-white text-[#700877] font-bold text-lg rounded-full w-12 h-12 flex flex-col items-center justify-center shadow"
            >
              <span class="leading-none text-xl">{{
                newsSlides[currentSlide].dateday
              }}</span>
              <span class="text-xs uppercase leading-none">{{
                newsSlides[currentSlide].datemonth
              }}</span>
            </div>
          </div>
          <h3 class="font-bold text-lg mb-2">
            {{ t(newsSlides[currentSlide].titleKey) }}
          </h3>
          <p class="text-sm leading-relaxed">
            {{ t(newsSlides[currentSlide].textKey) }}
          </p>
        </figcaption>
        <a href="#" class="absolute inset-0 z-20"></a>
      </figure>
    </div>
    <h1 class="font-bold text-2xl ml-6 mt-6">
      {{ t("stages") }}<span class="text-4xl font-bold text-vermilion">.</span>
    </h1>
    <h1 class="text-xs ml-6">{{ t("stagesSubtitle") }}</h1>

    <div class="flex flex-col space-y-6 px-4 mt-6 pb-28">
      <!-- First Section -->
      <div
        class="flex justify-center content-center bg-white dark:bg-gray-300 w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/Mainstage.jpg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">{{ t("mainstageTitle") }}</h1>
          <h1>{{ t("mainstageSubtitle") }}</h1>
        </div>
      </div>

      <!-- Second Section -->
      <div
        class="flex justify-center content-center bg-white dark:bg-gray-300 w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/thelake.jpg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">{{ t("lakeTitle") }}</h1>
          <h1>{{ t("lakeSubtitle") }}</h1>
        </div>
      </div>

      <!-- Third Section -->
      <div
        class="flex justify-center content-center bg-white dark:bg-gray-300 w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/club.jpeg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">{{ t("clubTitle") }}</h1>
          <h1>{{ t("clubSubtitle") }}</h1>
        </div>
      </div>

      <!-- Fourth Section -->
      <div
        class="flex justify-center content-center bg-white dark:bg-gray-300 w-full rounded-2xl px-4 py-6"
      >
        <img class="rounded-2xl w-30 h-25" src="../assets/hangar.jpeg" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-2xl">{{ t("hanggarTitle") }}</h1>
          <h1>{{ t("hanggarSubtitle") }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
