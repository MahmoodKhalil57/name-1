<template>
  <div class="col ct">
    <q-icon :size="multFac" class="ph" name="" />
    <avatar class="ct">
      <q-icon
        :size="addPx"
        class="ic"
        style="transform: translateX(-25%) translateY(15%) rotate(-45deg)"
        name="fa-solid fa-apple-whole"
        color="positive"
      />
      <q-icon
        :size="addPx"
        class="ic"
        style="transform: translateX(-75%)"
        name="fa-solid fa-leaf"
        color="light-green-14"
      />
      <q-icon
        :size="addPx"
        class="ic"
        style="transform: translateX(-125%) translateY(15%)"
        name="fa-solid fa-carrot"
        color="warning"
      />
    </avatar>
  </div>
</template>

<script>
export default {
  name: "WIcon",
  props: {
    iconSize: String,
  },
  computed: {
    addPx() {
      return this.iconSize + "em";
    },
    multFac() {
      return this.iconSize * 1.4 + "em";
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
}
.ic {
  position: relative;
}
</style>
