<template>
  <div class="ct">
    <q-icon
      v-bind="$attrs"
      class="ic q-ma-xl"
      style="transform: translateX(-50%) rotate(-45deg)"
      name="fa-solid fa-apple-whole"
      color="positive"
    />
    <q-icon
      v-bind="$attrs"
      class="ic q-ma-xl"
      style="transform: translateY(-25%)"
      name="fa-solid fa-leaf"
      color="secondary"
    />
    <q-icon
      v-bind="$attrs"
      class="ic q-ma-xl"
      style="transform: translateX(50%)"
      name="fa-solid fa-carrot"
      color="warning"
    />
  </div>

  <slot></slot>
</template>

<script>
export default {
  name: "WIcon",
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
</style>
