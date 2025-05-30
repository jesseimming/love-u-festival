<template>
  <div id="map"></div>
  <img
    :src="legendaImg"
    alt="Legenda"
    class="opacity-100 fixed top-4 right-4 w-33 bg-white/90 rounded-lg shadow p-2 z-[1001] select-none pointer-events-none"
  />
</template>

<script setup>
import legendaImg from "../assets/legenda.png";
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
import userMarkerIcon from "../assets/jiggy_user.png";
import artists from "../assets/artists.json";

const getImg = (img) => new URL(`../assets/${img}`, import.meta.url).href;

const { t } = useI18n();
const stageLabelToLocation = {
  stage1: "Mainstage",
  stage2: "The Lake",
  stage3: "The Club",
  stage4: "Hanggar",
};

function getArtistsByStage(stageLabel) {
  const location = stageLabelToLocation[stageLabel];
  if (!location) return [];
  return artists.filter((artist) => artist.location === location);
}

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

["stage1", "stage2", "stage3", "stage4"].forEach((stage) => {
  const marker = markers.find((m) => m.label === stage);
  if (marker) {
    marker.artists = getArtistsByStage(stage);
  }
});

const MAP_MIN = [0, 0];
const MAP_MAX = [980, 1680];
let currentPos = [175, 1140];

onMounted(() => {
  const map = L.map("map", {
    crs: L.CRS.Simple,
    zoomControl: false,
    maxBounds: [MAP_MIN, MAP_MAX],
    maxBoundsViscosity: 1.0,
  });

  map.fitBounds([MAP_MIN, MAP_MAX]);
  if (window.innerWidth < 768) map.setZoom(0);
  map.setMinZoom(map.getZoom());
  L.imageOverlay(mapImage, [MAP_MIN, MAP_MAX]).addTo(map);

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
      .bindPopup(() => {
        const title = `<b>${t(m.label)}</b><br>${t(m.text)}`;
        if (m.artists && m.artists.length > 0) {
          const artistList = m.artists
            .map(
              (a) => `
            <div style="margin-top: 6px; display: flex; align-items: center;">
              <img src="${getImg(a.img)}" alt="${
                a.name
              }" style="width: 30px; height: 30px; object-fit: cover; border-radius: 50%; margin-right: 8px;" />
              <span>${a.name}</span>
            </div>`
            )
            .join("");
          return `${title}<br>${artistList}`;
        }
        return title;
      })
  );

  const userMarker = L.marker(currentPos, {
    icon: icon(userMarkerIcon, [85, 65]),
    zIndexOffset: 1000,
  })
    .addTo(map)
    .bindPopup(t("youAreHere") || "You are here");

  let anchorCoords = null;
  let anchorMapPos = [...currentPos];

  function gpsToMapDelta(lat1, lon1, lat2, lon2) {
    const metersPerLat = 111320;
    const avgLat = (lat1 + lat2) / 2;
    const metersPerLon = (40075000 * Math.cos((avgLat * Math.PI) / 180)) / 360;
    return [(lat2 - lat1) * metersPerLat, (lon2 - lon1) * metersPerLon];
  }

  function smoothMove(start, end, steps = 10) {
    const interval = 100; // ms
    const deltaY = (end[0] - start[0]) / steps;
    const deltaX = (end[1] - start[1]) / steps;

    let i = 0;
    const moveStep = () => {
      if (i < steps) {
        currentPos[0] += deltaY;
        currentPos[1] += deltaX;
        currentPos[0] = Math.max(
          MAP_MIN[0],
          Math.min(MAP_MAX[0], currentPos[0])
        );
        currentPos[1] = Math.max(
          MAP_MIN[1],
          Math.min(MAP_MAX[1], currentPos[1])
        );
        userMarker.setLatLng(currentPos);
        i++;
        setTimeout(moveStep, interval);
      }
    };
    moveStep();
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        if (!anchorCoords) {
          anchorCoords = { latitude, longitude };
          anchorMapPos = [...currentPos];
          return;
        }
        const [deltaLat, deltaLon] = gpsToMapDelta(
          anchorCoords.latitude,
          anchorCoords.longitude,
          latitude,
          longitude
        );

        const MAP_SCALE = 1.5;
        let [y, x] = anchorMapPos;
        y += -deltaLat / MAP_SCALE;
        x += deltaLon / MAP_SCALE;

        const targetPos = [
          Math.max(MAP_MIN[0], Math.min(MAP_MAX[0], y)),
          Math.max(MAP_MIN[1], Math.min(MAP_MAX[1], x)),
        ];

        anchorMapPos = targetPos;
        smoothMove([...currentPos], targetPos);
      },
      (err) => {
        alert("Location permission denied or unavailable.");
        console.error(err);
      },
      { enableHighAccuracy: true, maximumAge: 500, timeout: 10000 }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
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
