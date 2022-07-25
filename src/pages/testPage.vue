<template>
  <q-page padding>
    <div>{{ products_full }}</div>
  </q-page>
</template>

<script>
import dataModel from "src/mixins/dataModel";

export default {
  // name: 'PageName',
  mixins: [dataModel],
  data: function () {
    return {
      products_full: [],
    };
  },
  created() {
    this.getProducts("products_full").then((result) => {
      this.products_full = result;
    });
  },
};
</script>
