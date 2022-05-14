<template>
  <div class="fullscreen flex flex-center">
    <q-img
      src="~assets\background\pexels-maksim-goncharenok-4597121.jpg"
      class="header-image absolute-top"
    />
    <div class="el">
      <a href="/" class="q-my-lg rlu">
        <WIcon icon-size="10" class="no-filter logo_offset q-my-xl" />
      </a>

      <div>
        <div class="q-mt-xl q-pt-xl text-h3 text-white text-center text-bold">
          Coming Soon!
        </div>
        <br />
        <div class="text-h6 text-grey-3 text-center">
          We are working hard to get this webpage running as soon as <br />
          possible, stay tuned! -Dev team
        </div>
      </div>
      <q-toolbar class="q-py-lg row justify-center">
        <q-btn
          color="accent"
          text-color="black"
          icon="home"
          label="Home"
          href="/"
          style="z-index: 1"
        />
      </q-toolbar>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComingSoon",
});
</script>

<style lang="scss">
.logo_offset {
  transform: translateX(3%) translateY(50%);
}
.header-image {
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  filter: blur(3.5px);
}
.el {
  position: absolute;
}
.rlu:link,
rlu:visited,
rlu:hover,
rlu:active {
  text-decoration: none;
}
</style>

