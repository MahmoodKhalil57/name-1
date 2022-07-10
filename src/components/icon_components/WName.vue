<template>
  <div class="column items-center" :style="fontMultiplyer">
    <div class="title text-no-wrap text-white">FarmWeb</div>
    <div class="motto text-no-wrap text-white">we do mangos you eat them!</div>
  </div>
</template>

<script>
export default {
  name: "WIconName",
  props: {
    iconSize: String,
  },
  computed: {
    addPx() {
      return this.iconSize + "em";
    },
    fontMultiplyer() {
      return {
        "--header-size": (this.iconSize * 3.3) / 5 + "em",
        "--motto-size": (this.iconSize * 1.4) / 5 + "em",
      };
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss">
.title {
  font-size: var(--header-size);
}
.motto {
  font-size: var(--motto-size);
}
</style>


