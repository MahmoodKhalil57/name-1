<template>
  <q-page padding>
    <div>{{ products_full }}</div>
  </q-page>
</template>

<script>
import { collection, getDocs } from "firebase/firestore/lite";
import db from "src/boot/firebase";

export default {
  // name: 'PageName',
  data: function () {
    return {
      products_full: [],
    };
  },
  methods: {
    getProducts: async function (db) {
      const productsCol = collection(db, "products_full");
      const prodSnapshot = await getDocs(productsCol);
      const prodList = prodSnapshot.docs.map((doc) => doc.data());
      this.products_full = prodList;
    },
  },
  created() {
    this.getProducts(db);
  },
};
</script>
