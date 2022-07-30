import { api } from "boot/axios";


export async function updateProductsFromDatabase(state) {
  // TODO : add caching
  console.log("1");
  if(!state.productData) {
    console.log("2");
    await api.get('/products').then(result => {
      state.commit("setProducts", result.data);
    });
  }
}
