<template>
  <!-- Fourth Section -->
  <q-card-section class="sectionContainer">
    <!-- content -->
    <div id="child1" class="q-mt-md">
      <br /><br />
      <h4 class="sectionHeader1">Our Core Values</h4>
    </div>
    <div
      id="child2"
      class="row q-mt-xl"
      style="
        max-width: 1300px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        align-items: center;
        justify-content: center;
      "
    >
      <!--item-1-->
      <div id="item1">
        <q-img
          class="q-my-sm q-px-md annoying-image-1"
          src="~assets\home\section_four.jpg"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
      <!--item-2-->
      <div id="item2" class="annoying-text-1 q-px-md">
        <h4 class="gridHeader1">
          IMPROVING AGRICULTURE, IMPROVING LIVES, CULTIVATING NEW CROPS THROUGH
          INNOVATION.
        </h4>
        <p>
          At Pavana Vatika, we are a mindful bunch of agri enthusiasts who never
          lose touch with the impact our business creates as we walk our
          journey. From the soil we work on, to the people we work with, we
          account for every detail we encounter and create.
        </p>
      </div>
    </div>
    <br /><br />
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
