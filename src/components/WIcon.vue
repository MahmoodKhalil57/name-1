<template>
  <div class="ct">
    <q-icon
      calss="ic"
      style="transform: translateX(75px) rotate(-45deg)"
      name="fa-solid fa-apple-whole"
      size="140px"
      color="positive"
    />
    <q-icon
      calss="ic"
      style="transform: translateY(-25px)"
      name="fa-solid fa-leaf"
      size="140px"
      color="secondary"
    />
    <q-icon
      calss="ic"
      style="transform: translateX(-75px)"
      name="fa-solid fa-carrot"
      size="140px"
      color="warning"
    />
  </div>
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
