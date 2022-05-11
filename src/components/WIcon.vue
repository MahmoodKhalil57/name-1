<template>
  <avatar class="ct">
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
  </avatar>
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
</style>
