<script setup>
import { ref } from "vue";
const showAlgemeen = ref(false);
const showBereik = ref(false);
const showLocker = ref(false);
const showFAQ = ref(false);
const showGlu = ref(false);
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const FESTIVAL_LAT = 52.07887103329403;
const FESTIVAL_LON = 5.059573437544879;

const openMap = (e) => {
  if (e) e.stopPropagation();
  const lat = FESTIVAL_LAT;
  const lon = FESTIVAL_LON;
  const label = encodeURIComponent("LoveU Festival");

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isIOS) {
    window.location.href = `https://maps.apple.com/?ll=${lat},${lon}&q=${label}`;
  } else if (isAndroid) {
    window.location.href = `geo:${lat},${lon}?q=${lat},${lon}(${label})`;
  } else {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
      "_blank"
    );
  }
};

const addToAgenda = () => {
  const title = "LoveU Festival";
  const description = "LoveUFestival 2025";
  const location = "Strijkviertel, Utrecht";
  const start = "20250906T120000";
  const end = "20250906T230000";

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "festival.ics";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
};
</script>

<template>
  <div class="bg-gray-100 px-6 h-full pb-28 min-h-screen">
    <div class="flex flex-col justify-center h-10">
      <h1 class="font-bold text-2xl">
        {{ t("info") }}<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">{{ t("infoText") }}</h1>
    </div>

    <div
      class="flex flex-col justify-center mt-10 content-center rounded-2xl bg-white px-10 py-4 cursor-pointer select-none transition-all duration-500 ease-in-out relative shadow"
      @click="showAlgemeen = !showAlgemeen"
      :style="{ minHeight: showAlgemeen ? '270px' : '60px' }"
    >
      <img
        src="../assets/dropdown.png"
        class="absolute top-4 right-4 w-8 h-8 transition-transform"
        :class="showAlgemeen ? 'rotate-180' : ''"
        alt="dropdown"
      />
      <h1 class="text-2xl py-4 font-semibold">{{ t("general") }}</h1>
      <transition name="zoom">
        <div
          v-if="showAlgemeen"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showAlgemeen ? 'scale-100 opacity-100' : ''"
        >
          <p>
            {{ t("generalText") }}
          </p>
          <h2 class="font-semibold mt-4">{{ t("adress") }}</h2>
          <div>{{ t("adressText") }}</div>
          <div class="mt-2">
            <div class="flex items-center gap-2 mt-2">
              <button
                @click.stop="openMap"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl shadow transition"
              >
                <svg
                  class="w-5 h-5 inline-block mr-1 align-middle"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {{ t("navButtonText") }}
              </button>
            </div>
          </div>
          <div class="mt-4 font-semibold">{{ t("date") }}</div>
          <div>{{ t("dateText") }}</div>
          <button
            @click.stop="addToAgenda"
            class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 mt-2 rounded-xl shadow transition"
          >
            <svg
              class="w-5 h-5 inline-block mr-1 align-middle"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
              <path
                d="M16 2v4M8 2v4M3 10h18"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M12 14v4M10 16h4"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            {{ t("addToAgendaButtonText") }}
          </button>
        </div>
      </transition>
    </div>

    <!-- Accessibility (Bereik) -->
    <div
      class="flex flex-col justify-center mt-4 content-center rounded-2xl bg-white px-10 py-4 cursor-pointer select-none transition-all duration-500 ease-in-out relative shadow"
      @click="showBereik = !showBereik"
      :style="{ minHeight: showBereik ? '270px' : '60px' }"
    >
      <img
        src="../assets/dropdown.png"
        class="absolute top-4 right-4 w-8 h-8="
      />
      <h1 class="text-2xl py-4 font-semibold">{{ t("access") }}</h1>
      <transition name="zoom">
        <div
          v-if="showBereik"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showBereik ? 'scale-100 opacity-100' : ''"
        >
          <h2 class="font-semibold mt-2">{{ t("bike") }}</h2>
          <p>
            {{ t("bikeText") }}
          </p>
          <br />
          <h2 class="font-semibold mt-2">{{ t("car") }}</h2>
          <p>
            {{ t("carText") }}
          </p>
          <br />
          <h2 class="font-semibold mt-2">{{ t("public") }}</h2>
          <p v-html="t('publicText')"></p>
          <a class="text-xl underline" href="https://9292.nl" target="_blank"
            >9292.nl</a
          >
          <br /><br />
          <h2 class="font-semibold mt-2">{{ t("shuttle") }}</h2>
          <p>
            {{ t("shuttleText") }}
          </p>
          <br />
          {{ t("shuttleText2") }}
          <br />
          <br />
          <h2 class="font-semibold mt-2">{{ t("taxi") }}</h2>
          <p>
            {{ t("taxiText") }}
          </p>
        </div>
      </transition>
    </div>

    <!-- Lockers -->
    <div
      class="flex flex-col justify-center mt-4 content-center rounded-2xl bg-white px-10 py-4 cursor-pointer select-none transition-all duration-500 ease-in-out relative shadow"
      @click="showLocker = !showLocker"
      :style="{ minHeight: showLocker ? '220px' : '60px' }"
    >
      <img
        src="../assets/dropdown.png"
        class="absolute top-4 right-4 w-8 h-8"
      />
      <h1 class="text-2xl py-4 font-semibold">{{ t("lockers") }}</h1>
      <transition name="zoom">
        <div
          v-if="showLocker"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showLocker ? 'scale-100 opacity-100' : ''"
        >
          <p>
            {{ t("lockersText1") }}
          </p>
          <br />
          <p>
            {{ t("lockersText2") }}
          </p>
          <br />
          <p>{{ t("lockersText3") }}</p>
        </div>
      </transition>
    </div>

    <!-- FAQ -->
    <div
      class="flex flex-col justify-center mt-4 content-center rounded-2xl bg-white px-10 py-4 cursor-pointer select-none transition-all duration-500 ease-in-out relative shadow"
      @click="showFAQ = !showFAQ"
      :style="{ minHeight: showFAQ ? '220px' : '60px' }"
    >
      <img
        src="../assets/dropdown.png"
        class="absolute top-4 right-4 w-8 h-8"
      />
      <h1 class="text-2xl py-4 font-semibold">{{ t("faq") }}</h1>
      <transition name="zoom">
        <div
          v-if="showFAQ"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showFAQ ? 'scale-100 opacity-100' : ''"
        >
          <h2 class="font-semibold mt-2">{{ t("faqQ1") }}</h2>
          <p>
            {{ t("faqA1") }}
          </p>
          <br />
          <h2 class="font-semibold mt-2">
            {{ t("faqQ2") }}
          </h2>
          <p>
            {{ t("faqA2") }}
          </p>
          <br />
          <h2 class="font-semibold mt-2">{{ t("faqQ3") }}</h2>
          <p>{{ t("faqA3") }}</p>
        </div>
      </transition>
    </div>

    <!-- Golden GLU -->
    <div
      class="flex flex-col justify-center mt-4 content-center rounded-2xl bg-white px-10 py-4 cursor-pointer select-none transition-all duration-500 ease-in-out relative shadow"
      @click="showGlu = !showGlu"
      :style="{ minHeight: showGlu ? '220px' : '60px' }"
    >
      <img
        src="../assets/dropdown.png"
        class="absolute top-4 right-4 w-8 h-8"
      />
      <h1 class="text-2xl py-4 font-semibold">{{ t("glu") }}</h1>
      <transition name="zoom">
        <div
          v-if="showGlu"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showGlu ? 'scale-100 opacity-100' : ''"
        >
          <p>
            {{ t("gluText1") }}
          </p>
          <br />
          <p>
            {{ t("gluText2") }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  @apply transition-all duration-300;
}
.zoom-enter-from,
.zoom-leave-to {
  @apply opacity-0 scale-95;
}
.zoom-enter-to,
.zoom-leave-from {
  @apply opacity-100 scale-100;
}
</style>
