<template>
  <div id="map" ref="mapContainer"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapImage from '../assets/kaart.svg'; 
import markerLocker from '../assets/marker_locker.svg';
import markerStage1 from '../assets/marker_stage1_ponton.svg';
import markerStage2 from '../assets/marker_stage2_the_lake.svg';
import markerStage3 from '../assets/marker_stage3_the_club.svg';
import markerStage4 from '../assets/marker_stage4_hangar.svg';
import markerIcecream from '../assets/icecream.svg';
import markerMerchandise from '../assets/marker_merchandise.svg';
import markerToilet from '../assets/toilet.svg';
import markerBar from '../assets/bar.svg';
import markerFA from '../assets/help.svg';
import markerFood from '../assets/food.svg';

export default {
  name: 'Map',
  mounted() {
    const mapWidth = 1680;
    const mapHeight = 980;
    const bounds = [[0, 0], [mapHeight, mapWidth]];

    this.map = L.map(this.$refs.mapContainer, {
      crs: L.CRS.Simple,
      zoomControl: false,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0, 
    });

    this.map.fitBounds(bounds);
    const zoom = this.map.getZoom();

    this.map.setMinZoom(zoom);

    L.imageOverlay(mapImage, bounds).addTo(this.map);

    const locker = L.icon({
      iconUrl: markerLocker,
      iconSize: [55, 55],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    })

    const stage1 = L.icon({
      iconUrl: markerStage1,
      iconSize: [60, 60],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const stage2 = L.icon({
      iconUrl: markerStage2,
      iconSize: [55, 55],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const stage3 = L.icon({
      iconUrl: markerStage3,
      iconSize: [55, 55],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const stage4 = L.icon({
      iconUrl: markerStage4,
      iconSize: [55, 55],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const icecream = L.icon({
      iconUrl: markerIcecream,
      iconSize: [42, 42],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const merch = L.icon({
      iconUrl: markerMerchandise,
      iconSize: [42, 42],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const toilet = L.icon({
      iconUrl: markerToilet,
      iconSize: [42, 42],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const bar = L.icon({
      iconUrl: markerBar,
      iconSize: [42, 42],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const fa = L.icon({
      iconUrl: markerFA,
      iconSize: [38, 38],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    const food = L.icon({
      iconUrl: markerFood,
      iconSize: [42, 42],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25]
    });

    L.marker([130, 1160])
      .addTo(this.map)
      .openPopup();

    L.marker([180, 400], { icon: locker })
      .addTo(this.map)
      .bindPopup('<b>Locker</b><br>Put your personal belongings away.')
      .openPopup();

    L.marker([180, 505  ], { icon: locker })
      .addTo(this.map)
      .bindPopup('<b>Locker</b><br>Put your personal belongings away.')
      .openPopup();
  
  L.marker([370, 350  ], { icon: stage1 })
      .addTo(this.map)
      .bindPopup('<b>Stage 1</b><br>Ponton')
      .openPopup();

  L.marker([320, 450  ], { icon: icecream })
      .addTo(this.map)
      .bindPopup('<b>Icecreams</b><br>Get your icecream here!')
      .openPopup();

  L.marker([210, 300  ], { icon: merch })
      .addTo(this.map)
      .bindPopup('<b>Merchandise</b><br>Get your U-Merch here!')
      .openPopup();

  L.marker([210, 135  ], { icon: toilet})
      .addTo(this.map)
      .bindPopup('<b>Toilet</b><br>Make sure to stay fresh!')
      .openPopup();

  L.marker([255, 205  ], { icon: bar})
      .addTo(this.map)
      .bindPopup('<b>Bar</b><br>You can get your drinks here!')
      .openPopup();

  L.marker([360, 205  ], { icon: food})
      .addTo(this.map)
      .bindPopup('<b>Food</b><br>Grab a bite to eat!')
      .openPopup();

  L.marker([680, 311  ], { icon: fa})
      .addTo(this.map)
      .bindPopup('<b>First Aid</b><br>If you need help, go here!')
      .openPopup();

  L.marker([590, 535  ], { icon: merch})
      .addTo(this.map)
      .bindPopup('<b>Merchandise</b><br>Get your U-Merch here!')
      .openPopup();

  L.marker([545, 595  ], { icon: food})
      .addTo(this.map)
      .bindPopup('<b>Food</b><br>Grab a bite to eat!')
      .openPopup();
  
  L.marker([575, 665  ], { icon: icecream})
      .addTo(this.map)
      .bindPopup('<b>Icecreams</b><br>Get your icecream here!!')
      .openPopup();
  L.marker([695, 826  ], { icon: toilet})
      .addTo(this.map)
      .bindPopup('<b>Toilet</b><br>Make sure to stay fresh!')
      .openPopup();
  L.marker([570, 865  ], { icon: bar})
      .addTo(this.map)
      .bindPopup('<b>Bar</b><br>You can get your drinks here!')
      .openPopup();
  L.marker([536, 920  ], { icon: stage2})
      .addTo(this.map)
      .bindPopup('<b>Stage 2</b><br>The Lake')
      .openPopup();
   L.marker([653, 1050  ], { icon: icecream})
      .addTo(this.map)
      .bindPopup('<b>Icecreams</b><br>Get your icecream here!!')
      .openPopup();
    L.marker([590, 1105  ], { icon: merch})
      .addTo(this.map)
      .bindPopup('<b>Merchandise</b><br>Get your U-Merch here!')
      .openPopup();
    L.marker([600, 1165  ], { icon: stage3})
      .addTo(this.map)
      .bindPopup('<b>Stage 3</b><br>The Club')
      .openPopup();
    L.marker([695, 1215  ], { icon: bar})
      .addTo(this.map)
      .bindPopup('<b>Bar</b><br>You can get your drinks here!')
      .openPopup(); 
    L.marker([695, 1370  ], { icon: bar})
      .addTo(this.map)
      .bindPopup('<b>Bar</b><br>You can get your drinks here!')
      .openPopup(); 
    L.marker([795, 1400  ], { icon: icecream})
      .addTo(this.map)
      .bindPopup('<b>Icecreams</b><br>Get your icecream here!!')
      .openPopup(); 
    L.marker([810, 1515  ], { icon: stage4})
      .addTo(this.map)
      .bindPopup('<b>Stage 4</b><br>Hangar')
      .openPopup(); 
    L.marker([730, 1565  ], { icon: toilet})
      .addTo(this.map)
      .bindPopup('<b>Toilet</b><br>Make sure to stay fresh!')
      .openPopup(); 
  }
  
};
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
