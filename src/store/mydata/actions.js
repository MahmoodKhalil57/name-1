import { api } from "boot/axios";

export async function updateProductsFromDatabase(state) {
  if (!state.productData) {
    try {
      let test = { task: "getProducts", payload: {} };
      let result = await api.post('api', test)
      console.log(result);
      state.commit("setProducts", result.data);
    } catch (ignore) { }
  }
}

export async function addNewProductToDatabase(state) {
  if (!state.productData) {
    try {
      let test = {
        task: "setProducts",
        payload: {
          "name": "Rajgira Lalbagh Mango",
          "shares": 0,
          "desc_one": "Delivery May 17, 2022 onwards",
          "title_two": "Lalbagh Mango - Sindhura Mango",
          "description": "Rajgira in some parts of Karnataka known as lalbagh mango and as sindhoora mango in most parts of India. The term 'sindhoora' came about due to its vermillion shade that resembles Sindoor. It is also known as 'Honey Mango' because of its exceptional flavor and sweetness.",
          "prices": [
            "₹650 - 3kg"
          ],
          "link": "/rajgira-lalbagh-mango",
          "health_benefits": [
            "Presence of rich anti-oxidants makes Rajgira an effective fighter against cancer.",
            "Prevents heart related ailments",
            "Fights inflammation"
          ],
          "nutrients": "Vitamin C",
          "title_one": "Sooper Lalbagh Mango - Sindhura Mango",
          "product_code": "PD1009",
          "images": [
            "https://soopermango.com/images/product-images/D804CE5B-985B-49B2-9BBE-172AEE9C2E00.jpeg",
            "https://soopermango.com/images/product-images/rajgira_shop.jpg",
            "https://soopermango.com/images/product-images/sindhura_boxed.jpg"
          ],
          "color": [
            "Green with a tinge of red"
          ],
          "quanitiy": [
            1,
            2,
            3,
            4,
            5
          ],
          "availabilty": false,
          "reviews": { "stars": 5, "count": 1 }
        },
      };
      await api.post('api', test)
      await updateProductsFromDatabase(state);
    } catch (ignore) { }
  }
}
