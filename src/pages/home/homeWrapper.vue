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
import SectionOne from "src/pages/home/sectionOne.vue";
import SectionTwo from "src/pages/home/sectionTwo.vue";
import SectionThree from "src/pages/home/sectionThree.vue";
import SectionFour from "src/pages/home/sectionFour.vue";
import SectionFive from "src/pages/home/sectionFive.vue";
import SectionSix from "src/pages/home/sectionSix.vue";
import SectionSeven from "src/pages/home/sectionSeven.vue";
import SectionEight from "src/pages/home/sectionEight.vue";

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
