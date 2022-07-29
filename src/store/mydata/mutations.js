import { api } from "boot/axios";

export function getProducts(state, item) {
  console.log("request sent");
  api.get('/products').then(response => {
    console.log("1");
    state.productData = response.data;
  });
  console.log("2");
}

export function doThat(state, item) {
  console.log(item);
  state.userData = item;

  // state.userData = item;
}
