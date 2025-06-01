<script setup>
import { ref, computed } from "vue";
import artists from "../assets/artists.json";
const getImg = (img) => new URL(`../assets/${img}`, import.meta.url).href;
const showModal = ref(false);
const selectedArtist = ref(null);
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

function openModal(artistName) {
  selectedArtist.value = artists.find((a) => a.name === artistName);
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
  selectedArtist.value = null;
}

function getYoutubeId(url) {
  const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

const timeColumns = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "00:00",
];

const stages = [
  {
    name: "Poton",
    events: [
      { artist: "Armin van Buuren", start: "10:30", end: "11:45" },
      { artist: "Kensington", start: "12:30", end: "13:45" },
      { artist: "De Staat", start: "14:30", end: "16:15" },
      { artist: "Navarone", start: "17:00", end: "18:15" },
      { artist: "Dotan", start: "19:15", end: "21:00" },
      { artist: "Froukje", start: "22:00", end: "23:45" },
    ],
  },
  {
    name: "The Lake",
    events: [
      { artist: "Talent set 1", start: "10:00", end: "10:45" },
      { artist: "Talent set 2", start: "11:30", end: "13:00" },
      { artist: "Talent set 3", start: "13:30", end: "15:00" },
      { artist: "Talent set 4", start: "15:30", end: "17:00" },
      { artist: "Talent set 5", start: "17:30", end: "18:30" },
      { artist: "Talent set 6", start: "19:15", end: "20:45" },
      { artist: "Talent set 7", start: "21:30", end: "23:00" },
    ],
  },
  {
    name: "The Club",
    events: [
      { artist: "Comedy", start: "12:15", end: "13:00" },
      { artist: "Lecture", start: "13:45", end: "14:30" },
      { artist: "Theater", start: "15:15", end: "16:45" },
      { artist: "Movie", start: "17:30", end: "19:30" },
      { artist: "Performance", start: "20:15", end: "21:15" },
      { artist: "Illusionist", start: "22:00", end: "23:00" },
    ],
  },
  {
    name: "Hangar",
    events: [
      { artist: "DJ set 1", start: "10:00", end: "11:00" },
      { artist: "DJ set 2", start: "11:00", end: "12:30" },
      { artist: "DJ set 3", start: "12:30", end: "14:00" },
      { artist: "DJ set 4", start: "14:00", end: "15:30" },
      { artist: "DJ set 5", start: "15:30", end: "17:30" },
      { artist: "DJ set 6", start: "17:30", end: "19:30" },
      { artist: "DJ set 7", start: "19:30", end: "21:30" },
      { artist: "DJ set 8", start: "21:30", end: "23:45" },
    ],
  },
];

const stages2 = [
  {
    name: "Poton",
    events: [
      { artist: "Martin Garrix", start: "11:00", end: "13:00" },
      { artist: "Within Temptation", start: "13:45", end: "15:45" },
      { artist: "Chef’Special", start: "16:30", end: "18:30" },
      { artist: "Eefje de Visser", start: "19:15", end: "21:15" },
      { artist: "Spinvis", start: "22:00", end: "23:45" },
    ],
  },
  {
    name: "The Lake",
    events: [
      { artist: "Talent set 1", start: "10:00", end: "11:00" },
      { artist: "Talent set 2", start: "11:30", end: "13:00" },
      { artist: "Talent set 3", start: "13:30", end: "15:00" },
      { artist: "Talent set 4", start: "15:30", end: "17:30" },
      { artist: "Talent set 5", start: "18:15", end: "19:45" },
      { artist: "Talent set 6", start: "20:30", end: "22:30" },
    ],
  },
  {
    name: "The Club",
    events: [
      { artist: "Comedy", start: "12:00", end: "12:45" },
      { artist: "Lecture", start: "13:30", end: "14:30" },
      { artist: "Theater", start: "15:30", end: "16:30" },
      { artist: "Movie", start: "17:30", end: "19:30" },
      { artist: "Magic Show", start: "20:15", end: "21:45" },
    ],
  },
  {
    name: "Hangar",
    events: [
      { artist: "DJ set 1", start: "10:00", end: "10:30" },
      { artist: "DJ set 2", start: "10:30", end: "12:30" },
      { artist: "DJ set 3", start: "12:30", end: "13:30" },
      { artist: "DJ set 4", start: "13:30", end: "15:30" },
      { artist: "DJ set 5", start: "15:30", end: "17:00" },
      { artist: "DJ set 6", start: "17:00", end: "18:30" },
      { artist: "DJ set 7", start: "18:30", end: "21:00" },
      { artist: "DJ set 8", start: "21:00", end: "23:45" },
    ],
  },
];

const selectedDay = ref("22nov");

