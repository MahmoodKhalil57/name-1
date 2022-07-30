<template>
  <!--pageContainer-->
  <q-page class="column content-center default-font">
    <!--Item1:header-->
    <span class="title-font text-center q-mt-xl"> Order now </span>
    <!--Item2:FlexRowContainer-->
    <div class="row q-pa-xl q-mb-xl q-gutter-lg justify-center flex-container" v-if="products">
      <!--5Items Of Item2: FlexColumnContainer -->
      <q-card
        class="flex-item column shadow-3"
        v-for="product in products"
        :key="product"
      >
        <router-link class="link-font" :to="{ path: product.link }">
          <q-img class="default-image" :src="product.images[0]"> </q-img>
        </router-link>
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
            <router-link class="link-font" :to="{ path: product.link + '#review' }">Based on {{ product.reviews.count }} reviews</router-link>
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
          <span>{{ product.desc_one }}</span>
        </div>
        <hr class="default-separator final-separator" />
        <div class="row q-pa-md justify-center buttons-background full-width">
          <q-btn class="q-pa-sm q-ma-sm cart-button" no-caps>Add to Cart</q-btn>
          <q-btn class="q-pa-sm q-ma-sm buy-button" no-caps>Buy Now</q-btn>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapGetters , mapActions } from "vuex";

export default {
  name: 'shopPage',
  data: function () {
    return {
      products : [],
    };
  },
  computed: {
    ...mapGetters({products_full : ('mydata/getProducts')}),
    },
  methods: {
    ...mapActions({
      updateProducts: 'mydata/updateProductsFromDatabase'
    }),
    set_search: function (search) {
      if (search) {
        var new_products = [];
        this.products_full.forEach((product) => {
          if (product.name.toLowerCase().includes(search)) {
            new_products.push(product);
          }
        });
        this.products = new_products;
      }
      else{
        this.products = this.products_full;
      }
    },
  },
  watch: {
    "$route.query.search"(search) {
      this.set_search(search);
    }
  },
  created() {
    this.updateProducts().then(() => {
      this.set_search(this.$route.query.search);
    });
  },
  setup() {
    return {
      model: ref(null),
    };
  },
};
</script>

<style lang="scss" scoped>
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
  width: 100%;
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
