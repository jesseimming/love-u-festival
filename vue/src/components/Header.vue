<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

// Import images statically
import ukFlag from "../assets/uk.png";
import nlFlag from "../assets/nl.png";

const { locale } = useI18n();
const flag = computed(() => (locale.value === "en" ? ukFlag : nlFlag));

function toggleLanguage() {
  if (locale.value === "en") {
    locale.value = "nl";
  } else {
    locale.value = "en";
  }
}
</script>

<template>
  <header class="flex items-center h-30 bg-gray-100 px-6 relative">
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
