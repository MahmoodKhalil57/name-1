<template>
  <q-card class="transparent no-shadow" horizontal>
    <q-card-section horizontal>
      <q-card-section class="ct q-ml-xl col-3 no-padding">
        <q-icon
          :size="addPx"
          class="ic"
          style="transform: translateX(50%) rotate(-45deg)"
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
          style="transform: translateX(-50%)"
          name="fa-solid fa-carrot"
          color="warning"
        />
      </q-card-section>
      <q-card-section class="no-padding">
        <div
          class="column items-center no-margin"
          :style="fontMultiplyer"
          dense
        >
          <span class="title no-margin text-no-wrap text-white"> FarmWeb </span>
          <span class="motto no-margin text-no-wrap text-gray">
            we do mangos you eat them!
          </span>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
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
  position: relative;
}
.title {
  // font size equals --font-multiplier multiplied by 2
  font-size: var(--header-size);
}
.motto {
  font-size: var(--motto-size);
}
</style>

