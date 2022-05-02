<template>
  <div class="q-gutter-md">
    <div class="row justify-between">
      <q-parallax :speed="0.45" :height="1000">
        <template v-slot:media>
          <img
            class="my-custom-image"
            src="\background\pexels-maksim-goncharenok-4597121.jpg"
          />
        </template>

        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              top: scope.percentScrolled * 60 + '%',
              left: 0,
              right: 0,
            }"
          >
            <div class="q-gutter">
              <q-icon
                style="transform: translateX(75px) rotate(-45deg)"
                name="fa-solid fa-apple-whole"
                size="140px"
                color="positive"
              />
              <q-icon
                style="transform: translateY(-25px)"
                name="fa-solid fa-leaf"
                size="140px"
                color="secondary"
              />
              <q-icon
                style="transform: translateX(-75px)"
                name="fa-solid fa-carrot"
                size="140px"
                color="warning"
              />
            </div>

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
        </template>
      </q-parallax>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style lang="scss">
.my-custom-image {
  filter: blur(3.5px);
}
</style>
