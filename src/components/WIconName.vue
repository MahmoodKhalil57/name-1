<template>
  <div class="row no-wrap no-padding no-margin">
    <div class="ct">
      <q-icon
        :size="addPx"
        class="ic"
        style="transform: translateX(-50%) rotate(-45deg)"
        name="fa-solid fa-apple-whole"
        color="positive"
      />
      <q-icon
        :size="addPx"
        class="ic"
        style="transform: translateY(-25%)"
        name="fa-solid fa-leaf"
        color="secondary"
      />
      <q-icon
        :size="addPx"
        class="ic"
        style="transform: translateX(50%)"
        name="fa-solid fa-carrot"
        color="warning"
      />
    </div>
    <div style="width: 50px; height: 50px"></div>
    <div class="">
      <div class="column items-center" :style="fontMultiplyer" dense>
        <span class="title text-no-wrap text-white"> FarmWeb </span>
        <span class="motto text-no-wrap text-white">
          we do mangos you eat them!
        </span>
      </div>
    </div>
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
.ct {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ic {
  position: absolute;
}
.title {
  // font size equals --font-multiplier multiplied by 2
  font-size: var(--header-size);
}
.motto {
  font-size: var(--motto-size);
}
</style>

