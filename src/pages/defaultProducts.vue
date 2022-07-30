<template>
  <q-page

    class="column flex-center"
    v-if="products_full && current_product"

  >
    <div class=" q-pa-lg content-center page-top">
      <!-- Title -->
      <div class="column text-center q-mb-xl q-mt-sm">
        <span class="header-title">{{
          products_full[current_product].title_one
        }}</span>
        <span class="sub-title">{{
          products_full[current_product].desc_one
        }}</span>
      </div>
      <!-- Product -->
      <div
        class="
          row
          justify-center
          no-margin no-padding
          q-gutter-md
          product_container
        "
      >
        <!-- Images (left) <--/  ---   /-->
        <div class="col-4 q-ma-md column bg-wolf">
          <q-dialog class="dialog-bg justify-between" v-model="alert">
            <div class="no-shadow" v-if="current_image > 0">
              <q-btn
                class="default-button"
                round
                color="black"
                icon="fa-solid fa-angle-left"
                @click="current_image--"
              />
            </div>
            <q-space />
            <img
              class="selected_image zoomed-in"
              :src="products_full[current_product].images[current_image]"
              style="
                border-style: solid;
                border-width: 2px;
                border-color: aliceblue;
                box-shadow: 10px 10px 800px 80px #000;
              "
            />
            <q-space />
            <div
              class="no-shadow"
              v-if="
                current_image < products_full[current_product].images.length - 1
              "
            >
              <q-btn
                class="default-button"
                round
                color="black"
                icon="fa-solid fa-angle-right"
                @click="current_image++"
              />
            </div>
          </q-dialog>
          <img
            class="q-pa-sm selected_image zoom-without-container point-img-zoom"
            :src="products_full[current_product].images[current_image]"
            @click="alert = true"
          />
          <div class="row q-pa-sm q-gutter-md image_group">
            <img
              class="single_image"
              :src="image"
              v-for="(image, index) in products_full[current_product].images"
              :key="image"
              @click="this.current_image = index"
            />
          </div>
        </div>
        <!-- vertical separator -->
        <div class="vr"></div>
        <!-- Info (right)-->
        <div class="col-7 column">
          <div>
            <span class="product-title">{{
              products_full[current_product].title_two
            }}</span>
          </div>
          <div class="row align-center q-pb-sm q-gutter-md">
            <div class="row flex-center">
              <q-icon
                name="fa-solid fa-star"
                class="yellow-icon"
                v-for="index in products_full[current_product].reviews.stars"
                :key="index"
              ></q-icon>
              <q-icon
                name="fa-regular fa-star"
                class="yellow-icon"
                v-for="index in 5 - products_full[current_product].reviews.stars"
                :key="index"
              ></q-icon>
            </div>
            <div class="row flex-center">
              <router-link to="#review" class="link-font"
                >Based on
                {{ products_full[current_product].reviews.count }} reviews</router-link
              >
            </div>
          </div>
          <div class="column q-py-sm q-gutter-sm">
            <span class="product_header">Price</span>
            <q-select
              rounded
              outlined
              :options="products_full[current_product].prices"
              label="Rounded"
              style="width: 100px"
            />
          </div>
          <div class="column q-py-sm q-gutter-sm">
            <span class="product_header">Availabilty</span>
            <span class="stock-font">{{
              products_full[current_product].reviews.availability
                ? "In Stock"
                : "Out of Stock"
            }}</span>
          </div>
          <div class="column q-py-sm q-gutter-sm">
            <span class="product_header">Quantity</span>
            <q-select
              class="default-select"
              rounded
              outlined
              v-model="model"
              :options="products_full[current_product].quanitiy"
              label="Rounded Filled"
            />
          </div>
          <div class="row q-gutter-md q-py-md">
            <q-btn class="q-pa-sm cart-button" no-caps>Add to Cart</q-btn>
            <q-btn class="q-pa-sm buy-button" no-caps>Buy Now</q-btn>
          </div>

          <hr class="default_hr" />

          <div class="column q-py-sm q-gutter-sm">
            <div><span class="product_header">Product Code</span></div>
            <div>
              <span class="product_content">{{
                products_full[current_product].product_code
              }}</span>
            </div>
          </div>

          <div class="column q-py-sm q-gutter-sm">
            <div><span class="product_header">Description</span></div>
            <div>
              <span class="product_content">{{
                products_full[current_product].description
              }}</span>
            </div>
          </div>

          <div class="column q-py-sm q-gutter-sm">
            <div><span class="product_header">Nutrients</span></div>
            <div>
              <span class="product_content">{{
                products_full[current_product].nutrients
              }}</span>
            </div>
          </div>

          <div class="column q-py-sm q-gutter-sm">
            <div><span class="product_header">Health Benefits</span></div>
            <div>
              <ul class="default-list">
                <li
                  class="product_content"
                  v-for="benefit in products_full[current_product]
                    .health_benefits"
                  :key="benefit"
                >
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>

          <div class="column q-py-sm q-gutter-sm">
            <div><span class="product_header">Color</span></div>
            <div>
              <span class="product_content">{{
                products_full[current_product].color.join(", ")
              }}</span>
            </div>
          </div>

          <hr class="default_hr" />

          <div class="row justify-center q-my-md">
            <div
              class="column align-center content-center"
              v-if="products_full[current_product].shares"
            >
              <div class="hay-font-a-zook">
                {{ products_full[current_product].shares + "K" }}
              </div>
              <div class="hay-font-a-zook-2 q-pr-md">Shares</div>
            </div>

            <q-separator />
            <q-btn color="lime" icon="fa-solid fa-share-nodes" label="share" />
          </div>
        </div>
      </div>
      <!-- Reviews -->
      <div class="q-pt-lg q-gutter-md full-width">
        <div class="text-center">
          <span class="rating_title" id="review">Ratings & Reviews</span>
        </div>
        <q-separator style="opacity: 0" />
        <div
          class="text-center"
          v-if="!products_full[current_product].reviews.review_array.length"
        >
          <span class="login-text"
            >Please <router-link class="link-font" to="/login">login</router-link> & order to write
            a review</span
          >
        </div>
        <q-separator style="opacity: 0" />
        <div
          class="row justify-around review-container no-margin"
          v-for="review in products_full[current_product].reviews.review_array"
          :key="review"
        >
          <div class="column justify-center">
            <!--Reviews:name-->
            <span class="hay-font-a-zook-3">{{ review.name }}</span>
            <!--Reviews:date-->
            <span class="hay-font-a-zook-3 q-mt-xs">{{ review.date }}</span>
            <!--Reviews:location-->
            <span class="hay-font-a-zook-4">{{ review.location }}</span>
          </div>
          <div
            class="column fit justify-center content-end"
            style="max-width: 633.825px"
          >
            <!--Reviews:stars-->
            <span>
              <q-icon
                name="fa-solid fa-star"
                class="yellow-icon"
                v-for="index in review.stars"
                :key="index"
              ></q-icon>
              <q-icon
                name="fa-regular fa-star"
                class="yellow-icon hay-font-a-zook-stars"
                v-for="index in 5 - review.stars"
                :key="index"
              ></q-icon>
            </span>
            <!--Reviews:content-->
            <span class="hay-font-a-zook-3">{{ review.content }}</span>
          </div>
        </div>
      </div>
    </div>
  <!-- More Products -->
    <div class="column content-center q-mt-lg q-gutter-md bg-grey-4 full-width items-stretch no-padding">
      <div class="text-center">
        <span class="more_title">More Products</span>
      </div>
      <div class="row flex-center q-pa-md q-gutter-xl full-width items-stretch no-padding" v-if="more_products">
        <q-card
          class="column shadow-3"
          v-for="product in more_products"
          :key="product"
        >
          <router-link :to="products_full[product].link" @click="current_product = product">
            <q-img class="default-image" :src="products_full[product].images[0]" />
          </router-link>
          <div class="q-pa-md">
            <span class="name-font">{{ products_full[product].name }}</span>
          </div>
          <div class="row align-center q-px-md q-pb-sm q-gutter-md">
            <div class="row flex-center">
              <q-icon
                name="fa-solid fa-star"
                class="yellow-icon"
                v-for="index in products_full[product].reviews.stars"
                :key="index"
              ></q-icon>
              <q-icon
                name="fa-regular fa-star"
                class="yellow-icon"
                v-for="index in 5 - products_full[product].reviews.stars"
                :key="index"
              ></q-icon>
            </div>
            <div class="row flex-center">
              <router-link class="link-font" :to="{ path: products_full[product].link + '#review' }"  @click="current_product = product">
                Based on {{ products_full[product].reviews.count }} reviews
              </router-link>

            </div>
          </div>
          <hr class="default-separator" />
          <div class="row q-px-xl q-py-sm q-gutter-sm">
            <span>Availabilty: </span>
            <span class="stock-font">{{
              products_full[product].reviews.availability
                ? "In Stock"
                : "Out of Stock"
            }}</span>
          </div>
          <hr class="default-separator" />
          <div class="row q-px-xl q-py-sm q-gutter-sm">
            <span>Price: </span>
            <q-select
              rounded
              outlined
              :options="products_full[product].prices"
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
              :options="products_full[product].quanitiy"
              label="Rounded Filled"
            />
          </div>
          <hr class="default-separator final-separator" />
          <div class="row q-pa-md justify-center buttons-background">
            <q-btn class="q-pa-sm q-ma-sm cart-button" no-caps>Add to Cart</q-btn>
            <q-btn class="q-pa-sm q-ma-sm buy-button" no-caps>Buy Now</q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapGetters , mapActions } from "vuex";

