<template>
  <!--Fifth Section-->
  <q-card-section
    class="text-white sectionContainer responsive"
    style="z-index: 0"
  >
    <!-- content -->
    <h4
      class="responsive my-text sectionContainer3 q-mt-xl q-mb-md"
      style="z-index: 1"
    >
      The Best Time To
      <span class="willo q-mx-sm">Get Healthy</span>
      is Now.
    </h4>

    <p
      class="q-mx-xl text-center text-h6"
      style="z-index: 1; color: #707579; line-height: 2; width: 55vw"
    >
      The aim of PavanaVatika's innovation in agriculture is to produce high
      quality, nutritious crop that contributes to preventive health care and
      well-being. With improved taste, flavour and nourishment, the benefits of
      healthy crops are multipronged. It's a natural complement to a healthier
      life-style, and builds a stronger immunity to prevent health complications
      caused by chemically grown crops.
    </p>
    <q-img
      class="q-my-sm header-image absolute-top"
      src="~assets\home\section_5.jpg"
      spinner-color="primary"
      spinner-size="82px"
      style="z-index: -1"
    />
    <div class="sectionContainer2 q-mb-md q-mt-sm">
      <q-btn
        class="q-mr-md"
        style="background: #e8cd30; color: #333; height: 7vh; width: 20vh"
        >Shop now</q-btn
      >
      <q-btn
        class="text-white q-ml-md"
        style="background: #009f4d; height: 7vh; width: 20vh"
        >Contact us</q-btn
      >
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
.my-text {
  z-index: 2;
}
.header-image {
  width: 100%;
  height: 105%;
  opacity: 1;
  filter: brightness(60%);
  z-index: 0;
}
</style>
