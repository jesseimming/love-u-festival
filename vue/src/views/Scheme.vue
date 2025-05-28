<style scoped>
.scale-125 {
  font-size: 125%;
}
.scale-150 {
  font-size: 150%;
}
.scale-175 {
  font-size: 175%;
}
</style>

<script setup>
import { computed } from "vue";

const timeColumns = [
  "10:00","10:30", "11:00","11:30", "12:00","12:30", "13:00","13:30", "14:00","14:30", "15:00","15:30", "16:00",
  "16:30","17:00","17:30", "18:00","18:30", "19:00","19:30", "20:00","20:30", "21:00","21:30", "22:00","22:30", "23:00","23:30", "00:00"
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
      { artist: "Froukje", start: "22:00", end: "23:45" }
    ]
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
    ]
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
  ]
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
      { artist: "DJ set 8", start: "21:30", end: "23:45" }
    ]
  }
];

function toMinutes(str) {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
}

const stageRows = computed(() => {
  return stages.map(stage => {
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
        const nextColTime = toMinutes(timeColumns[colIdx + span + 1] || "24:00");
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
        colspan: span > 0 ? span : 1
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
</script>

<template>
  <div class="w-full max-w-6xl mx-auto px-2 py-8">
    <div class="flex flex-col ml-6 justify-center h-10">
      <h1 class="font-bold text-2xl">
        Scheme<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">The festival scheme at U Festival.</h1>
    </div>

    <div> 
      <h1>dropdown menu</h1>
    </div>
    
    <div class="overflow-x-auto py-10 no-scrollbar rounded-2xl">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr class="bg-gray-100 text-center">
            <th class="py-3 px-2 border-b border-gray-200"></th>
            <th v-for="col in timeColumns" :key="col" class="py-3 px-2 border-b border-gray-200">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in stageRows" :key="row.name">
            <th class="py-2 px-2 text-left font-semibold border-b border-gray-100">{{ row.name }}</th>
            <template v-for="(cell, idx) in row.cells" :key="idx">
              <td
                v-if="!cell.empty"
                :colspan="cell.colspan"
                class="bg-blue-100 text-blue-900 font-semibold text-center rounded-xl align-top border-b border-gray-100"
              >
                {{ cell.artist }}<br>
                <span class="text-xs font-normal">{{ cell.time }}</span>
              </td>
              <td
                v-else
                class="border-b border-gray-100"
              ></td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>