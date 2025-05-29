<script setup>
import { ref } from "vue";
const showAlgemeen = ref(false);
const showBereik = ref(false);
const showLocker = ref(false);
const showFAQ = ref(false);
const showGlu = ref(false);

const FESTIVAL_LAT = 52.07887103329403;
const FESTIVAL_LON = 5.059573437544879;

const openMap = (e) => {
  if (e) e.stopPropagation();
  const isApple = /iPhone|iPad|Macintosh/.test(navigator.userAgent);
  const url = isApple
    ? `http://maps.apple.com/?ll=${FESTIVAL_LAT},${FESTIVAL_LON}`
    : `https://www.google.com/maps?q=${FESTIVAL_LAT},${FESTIVAL_LON}`;
  window.open(url, "_blank");
};
</script>

<template>
  <div class="bg-gray-100 px-6 h-full pb-28 min-h-screen">
    <div class="flex flex-col justify-center h-10">
      <h1 class="font-bold text-2xl">
        Information<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">Information about U festival.</h1>
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
      <h1 class="text-2xl py-4 font-semibold">General & Contact</h1>
      <transition name="zoom">
        <div
          v-if="showAlgemeen"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showAlgemeen ? 'scale-100 opacity-100' : ''"
        >
          <p>
            The ❤️U Festival is for (new) students in the Utrecht region and
            complements the UIT.
          </p>
          <h2 class="font-semibold mt-4">Address</h2>
          <div>Location: Strijkviertel, Utrecht</div>
          <div class="mt-2">
            <span class="font-semibold">Navigation address:</span>
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
                Open in Maps
              </button>
            </div>
          </div>
          <div class="mt-4 font-semibold">Date & Opening Hours</div>
          <div>Saturday, 6 September 2025 - 12:00 to 23:00</div>
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
      <h1 class="text-2xl py-4 font-semibold">Accessibility</h1>
      <transition name="zoom">
        <div
          v-if="showBereik"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showBereik ? 'scale-100 opacity-100' : ''"
        >
          <h2 class="font-semibold mt-2">Bike</h2>
          <p>
            A large free bike parking area is available where you can leave your
            bike all day.
          </p>
          <br />
          <h2 class="font-semibold mt-2">Car</h2>
          <p>
            You can buy a parking ticket. Parking is available at P+R Papendorp
            — follow the signs “P online ticket.” Didn't buy a ticket in
            advance? You can buy one from the parking attendant on-site (PIN
            ONLY). Note: FULL=FULL.
          </p>
          <br />
          <h2 class="font-semibold mt-2">Public Transport</h2>
          <p>Coming by public transport to Lief? Plan your trip via 9292.nl.</p>
          <br />
          <h2 class="font-semibold mt-2">Shuttle Bus</h2>
          <p>
            From Utrecht Central Station, you can take our free shuttle bus to
            the festival grounds. You’ll find the bus at Mineurslaan at the
            station. Follow the white signs with black arrows and '❤️U
            Festival'. The bus runs to the festival between 12:00 and 19:00, and
            returns to the station starting at 21:00.
          </p>
          <br />
          <h2 class="font-semibold mt-2">Taxi + Kiss & Ride</h2>
          <p>
            Navigate to Strijkviertel, De Meern (Utrecht). Follow the signs
            "Kiss & Ride ❤️U Festival" when you're near the festival area.
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
      <h1 class="text-2xl py-4 font-semibold">Lockers</h1>
      <transition name="zoom">
        <div
          v-if="showLocker"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showLocker ? 'scale-100 opacity-100' : ''"
        >
          <p>
            Lockers are available on the festival grounds where you can safely
            store your belongings!
          </p>
          <br />
          <p>
            They fit 3 to 4 jackets. Good to know: you can open and close your
            locker as many times as you want throughout the day.
          </p>
          <br />
          <p>It is not possible to reserve a locker online.</p>
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
      <h1 class="text-2xl py-4 font-semibold">FAQ</h1>
      <transition name="zoom">
        <div
          v-if="showFAQ"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showFAQ ? 'scale-100 opacity-100' : ''"
        >
          <h2 class="font-semibold mt-2">I use medication. What now?</h2>
          <p>
            You're allowed to bring medication in a dosage needed for one day. A
            doctor’s note or medication passport is required. Security will
            review your documentation and check the medication. If necessary
            (e.g., in combination with alcohol), the first aid team may hold
            your medication, and you can only take it under their supervision.
          </p>
          <br />
          <h2 class="font-semibold mt-2">
            Can I leave the festival grounds temporarily?
          </h2>
          <p>
            Unfortunately not. To ensure the safety of all visitors, we cannot
            allow re-entry once you've left. We cannot monitor what happens
            outside or in what state someone may return. There are no
            exceptions. We have plenty of lounge areas, food stands, and bars to
            keep you entertained all day.
          </p>
          <br />
          <h2 class="font-semibold mt-2">Are there lockers?</h2>
          <p>Yes! You can rent medium and large lockers at the venue.</p>
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
      <h1 class="text-2xl py-4 font-semibold">Golden GLU</h1>
      <transition name="zoom">
        <div
          v-if="showGlu"
          id="info"
          class="pb-4 transition-all duration-300 origin-top scale-95 opacity-0"
          :class="showGlu ? 'scale-100 opacity-100' : ''"
        >
          <p>
            Students from GLU have special privileges during the festival and
            can be identified by a golden wristband.
          </p>
          <br />
          <p>
            With this golden wristband, they can use the golden toilets and the
            gold-marked bar points without waiting in line.
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
