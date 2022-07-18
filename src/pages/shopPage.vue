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
        <q-img class="default-image" :src="product.image"> </q-img>
        <div class="q-pa-md">
          <span class="title-font">{{ product.title }}</span>
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
            <a :href="product.reviews.link" class="link-font"
              >Based on {{ product.reviews.count }} reviews</a
            >
          </div>
        </div>
        <hr class="default-separator" />
        <div class="row q-px-xl q-py-sm q-gutter-sm">
          <span>Availabilty: </span>
          <span class="stock-font">{{
            product.reviews.availability ? "In Stock" : "Out of Stock"
          }}</span>
        </div>
        <hr class="default-separator" />
        <div class="row q-px-xl q-py-sm q-gutter-sm">
          <span>Price: </span>
          <q-select
            rounded
            outlined
            :options="product.prices"
            label="Rounded"
            style="width: 100px"
          />
        </div>
        <hr class="default-separator" />
        <div class="row q-px-xl q-py-sm q-gutter-sm">
          <span>Quantity: </span>
          <q-select
            class="default-select"
            rounded
            outlined
            v-model="model"
            :options="product.quanitiy"
            label="Rounded Filled"
          />
        </div>
        <hr class="default-separator" />
        <div class="q-py-sm text-center delivery-font">
          <span>{{ product.date }}</span>
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
export default {
  // name: 'ComponentName',
  data: function () {
    return {
      products: [
        {
          image:
            "https://soopermango.com/images/product-images/ratnagiri_shop3.jpg",
          title: "Alphonso - Badami Mango",
          reviews: {
            stars: 4,
            count: 51,
            link: "https://soopermango.com/alphonso#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery May 17, 2022 onwards",
        },
        {
          image:
            "https://soopermango.com/images/product-images/rajgira_shop.jpg",
          title: "Lalbagh Mango - Sindhura Mango",
          reviews: {
            stars: 3,
            count: 4,
            link: "https://soopermango.com/rajgira-lalbagh-mango#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery May 17, 2022 onwards",
        },
        {
          image:
            "https://soopermango.com/images/product-images/totapuri_shop.jpg",
          title: "Totapuri Mango",
          reviews: {
            stars: 5,
            count: 3,
            link: "https://soopermango.com/totapuri#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery May 17, 2022 onwards",
        },
        {
          image:
            "https://soopermango.com/images/product-images/apple_mango.jpg",
          title: "Romania Apple Mango",
          reviews: {
            stars: 4,
            count: 3,
            link: "https://soopermango.com/romania-apple-mango#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery June 1, 2022 onwards",
        },
        {
          image: "https://soopermango.com/images/product-images/neelam.jpg",
          title: "Neelam Mango",
          reviews: {
            stars: 0,
            count: 0,
            link: "https://soopermango.com/neelam#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery June 20, 2022 onwards",
        },
        {
          image:
            "https://soopermango.com/images/product-images/mallika_shop.jpg",
          title: "Mallika Mango",
          reviews: {
            stars: 0,
            count: 0,
            link: "https://soopermango.com/mallika#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery June 20, 2021 onwards",
        },
        {
          image: "https://soopermango.com/images/product-images/mulgoba.jpg",
          title: "Mulgoba Mango",
          reviews: {
            stars: 5,
            count: 3,
            link: "https://soopermango.com/mallika#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery June 20, 2021 onwards",
        },
        {
          image: "https://soopermango.com/images/product-images/benishan.png",
          title: "Mallika Mango",
          reviews: {
            stars: 0,
            count: 0,
            link: "https://soopermango.com/mallika#reviews",
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],
          date: "Delivery June 20, 2021 onwards",
        },
      ],
    };
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
  font: normal normal 500 24px/29px Thasadith, sans-serif;
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
</style>
