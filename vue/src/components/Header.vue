<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import ukFlag from "../assets/uk.png";
import nlFlag from "../assets/nl.png";

const { locale } = useI18n();
const flag = computed(() => (locale.value === "en" ? ukFlag : nlFlag));

const darkMode = ref(false);

onMounted(() => {
  darkMode.value =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  setDarkMode(darkMode.value);
});

function toggleLanguage() {
  if (locale.value === "en") {
    locale.value = "nl";
  } else {
    locale.value = "en";
  }
}

function setDarkMode(isDark) {
  const html = document.documentElement;
  darkMode.value = isDark;
  if (isDark) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
}
</script>

<template>
  <header
    class="flex items-center h-30 dark:bg-gray-600 bg-gray-100 px-6 relative"
  >
    <div
      class="flex rounded-4xl bg-white/90 w-12 h-10 justify-center align-center"
    >
      <span
        v-if="!darkMode"
        class="material-symbols-outlined cursor-pointer"
        style="font-size: 40px"
        @click="setDarkMode(true)"
      >
        dark_mode
      </span>
      <span
        v-else
        class="material-symbols-outlined cursor-pointer"
        style="font-size: 40px"
        @click="setDarkMode(false)"
      >
        light_mode
      </span>
    </div>
    <img
      class="w-15 h-10 absolute right-6 cursor-pointer"
      :src="flag"
      :alt="locale === 'en' ? 'UK' : 'NL'"
      @click="toggleLanguage"
    />
    <img
      class="w-23 h-23 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      src="../assets/logo.png"
      alt="Logo"
    />
  </header>
</template>
