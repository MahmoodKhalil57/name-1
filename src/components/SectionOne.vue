<template>
  <div>
    <div class="row q-pa-xl q-gutter-lg">
      <div class="column">
        <div class="q-pl-sm text-subtitle1 text-grey text-center">
          Data Scientist,<br />
          UIX Web Developer
        </div>
        <div class="row">
          <q-space />
          <q-avatar size="150px">
            <div>1</div>
          </q-avatar>
          <q-space />
        </div>
      </div>
      <div class="column">
        <q-space />
        <q-space />
        <div class="q-pt-xl text-h2 text-white align-center">
          Mahmood Ihab Khalil
        </div>
        <div class="text-grey text-h6 q-ml-lg">Learn it, get it done.</div>
      </div>
    </div>
    <div
      class="q-pt-xl text-center absolute"
      style="transform: translateX(450%) translateY(70px)"
    >
      <q-icon :name="icon" color="primary" size="80px" id="myDiv" ref="myDiv" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionOne",
  data() {
    return {
      y: 1,
      icon: "",
    };
  },
  watch: {
    // watching top-level property
    y(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`);
    },
  },
  methods: {
    load_arrow_animation() {
      this.delay(5000).then(() => (this.icon = "expand_less"));
    },
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    getOffset(el) {
      var _x = 0;
      var _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    },
  },
  created: function () {
    this.load_arrow_animation();
    this.y = this.getOffset(this.$refs.myDiv).top;
  },
};
</script>
