<script setup>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import InstallPrompt from "./components/InstallPrompt.vue";
</script>

<template>
  <Header />
  <InstallPrompt />
  <router-view />
  <Navbar />
</template>

<script>
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

localStorage.theme = "light";

localStorage.theme = "dark";

localStorage.removeItem("theme");
</script>
