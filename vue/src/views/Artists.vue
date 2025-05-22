<script setup>
import { ref } from "vue";
import artists from "../assets/artists.json";

const getImg = (img) => new URL(`../assets/${img}`, import.meta.url).href;

const showModal = ref(false);
const selectedArtist = ref(null);

function openModal(artist) {
  selectedArtist.value = artist;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
  selectedArtist.value = null;
}
</script>

<template>
  <div class="bg-gray-100">
    <div class="flex flex-col ml-6 justify-center h-10">
      <h1 class="font-bold text-2xl">
        Artists<span class="text-4xl font-bold text-vermilion">.</span>
      </h1>
      <h1 class="text-xs">Discover the artists at U Festival.</h1>
    </div>
    <div class="flex flex-col space-y-6 px-3 mt-6 pb-28">
      <div
        v-for="artist in artists"
        :key="artist.name"
        class="flex justify-center content-center bg-white w-full rounded-2xl px-4 py-6 cursor-pointer"
        @click="openModal(artist)"
      >
        <img class="rounded-2xl w-25 h-25" :src="getImg(artist.img)" />
        <div class="flex flex-col px-3">
          <h1 class="font-bold text-4xl">{{ artist.name }}</h1>
          <h1 class="text-xl">{{ artist.desc }}</h1>
          <div
            class="absolute right-6 mt-20 flex flex-col items-center text-vermilion text-sm font-bold"
          >
            <span>{{ artist.month }}</span>
            <span>{{ artist.day }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="modal">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black/45 flex items-center justify-center z-50"
        @click.self="closeModal"
      >
        <transition name="modal-content">
          <div v-if="showModal" class="px-6">
            <div class="bg-white rounded-2xl p-5 max-w-md w-full relative">
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
                    <h2 class="text-2xl font-bold flex overflow-x-auto">
                      {{ selectedArtist?.name }}
                    </h2>
                    <div
                      class="bg-gray-200 rounded-xl text-xs py-1 w-16 text-center mt-2.5"
                    >
                      <span class="mr-1">{{ selectedArtist?.month }}</span>
                      <span>{{ selectedArtist?.day }}</span>
                    </div>
                  </div>
                </div>
                <p class="mt-3">{{ selectedArtist?.info }}</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
