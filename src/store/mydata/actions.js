import { api } from "boot/axios";

export async function updateProductsFromDatabase(state) {
  if(!state.productData) {
    await api.get('/products').then(result => {
      state.commit("setProducts", result.data);
    });
  }
}
