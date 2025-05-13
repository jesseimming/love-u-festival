<template>
  <header class="flex items-center justify-center h-40">
    <div class="rounded-sm w-17 h-17 mr-5 bg-gray-50 dark:bg-black">
      <img id="switch" src="../assets/dark.svg" />
    </div>

    <img
      class="w-27 h-27 items-center justify-center"
      src="../assets/logo.png"
    />

    <div class="rounded w-17 h-17 ml-5 bg-gray-50">
      <img class="scale-80" src="../assets/dutch.svg" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
