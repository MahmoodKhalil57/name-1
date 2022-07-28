<template>
  <!--pageContainer-->
  <q-page class="column content-center default-font">
    <!--Item1:header-->
    <span class="title-font text-center q-mt-xl"> Order now </span>
    <!--Item2:FlexRowContainer-->
    <div class="row q-pa-xl q-mb-xl q-gutter-lg justify-center flex-container">
      <!--5Items Of Item2: FlexColumnContainer -->
      <q-card
        class="flex-item column shadow-3"
        v-for="product in products"
        :key="product"
      >
        <a :href="product.link"
          ><q-img class="default-image" :src="product.images[0]"> </q-img
        ></a>
        <div class="q-pa-md">
          <span class="title-font">{{ product.name }}</span>
        </div>
        <div class="row align-center q-px-md q-pb-sm q-gutter-md">
          <div class="row flex-center">
            <q-icon
              name="fa-solid fa-star"
              class="yellow-icon"
              v-for="index in product.reviews.stars"
              :key="index"
            ></q-icon>
            <q-icon
              name="fa-regular fa-star"
              class="yellow-icon"
              v-for="index in 5 - product.reviews.stars"
              :key="index"
            ></q-icon>
          </div>
          <div class="row flex-center">
            <a :href="product.link + '#review'" class="link-font"
              >Based on {{ product.reviews.count }} reviews</a
            >
          </div>
        </div>
        <hr class="default-separator" />
        <div class="row q-px-xl q-py-sm q-gutter-sm">
          <span>Availabilty: </span>
          <span class="stock-font">{{
            product.availability ? "In Stock" : "Out of Stock"
          }}</span>
        </div>
        <hr class="default-separator" />
        <!--price-->
        <div
          class="row full-width flex-center justify-between q-px-xl q-py-sm q-gutter-sm"
        >
          <label for="framework">Price:</label>
          <select id="framework" class="select-round">
            <option
              style="text-align: center"
              v-for="price in product.prices"
              :key="price"
            >
              {{ price }}
            </option>
          </select>
        </div>
        <hr class="default-separator" />
        <!--quantity-->
        <div class="row full-width flex-center justify-between q-px-xl q-py-sm">
          <label>Quantity:</label>
          <select class="select-round">
            <option
              style="text-align: center"
              v-for="quanitiy in product.quanitiy"
              :key="quanitiy"
            >
              {{ quanitiy }}
            </option>
          </select>
        </div>
        <hr class="default-separator" />
        <div class="q-py-sm text-center delivery-font">
          <span>{{ product.desc_one }}</span>
        </div>
        <hr class="default-separator final-separator" />
        <div class="row q-pa-md justify-center buttons-background">
          <q-btn class="q-pa-sm q-ma-sm cart-button" no-caps>Add to Cart</q-btn>
          <q-btn class="q-pa-sm q-ma-sm buy-button" no-caps>Buy Now</q-btn>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import dataModel from "src/mixins/dataModel";

export default {
  // name: 'ComponentName',

  mixins: [dataModel],
  data: function () {
    return {
      products: [],
    };
  },
  methods: {
    set_search: function (search) {
      if (search) {
        var new_products = [];
        this.products.forEach((product) => {
          if (product.title.toLowerCase().includes(search)) {
            new_products.push(product);
          }
        });
        this.products = new_products;
      }
    },
  },
  beforeMount() {
    const search = window.location.href.split("?search=")[1];
    this.getProducts("products_full").then((products_full) => {
      this.products = products_full;
      this.set_search(search);
    });
  },
  setup() {
    return {
      model: ref(null),
    };
  },
};
</script>

<style lang="scss">
.flex-container {
  max-width: 2400px;
}
.title-font {
  font: normal normal 700 30px/36px Thasadith, sans-serif;
  color: #323648;
  text-transform: capitalize;
}
.link-font {
  text-decoration: none;
  font: normal normal 400 16px/24px Thasadith, sans-serif;
  color: #0056b3;
}
.default-font {
  font: normal normal 400 16px/24px Thasadith, sans-serif;
  color: #212529;
}
.stock-font {
  font: normal normal 400 16px/24px Thasadith, sans-serif;
  color: #ff0000;
}
.delivery-font {
  font: normal normal 100 13px/26px "Verdana", sans-serif;
  color: #707579;
}
.flex-item,
.buttons-background {
  width: 300px;
  height: 100%;
}
.default-image {
  width: 300px;
  height: 240px;
}
.cart-button {
  font: normal normal 100 16px/24px sans-serif;
  background-color: #ffc107;
  color: #212529;
  width: 106px;
}
.buy-button {
  font: normal normal 400 16px/24px arial;
  background-color: #28a745;
  color: #fff;

  width: 106px;
}
.yellow-icon {
  color: #ffd600;
}
.default-select {
  height: 10px;
}
.buttons-background {
  background-color: #ebebeb;
}
.default-separator {
  margin: auto;
  border: 0px;
  height: 1px;
  width: 85%;
  background-color: #e3e3e3;
}
.final-separator {
  width: 100%;
}
.select-round {
  width: 55%;
  height: 40px;
  border-color: $info;
  cursor: pointer;
  border-radius: 20px;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 7px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}
</style>
