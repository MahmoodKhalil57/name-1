<template>
  <div class="fullscreen flex flex-center">
    <div class="fullscreen bg el" style="z-index: -1"></div>
    <div class="el">
      <WIcon icon-size="10" class="no-filter" />

      <div>
        <div class="q-mt-xl q-pt-xl text-h3 text-white text-center text-bold">
          Coming Soon!
        </div>
        <br />
        <div class="text-h6 text-grey-3 text-center">
          We are working hard to get this webpage running as soon as
          possible,<br />
          stay tuned! -Dev team
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

<style lang="scss">
.bg {
  background-image: url("/background/pexels-maksim-goncharenok-4597121.jpg");
  background-position: 0px -1550px;
  object-fit: fill;
  filter: blur(3.5px);
}
.no-filter {
  filter: unset !important;
}
.el {
  position: absolute;
}
</style>
<!-- ---------------------------------

<template>
  <div class="ct">
    <q-img class="bg my-custom-image el" />
    <div class="el column">
      <WIcon class="col" icon-size="10" />
      <div class="col">
        <div class="text-h3 text-white text-center text-bold" size="xl">
          Coming Soon!
        </div>
        <br />
        <div class="text-grey-3 text-center" size="xl">
          We are working hard to get this webpage running as soon as
          possible,<br />
          stay tuned! -Dev team
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
};
</script>

<style lang="scss">
.bg {
  background-image: url("/background/pexels-maksim-goncharenok-4597121.jpg");
  object-fit: fill;
  filter: blur(3.5px);
}
.ct {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el {
  position: absolute;
}
.ph {
  position: relative;
}
.title {
  // font size equals --font-multiplier multiplied by 2
  font-size: var(--header-size);
}
.motto {
  font-size: var(--motto-size);
}
</style> -->
