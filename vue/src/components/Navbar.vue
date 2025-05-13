<template>
  <footer class="fixed bottom-7 left-1/2 transform -translate-x-1/2 z-50">
    <div
      class="bg-gray-100 rounded-full shadow-md px-6 py-2 flex items-center space-x-4 relative"
    >
      <div
        class="absolute w-13 h-13 bg-white rounded-full transition-transform duration-300"
        :style="{ transform: `translateX(${activeIndex * 4.2}rem)` }"
      ></div>

      <router-link
        v-for="(item, index) in navItems"
        :key="item.icon"
        @click="setActive(index)"
        :to="item.to"
        :class="{
          'bg-gray-300 text-white': activeIndex === index,
          'bg-white text-gray-600': activeIndex !== index,
        }"
        class="w-13 h-13 rounded-full flex items-center justify-center shadow hover:bg-gray-200 transition relative z-10"
      >
        <span class="material-symbols-rounded">{{ item.icon }}</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FooterNavbar",
  setup() {
    const navItems = [
      { to: "/", icon: "home" },
      { to: "/map", icon: "map" },
      { to: "/schedule", icon: "table_view" },
      { to: "/", icon: "info" },
    ];
    const activeIndex = ref(0);

    const setActive = (index) => {
      activeIndex.value = index;
    };

    return {
      navItems,
      activeIndex,
      setActive,
    };
  },
};
</script>