const stageRows = computed(() => {
  const data = selectedDay.value === "22nov" ? stages : stages2;
  return data.map((stage) => {
    let cells = [];
    let currentTime = toMinutes(timeColumns[0]);
    let colIdx = 0;

    for (const event of stage.events) {
      const eventStart = toMinutes(event.start);
      const eventEnd = toMinutes(event.end);

      while (colIdx < timeColumns.length && currentTime < eventStart) {
        const nextColTime = toMinutes(timeColumns[colIdx + 1] || "24:00");
        if (nextColTime <= eventStart) {
          cells.push({ empty: true });
          currentTime = nextColTime;
          colIdx++;
        } else {
          break;
        }
      }

      let span = 0;
      let spanTime = currentTime;
      while (colIdx + span < timeColumns.length && spanTime < eventEnd) {
        const nextColTime = toMinutes(
          timeColumns[colIdx + span + 1] || "24:00"
        );
        if (nextColTime <= eventEnd) {
          span++;
          spanTime = nextColTime;
        } else {
          span++;
          break;
        }
      }

      cells.push({
        artist: event.artist,
        time: `${event.start} - ${event.end}`,
        colspan: span > 0 ? span : 1,
      });

      currentTime = toMinutes(timeColumns[colIdx + span] || "24:00");
      colIdx += span;
    }

    while (colIdx < timeColumns.length) {
      cells.push({ empty: true });
      colIdx++;
    }

    return { name: stage.name, cells };
  });
});

function toMinutes(str) {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
}

const artistInfo = computed(() => {
  if (!selectedArtist.value) return "";
  if (locale.value === "nl") return selectedArtist.value.info_nl;
  return selectedArtist.value.info_en;
});
</script>

<template>
  <div class="w-full max-w-6xl mx-auto px-2 dark:bg-gray-600">
    <div class="flex flex-col ml-6 justify-center h-10">
      <h1 class="font-bold text-2xl">
        {{ t("scheme")
        }}<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">{{ t("schemeText2") }}</h1>
    </div>

    <div class="w-full flex justify-center my-8">
      <div class="w-full max-w-xs">
        <div class="relative">
          <select
            id="day-select"
            v-model="selectedDay"
            class="block w-full appearance-none bg-white dark:bg-gray-300 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2 pr-10 transition duration-150 ease-in-out shadow-sm"
          >
            <option value="22nov">22 nov</option>
            <option value="23nov">23 nov</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto no-scrollbar rounded-2xl">
      <table
        class="min-w-full bg-white dark:bg-gray-300 border border-gray-200 rounded-lg shadow"
      >
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-300 text-center">
            <th class="py-3 px-2 border-b border-gray-200"></th>
            <th
              v-for="col in timeColumns"
              :key="col"
              class="py-3 px-2 border-b border-gray-200"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in stageRows" :key="row.name">
            <th
              class="py-2 px-2 text-left font-semibold border-b border-gray-100"
            >
              {{ row.name }}
            </th>
            <template v-for="(cell, idx) in row.cells" :key="idx">
              <td
                v-if="!cell.empty"
                :colspan="cell.colspan"
                class="bg-blue-100 text-blue-900 font-semibold text-center rounded-xl align-top border-b border-gray-100 cursor-pointer"
                @click="openModal(cell.artist)"
              >
                {{ cell.artist }}<br />
                <span class="text-xs font-normal">{{ cell.time }}</span>
              </td>
              <td v-else class="border-b border-gray-100"></td>

              <transition name="modal">
                <div
                  v-if="showModal"
                  class="fixed inset-0 bg-gray-100 dark:bg-gray-500 flex items-center justify-center z-50"
                  @click.self="closeModal"
                >
                  <transition name="modal-content">
                    <div v-if="showModal" class="px-6">
                      <div
                        class="bg-white dark:bg-gray-300 rounded-2xl p-5 max-w-md w-full relative"
                      >
                        <button
                          class="absolute top-2 right-4 text-4xl"
                          @click="closeModal"
                        >
                          <span class="material-symbols-rounded"> cancel </span>
                        </button>
                        <div class="flex-col py-3">
                          <div class="flex gap-6">
                            <img
                              v-if="selectedArtist"
                              class="rounded-2xl w-32 h-32 object-cover"
                              :src="getImg(selectedArtist.img)"
                              alt="Artist"
                            />
                            <div class="flex-col pb-4 pt-6">
                              <h2
                                class="text-2xl font-bold flex overflow-x-auto"
                              >
                                {{ selectedArtist?.name }}
                              </h2>
                              <div
                                class="bg-gray-200 dark:bg-gray-300 rounded-xl text-xs py-1 w-16 text-center mt-2.5"
                              >
                                <span class="mr-1">{{
                                  selectedArtist?.month
                                }}</span>
                                <span>{{ selectedArtist?.day }}</span>
                              </div>
                            </div>
                          </div>
                          <div v-if="selectedArtist?.youtube" class="mt-4">
                            <lite-youtube
                              :videoid="getYoutubeId(selectedArtist.youtube)"
                              style="
                                width: 100%;
                                aspect-ratio: 16/9;
                                border-radius: 0.75rem;
                              "
                              params="autoplay=1"
                            ></lite-youtube>
                          </div>
                          <p class="mt-4">{{ artistInfo }}</p>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </transition>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
