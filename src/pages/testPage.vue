<template>
  <q-page padding>
    <div>{{ products_full }}</div>
  </q-page>
</template>

<script>
import dataModel from "src/boot/dataModel";

export default {
  // name: 'PageName',
  mixins: [dataModel],
  data: function () {
    return {
      products_full: [],
    };
  },
  created() {
    this.getProducts("products_full").then((products_full) => {
      this.products_full = products_full;
    });
  },
};
</script>
