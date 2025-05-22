<template>
  <div class="fixed inset-0 z-0">
    <div id="map" class="w-full h-full"></div>
    <img
      src=""
      alt="Legenda"
      class="fixed top-2 right-2 w-45 sm:w-32 md:w-40 h-auto bg-white bg-opacity-80 opacity-80 rounded-xl shadow-lg p-1 sm:p-2 z-[9999] pointer-events-none"
    />
  </div>
</template>

../assets/legenda.png

<script setup>
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { onMounted } from "vue";
import L from "leaflet";


onMounted(() => {
  const imageUrl = new URL(
    "../assets/kaart_festival_markers.png",
    import.meta.url
  ).href;
  const imageBounds = [
    [0, 0],
    [2700, 3000],
  ];

  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomControl: true,
    maxBounds: imageBounds,
    maxBoundsViscosity: 1.0,
  });

  L.imageOverlay(imageUrl, imageBounds).addTo(map);
  map.fitBounds(imageBounds);

  const gpsSW = [52.076, 5.104];
  const gpsNE = [52.08, 5.108];

  function gpsToImage(lat, lng) {
    const y =
      ((lat - gpsSW[0]) / (gpsNE[0] - gpsSW[0])) *
      (imageBounds[1][0] - imageBounds[0][0]);
    const x =
      ((lng - gpsSW[1]) / (gpsNE[1] - gpsSW[1])) *
      (imageBounds[1][1] - imageBounds[0][1]);
    return [y, x];
  }

  const staticLat = 52.0765492573543;
  const staticLng = 5.106763085436363;
  const staticCoords = gpsToImage(staticLat, staticLng);

  // Place the user marker
  L.marker(staticCoords).addTo(map).bindPopup("You are here!").openPopup();
});
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