export default {
  // name: 'PageName',
  data: function () {
    return {
      current_product: null,
      current_image: 0,
      more_products: [],
    };
  },
  computed: {
    ...mapGetters({products_full : ('mydata/getProducts')}),
    },

  methods: {
    ...mapActions({
      updateProducts: 'mydata/updateProductsFromDatabase'
    }),

    set_product: function () {
<<<<<<< HEAD
      // const product_order = [
      //   "Alphonso",
      //   "Rajgira Lalbagh Mango",
      //   "Totapuri",
      //   "Romania Apple Mango",
      //   "Neelam",
      //   "Malika",
      //   "Mulgoba",
      //   "Banganapalli",
      // ];

=======
>>>>>>> name-1/main
      this.products_full.forEach((item,index) => {
        if (item.name === this.$route.meta.current) {
          this.current_product = index
        }
      });

      // product_order.forEach((item, index) => {
      //   if (this.$route.meta.current === item) {
      //     this.current_product = index;
      //   }
      // });
    },
    set_more: function () {
      var rand_products = [];
      for (let i = 0; i < 3; i++) {
        if (rand_products.length + 1 < this.products_full.length) {
          var rand = Math.floor(Math.random() * this.products_full.length);
          while (rand == this.current_product || rand_products.includes(rand)) {
            rand = Math.floor(Math.random() * this.products_full.length);
          }
          rand_products.push(rand);
        }
      }
      this.more_products = rand_products;
    },
    onClick: function () {
      this.add();
    },
  },
  created() {
    this.updateProducts().then(() => {
      this.set_product();
      this.set_more();
    });
  },
  setup() {
    return {
      alert: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped>
.vr {
  border-left: 1px solid rgb(187, 187, 187);
  margin-bottom: 15px;
}
.product_container {
  max-width: 1140px;
}
.selected_image {
  max-width: 100%;
}
.image_group {
  max-width: 100%;
}
.single_image {
  width: 100px;
  height: 100px;
}
.product_container {
  border: 1px solid #dee2e6;
  border-radius: 5px;
}
.lg_img_container {
  border-radius: 7px;
}
.yellow-icon {
  padding-right: 5px;
  color: #ffd600;
}
.header-title {
  font: normal normal 700 30px/36px Thasadith, sans-serif;
  color: #323648;
}
.sub-title {
  font: normal normal 400 24px/29px Thasadith, sans-serif;
  color: #323648;
}
.link-font {
  text-decoration: none;
  font: normal normal 400 16px/24px roboto, sans-serif;
  color: #0058b7;
}
.product-title {
  font: normal normal 700 28px/34px Thasadith, sans-serif;
  color: #323648;
}
.hay-font-a-zook {
  font: normal normal 500 16px/17px "Helvetica Neue", Verdana, Helvetica, Arial,
    sans-serif;
  color: #555555;
}
.hay-font-a-zook-2 {
  font: normal normal 500 9px/9px "Helvetica Neue", Verdana, Helvetica, Arial,
    sans-serif;
  color: #555555;
}
.product_header {
  font: normal normal 700 16px/24px roboto, sans-serif;
  color: #212529;
}
.product_content {
  font: normal normal 400 16px/24px roboto, sans-serif;
  color: #212529;
}
.stock-font {
  font: normal normal 400 16px/24px roboto, sans-serif;
  color: #ff0000;
}
.rating_title {
  font: normal normal 500 24px/29px thasadith, sans-serif;
  color: #323648;
}
.more_title {
  font: normal normal 600 30px/36px thasadith, sans-serif;
  color: #323648;
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
.default_hr {
  border: none;
  height: 1px;
  color: rgb(200, 200, 200);
  background-color: rgb(200, 200, 200);
}
.default-list {
  list-style-position: inside;
  list-style-type: "➡";
}
/* Point-zoom Container */
.point-img-zoom img {
  transform-origin: 65% 75%;
  transition: transform 1s, filter 0.5s ease-out;
}
/* The Transformation */
.point-img-zoom:hover img {
  transform: scale(5);
} /* Without Container */
.zoom-without-container {
  transition: transform 0.2s; /* Animation */
  margin: 0 auto;
}
.zoom-without-container img {
  width: 100%;
  height: auto;
}
.zoom-without-container:hover {
  transform: scale(1.5);
  /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.zoomed-in {
  max-width: 100%;
  max-height: 100%;
}
.dialog-bg {
  background-color: rgba(0, 0, 0, 0.7);
}
.review-container {
  border: 1px solid #dee2e6;
  border-radius: 5px;
}
.hay-font-a-zook-3 {
  font: normal normal 100 17px/34px verdana;
  color: rgb(112, 117, 121);
}
.hay-font-a-zook-4 {
  font: ilalic normal 400 16px/24px Roboto, sans-serif;
  color: rgb(33, 37, 41);
}
.hay-font-a-zook-stars {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgb(255, 214, 0);
}
.bg-lime {
  background-color: #95d03a;
}
.bg-wolf {
  background: #eeeeee;
}
.default-image {
  width: 300px;
  height: 240px;
}
.default-separator {
  margin: auto;
  border: 0px;
  height: 1px;
  width: 85%;
  background-color: #e3e3e3;
}
.name-font {
  font: normal normal 500 24px/29px Thasadith, sans-serif;
  color: #323648;
  text-transform: capitalize;
}
.default-button {
  border: 2px solid white;
}
.login-text {
  font: normal normal 400 16px/24px roboto, sans-serif;
  color: #212529;
}
<<<<<<< HEAD
=======
.pointer:hover {
  cursor: pointer;
}
.zoom-in-pointer:hover {
  cursor: zoom-in;
}
>>>>>>> name-1/main
.page-top{
  max-width:70%;
}
</style>
