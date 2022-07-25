
import db from "src/boot/firebase";
import { collection, getDocs, setDoc } from 'firebase/firestore/lite';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default {
  methods: {
    async getProducts(col) {
      const productsCol = collection(db, col);
      const prodSnapshot = await getDocs(productsCol);
      const products_full = prodSnapshot.docs.map((doc) => doc.data());
      return products_full;
    },
    async setProducts(col, data) {
      const productsCol = collection(db, col);
      const prodSnapshot = await setDoc(productsCol, data);
      const products_full = prodSnapshot.docs.map((doc) => doc.data());
      return products_full;
    }
  }
};
