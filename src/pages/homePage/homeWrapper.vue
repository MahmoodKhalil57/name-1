<template>
  <q-page class="text-center">
    <q-card>
      <section-one />

      <section-two />

      <section-three />

      <section-four />

      <section-five />

      <section-six />

      <section-seven />

      <section-eight />
    </q-card>
  </q-page>
</template>

<script>
import SectionOne from "src/pages/homePage/sectionOne.vue";
import SectionTwo from "src/pages/homePage/sectionTwo.vue";
import SectionThree from "src/pages/homePage/sectionThree.vue";
import SectionFour from "src/pages/homePage/sectionFour.vue";
import SectionFive from "src/pages/homePage/sectionFive.vue";
import SectionSix from "src/pages/homePage/sectionSix.vue";
import SectionSeven from "src/pages/homePage/sectionSeven.vue";
import SectionEight from "src/pages/homePage/sectionEight.vue";

export default {
  name: "PageName",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
  },
};
</script>
