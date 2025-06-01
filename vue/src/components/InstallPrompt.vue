<template>
  <div v-if="showInstallPrompt" class="install-modal">
    <div class="modal-content">
      <button class="close-btn" @click="closePrompt" aria-label="Close">
        &times;
      </button>
      <h2>Install this app</h2>
      <p class="instructions">
        For the best experience, install this app on your device.
      </p>
      <button class="install-btn" @click="installPWA">Install</button>
      <div style="margin-top: 1.5rem">
        <span style="display: block; margin-bottom: 0.5rem; color: #888">
          Install button not working?
        </span>
        <a href="/home" class="fallback-link" @click.prevent="closePrompt">
          Click this link
        </a>
      </div>
    </div>
    <div class="modal-backdrop" @click="closePrompt"></div>
  </div>
  <div v-else-if="showIOSPrompt" class="install-modal">
    <div class="modal-content">
      <button class="close-btn" @click="closePrompt" aria-label="Close">
        &times;
      </button>
      <h2>Install on iPhone/iPad</h2>
      <p class="instructions">
        Tap
        <img
          src="../assets/share-icon.svg"
          style="display: inline; width: 1.5em; vertical-align: middle"
        />
        then choose <b>Add to Home Screen</b>.
      </p>
      <div style="margin-top: 1.5rem">
        <span style="display: block; margin-bottom: 0.5rem; color: #888">
          Installation not working?
        </span>
        <a href="/home" class="fallback-link" @click.prevent="closePrompt">
          Click this link
        </a>
      </div>
    </div>
    <div class="modal-backdrop" @click="closePrompt"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const showInstallPrompt = ref(false);
const showIOSPrompt = ref(false);
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

function isAppInstalled() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

let deferredPrompt;
onMounted(() => {
  if (isAppInstalled()) return;

  if (isIOS) {
    // Only show iOS prompt if not installed
    showIOSPrompt.value = true;
    return;
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt.value = true;
  });
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt = null;
    showInstallPrompt.value = false;
  }
}

function closePrompt() {
  showInstallPrompt.value = false;
  showIOSPrompt.value = false;
}
</script>

<style scoped>
.install-modal {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 90vw;
  width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  z-index: 1001;
  text-align: center;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  transition: color 0.2s;
}
.close-btn:hover {
  color: #222;
}
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}
.instructions {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.install-btn {
  background: #247ba0;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}
.install-btn:hover {
  background: #195a75;
}
.fallback-link {
  display: block;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.2rem;
  color: #247ba0;
  text-decoration: underline;
}
</style>
