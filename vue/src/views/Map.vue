<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapImage from "../assets/kaart.svg";
import markerLocker from "../assets/marker_locker.svg";
import markerStage1 from "../assets/marker_stage1_ponton.svg";
import markerStage2 from "../assets/marker_stage2_the_lake.svg";
import markerStage3 from "../assets/marker_stage3_the_club.svg";
import markerStage4 from "../assets/marker_stage4_hangar.svg";
import markerIcecream from "../assets/icecream.svg";
import markerMerchandise from "../assets/marker_merchandise.svg";
import markerToilet from "../assets/toilet.svg";
import markerBar from "../assets/bar.svg";
import markerFA from "../assets/help.svg";
import markerFood from "../assets/food.svg";
import markerEntrance from "../assets/marker_begin.svg";
import userMarkerIcon from "../assets/userMarker.svg";

const { t } = useI18n();

const markers = [
  {
    pos: [180, 400],
    icon: markerLocker,
    label: "locker",
    text: "lockerTextmap",
  },
  {
    pos: [180, 505],
    icon: markerLocker,
    label: "locker",
    text: "lockerTextmap",
  },
  {
    pos: [370, 350],
    icon: markerStage1,
    label: "stage1",
    text: "ponton",
    size: [60, 60],
  },
  {
    pos: [320, 450],
    icon: markerIcecream,
    label: "icecream",
    text: "icecreamText",
  },
  {
    pos: [210, 300],
    icon: markerMerchandise,
    label: "merchandise",
    text: "merchText",
  },
  { pos: [210, 135], icon: markerToilet, label: "toilet", text: "toiletText" },
  { pos: [255, 205], icon: markerBar, label: "bar", text: "barText" },
  { pos: [360, 205], icon: markerFood, label: "food", text: "foodText" },
  {
    pos: [680, 311],
    icon: markerFA,
    label: "firstAid",
    text: "firstAidText",
    size: [38, 38],
  },
  {
    pos: [590, 535],
    icon: markerMerchandise,
    label: "merchandise",
    text: "merchText",
  },
  { pos: [545, 595], icon: markerFood, label: "food", text: "foodText" },
  {
    pos: [575, 665],
    icon: markerIcecream,
    label: "icecream",
    text: "icecreamText",
  },
  { pos: [695, 826], icon: markerToilet, label: "toilet", text: "toiletText" },
  { pos: [570, 865], icon: markerBar, label: "bar", text: "barText" },
  {
    pos: [536, 920],
    icon: markerStage2,
    label: "stage2",
    text: "lake",
    size: [60, 60],
  },
  {
    pos: [653, 1050],
    icon: markerIcecream,
    label: "icecream",
    text: "icecreamText",
  },
  {
    pos: [590, 1105],
    icon: markerMerchandise,
    label: "merchandise",
    text: "merchText",
  },
  {
    pos: [600, 1165],
    icon: markerStage3,
    label: "stage3",
    text: "club",
    size: [60, 60],
  },
  { pos: [695, 1215], icon: markerBar, label: "bar", text: "barText" },
  { pos: [695, 1370], icon: markerBar, label: "bar", text: "barText" },
  {
    pos: [795, 1400],
    icon: markerIcecream,
    label: "icecream",
    text: "icecreamText",
  },
  {
    pos: [810, 1515],
    icon: markerStage4,
    label: "stage4",
    text: "hangar",
    size: [60, 60],
  },
  { pos: [730, 1565], icon: markerToilet, label: "toilet", text: "toiletText" },
  {
    pos: [140, 1160],
    icon: markerEntrance,
    label: "entrance",
    text: "entranceText",
    size: [130, 130],
  },
];

onMounted(() => {
  const map = L.map("map", {
    crs: L.CRS.Simple,
    zoomControl: false,
    maxBounds: [
      [0, 0],
      [980, 1680],
    ],
    maxBoundsViscosity: 5.0,
  });
  map.fitBounds([
    [0, 0],
    [980, 1680],
  ]);
  if (window.innerWidth < 768) map.setZoom(0);
  map.setMinZoom(map.getZoom());
  L.imageOverlay(mapImage, [
    [0, 0],
    [980, 1680],
  ]).addTo(map);

  const icon = (url, size = [42, 42]) =>
    L.icon({
      iconUrl: url,
      iconSize: size,
      iconAnchor: [size[0] / 2, size[1] / 2],
      popupAnchor: [0, -size[1] / 2],
    });

  markers.forEach((m) =>
    L.marker(m.pos, { icon: icon(m.icon, m.size || [42, 42]) })
      .addTo(map)
      .bindPopup(`<b>${t(m.label)}</b><br>${t(m.text)}`)
  );

  let userMarker = L.marker([175, 1140], {
    icon: icon(userMarkerIcon, [48, 48]),
    zIndexOffset: 1000,
  })
    .addTo(map)
    .bindPopup(t("youAreHere") || "You are here");

  let currentPos = [175, 1140];
  function gpsToMapCoords(lat, lon) {
    return [170, 1160];
  }
  function animateMarker(to) {
    function step() {
      const [cx, cy] = currentPos,
        [tx, ty] = to;
      const dx = tx - cx,
        dy = ty - cy,
        dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 5) {
        currentPos = to;
        userMarker.setLatLng(to);
        return;
      }
      const stepSize = Math.max(3, dist);
      currentPos = [cx + (dx / dist) * stepSize, cy + (dy / dist) * stepSize];
      userMarker.setLatLng(currentPos);
      requestAnimationFrame(step);
    }
    step();
  }
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      (pos) =>
        animateMarker(
          gpsToMapCoords(pos.coords.latitude, pos.coords.longitude)
        ),
      () => {},
      { enableHighAccuracy: true, maximumAge: 0, timeout: 1000 }
    );
  }
});
</script>

<style scoped>
#map {
  height: calc(100vh - 105px);
  width: 100%;
  margin-top: -120px;
}
:deep(.leaflet-control-attribution) {
  display: none !important;
}
</style>
