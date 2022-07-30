<template>
  <div
    class="
      fullscreen
      bg-primary
      text-white text-center
      q-pa-md
      flex flex-center
    "
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-ma-xl"
        color="accent"
        text-color="black"
        icon="home"
        label="Home"
        to="/"
      />
    </div>
    <q-img
      src="~assets\background\404.jpg"
      class="header-image absolute-top"
      no-spinner
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

<style lang="scss" scoped>
.header-image {
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  filter: blur(3.5px);
}
</style>
