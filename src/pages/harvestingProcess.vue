<template>
  <!--pageContainer-->
  <q-page class="column content-center">
    <!--Item1:header-->
    <span class="header-title text-center q-mt-xl">
      Process of Harvesting & Packing Mangoes
    </span>
    <!--Item2:FlexRowContainer-->
    <div class="row q-pa-xl q-mb-xl q-gutter-lg justify-center flex-container">
      <!--5Items Of Item2: FlexColumnContainer -->
      <div
        class="flex-item column q-gutter-md"
        v-for="step in process"
        :key="step"
      >
        <span class="green-13 q-pl-xs id-fonts" style="">{{ step.id }}</span>
        <span class="step text-center title-fonts" style="">
          {{ step.title }}
        </span>
        <span class="desc q-px-md q-pb-lg text-center content-fonts" style="">
          {{ step.content }}
        </span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'ComponentName',
  data: function () {
    return {
      process: [
        {
          id: "01",
          title: "Picking & Plucking",
          content:
            "On a fresh summer early morning, physiologically matured mangoes are hand picked and plucked along with the stem to avoid milky sap.",
        },
        {
          id: "02",
          title: "Field Containers",
          content:
            "Plucked mangoes are washed in hot water and placed in field containers in order to move to the ripening chamber.",
        },
        {
          id: "03",
          title: "Ripening Chamber",
          content:
            "Mangoes are then transported to ripening chamber which is equipped with humidity, temperature, and air circulation controllers.",
        },
        {
          id: "04",
          title: "Grading",
          content:
            "The mature, well formed, decay free mangoes are hand picked. The mangoes are then graded and sorted based on weight, spots, size and color.",
        },
        {
          id: "05",
          title: "Packaging",
          content:
            "Carbide free, naturally ripened sooper mangoes are customized and packed in corrugated boxes. Your special delivery is on its way now.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-item {
  border-style: solid;
  border-width: 1px;
  max-width: 300px;
  height: 100%;
}

.flex-container {
  max-width: 1200px;
}
.title-fonts {
  font: normal normal 900 22px/42px Thasadith, sans-serif;
  color: #323648;
  text-transform: uppercase;
}
.content-fonts {
  font: normal normal 100 17px/34px Verdana;
  color: #707579;
}

.id-fonts {
  font: normal normal 700 24px/36px Roboto, sans-serif;
  color: #009f4d;
}

.header-title {
  font: normal normal 700 30px/36px Thasadith, sans-serif;
  color: #323648;
}
</style>
