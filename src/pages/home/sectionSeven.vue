<template>
  <!--section 7-->
  <q-card-section class="text-white" style="z-index: 0">
    <q-img
      class="q-my-sm header-image absolute-top"
      src="~assets\background\pexels-james-wheeler-1592461.jpg"
      spinner-color="primary"
      spinner-size="82px"
      style="z-index: -1"
    />
    <!--flex container-->
    <div
      class="sectionContainer3 text-white q-my-xl q-pt-lg responsive"
      style="flex-wrap: wrap; justify-content: center"
    >
      <div class="sectionContainer3">
        <!--gridcontainer1-->
        <div
          class="text-white q-mr-xl default-grid"
          style="
            display: grid;
            grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
            grid-row-gap: 1.5vh;
          "
        >
          <div style="justify-self: start">
            <q-icon
              class="fa-regular fa-face-smile q-pt-md"
              style="transform: scale(3); left: 0.8vw"
            />
          </div>
          <h4 class="q-mt-sm" style="justify-self: start; font-size: 40px">
            5000
          </h4>
          <h5
            style="justify-self: start; font: size 17px; font-family: 'Verdana'"
          >
            HAPPY CUSTOMERS
          </h5>
        </div>
        <!--gridcontainer2-->
        <div
          class="text-white q-mr-xl default-grid"
          style="
            display: grid;
            grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
            grid-row-gap: 1.5vh;
          "
        >
          <div style="justify-self: start">
            <q-icon
              class="fa-tree fa-solid q-pt-md"
              style="transform: scale(3); left: 0.8vw"
            />
          </div>
          <h4 class="q-mt-sm" style="justify-self: start; font-size: 40px">
            1000
          </h4>
          <h5
            style="justify-self: start; font: size 17px; font-family: 'Verdana'"
          >
            MANGO TREES
          </h5>
        </div>
      </div>

      <div class="sectionContainer3">
        <!--gridcontainer3-->
        <div
          class="text-white q-mr-xl default-grid"
          style="
            display: grid;
            grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
            grid-row-gap: 1.5vh;
          "
        >
          <div style="justify-self: start">
            <q-icon
              class="fa-solid fa-earth-africa q-pt-md"
              style="transform: scale(3); left: 0.8vw"
            />
          </div>
          <h4 class="q-mt-sm" style="justify-self: start; font-size: 40px">
            14
          </h4>
          <h5
            style="justify-self: start; font: size 17px; font-family: 'Verdana'"
          >
            ACRES
          </h5>
        </div>
        <!--gridcontainer4-->
        <div
          class="text-white q-mr-xl default-grid"
          style="
            display: grid;
            grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
            grid-row-gap: 1.5vh;
          "
        >
          <div style="justify-self: start">
            <q-icon
              class="fa-brands fa-pagelines q-pt-md"
              style="transform: scale(3); left: 0.8vw"
            />
          </div>
          <h4 class="q-mt-sm" style="justify-self: start; font-size: 40px">
            100%
          </h4>
          <h5
            style="justify-self: start; font: size 17px; font-family: 'Verdana'"
          >
            CHEMICAL FREE
          </h5>
        </div>
      </div>
    </div>
  </q-card-section>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>


<style lang="scss">
.header-image {
  width: 100%;
  height: 105%;
  opacity: 1;
  filter: brightness(60%);
  z-index: 0;
}
.default-grid {
  text-align: left;
  width: 250px;
}
</style>
