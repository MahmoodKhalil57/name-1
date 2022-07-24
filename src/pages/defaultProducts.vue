<template>
  <q-page class="column content-center page_container" padding>
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
      class="row justify-between no-margin no-padding q-gutter-md product_container"
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
            @click="set_image(index)"
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
            <a href="#review" class="link-font"
              >Based on
              {{ products_full[current_product].reviews.count }} reviews</a
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
    <div class="q-mt-lg q-gutter-md">
      <div class="text-center">
        <span class="rating_title" id="review">Ratings & Reviews</span>
      </div>
      <q-separator style="opacity: 0" />
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
  </q-page>
  <!-- More Products -->
  <div class="column content-center q-mt-lg q-gutter-md bg-grey-4 full-width">
    <div class="text-center">
      <span class="more_title">More Products</span>
    </div>
    <div class="row content-center q-pa-md q-gutter-xl">
      <q-card
        class="flex-item column shadow-3"
        v-for="product in more_products"
        :key="product"
      >
        <a :href="products_full[product].link"
          ><q-img class="default-image" :src="products_full[product].images[0]">
          </q-img
        ></a>
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
            <a :href="products_full[product].link + '#review'" class="link-font"
              >Based on {{ products_full[product].reviews.count }} reviews</a
            >
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
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'PageName',
  data: function () {
    return {
      current_product: null,
      current_image: 0,
      more_products: [0, 1, 5],
      products_full: [
        {
          name: "Alphonso",
          link: "/alphonso",
          title_one: "Sooper Alphonso - Badami Mango",
          desc_one: "Delivery May 17, 2022 onwards",
          images: [
            "https://soopermango.com/images/product-images/ratnagiri_2.jpg",
            "https://soopermango.com/images/product-images/ratnagiri_shop.jpg",
            "https://soopermango.com/images/product-images/ratnagiri_3.jpg",
            "https://soopermango.com/images/product-images/ratnagiri_4.jpg",
          ],

          title_two: "Alphonso - Badami Mango",
          reviews: {
            stars: 4,
            count: 51,
            review_array: [
              {
                name: "Megha Bhaskar",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
              {
                name: "Omar Khorshid",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
            ],
          },
          availabilty: false,
          prices: ["₹900 - 3kg", "₹1500 - 6kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "AL1009",
          description:
            "Alphonso is a premium quality mango in terms of sweetness, richness, and flavour. It is famous for its unique fragrance and taste. Alphonso is considered as the king of mangoes. It must be noted that in India, it is an obsession during the season.",
          nutrients: "Vitamin A&B",
          health_benefits: [
            "Presence of rich anti-oxidants makes Alphonso an effective fighter against cancer.",
            "Presence of certain nutrients make Alphonso an effective fighter against problems related to respiratory system, digestive system, and skin related ailments.",
            "Research studies have shown that Alphonso can fight ailments like nephritis.",
            "Presence of iron makes Alphonso a must have for anaemic patients.",
          ],
          color: ["Saffron", "Yellow", "Golden"],
          shares: 2.4,
        },
        {
          name: "Rajgira Lalbagh Mango",
          link: "/rajgira-lalbagh-mango",
          title_one: "Sooper Lalbagh Mango - Sindhura Mango",
          desc_one: "Delivery May 17, 2022 onwards",
          images: [
            "https://soopermango.com/images/product-images/D804CE5B-985B-49B2-9BBE-172AEE9C2E00.jpeg",
            "https://soopermango.com/images/product-images/rajgira_shop.jpg",
            "https://soopermango.com/images/product-images/sindhura_boxed.jpg",
          ],

          title_two: "Lalbagh Mango - Sindhura Mango",
          reviews: {
            stars: 3,
            count: 4,
            review_array: [
              {
                name: "Megha Bhaskar",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
              {
                name: "Omar Khorshid",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
            ],
          },
          availabilty: false,
          prices: ["₹650 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "PD1009",
          description:
            "Rajgira in some parts of Karnataka known as lalbagh mango and as sindhoora mango in most parts of India. The term 'sindhoora' came about due to its vermillion shade that resembles Sindoor. It is also known as 'Honey Mango' because of its exceptional flavor and sweetness.",
          nutrients: "Vitamin C",
          health_benefits: [
            "Presence of rich anti-oxidants makes Rajgira an effective fighter against cancer.",
            "Prevents heart related ailments",
            "Fights inflammation",
          ],
          color: ["Green with a tinge of red"],
          shares: 0,
        },
        {
          name: "Totapuri",
          link: "/totapuri",
          title_one: "Sooper Totapuri Mango",
          desc_one: "Delivery May 17, 2022 onwards",
          images: [
            "https://soopermango.com/images/product-images/totapuri_2.jpg",
            "https://soopermango.com/images/product-images/totapuri_3.jpg",
          ],

          title_two: "Totapuri Mango",
          reviews: {
            stars: 5,
            count: 3,
            review_array: [
              {
                name: "Megha Bhaskar",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
              {
                name: "Omar Khorshid",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
            ],
          },
          availabilty: false,
          prices: ["₹550 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "TO1009",
          description:
            "Totapuri mangoes are also known by the following names: Bengalura, Sandarsha. The matured (ripe) totapuri mangoes are medium or large in size, with an oblong shape and a pointed base. The pointed beak like shape of the fruit fetched the name Totapuri. In Devanagiri language, parrot is referred to as Totatpuri. It must be noted that the by-products from Totapuri mangoes are of high nutritional value.",
          nutrients: "Vitamin A, E, C & B5",
          health_benefits: [
            "Presence of rich anti-oxidants makes Totapuri an effective fighter against cancer.",
            "Presence of certain nutrients make Totapuri an effective medicine for ailments related to the eye.",
            "Totapuri mangoes can be used to handle heart related ailments. ",
          ],
          color: ["Yellow", "Green", "or a mix of yellow and green"],
          shares: 0,
        },
        {
          name: "Romania Apple Mango",
          link: "/romania-apple-mango",
          title_one: "Sooper Romania Apple Mango",
          desc_one: "Delivery June 1, 2022 onwards",
          images: [
            "https://soopermango.com/images/product-images/45A29F20-5120-442D-B411-6D7BBB6879D8.jpeg",
            "https://soopermango.com/images/product-images/36D7F424-8A11-4752-8F5C-39916D09F665.jpeg",
            "https://soopermango.com/images/product-images/mug_shot.jpg",
            "https://soopermango.com/images/product-images/IMG_9558.jpg",
            "https://soopermango.com/images/product-images/IMG_9559.jpg",
          ],

          title_two: "Romania Apple Mango",
          reviews: {
            stars: 4,
            count: 3,
            review_array: [
              {
                name: "Megha Bhaskar",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
              {
                name: "Omar Khorshid",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
            ],
          },
          availabilty: false,
          prices: ["₹950 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "RA1009",
          description:
            "Mangoes of the Romanian kind are primarily farmed in North Andhra Pradesh also known as Rumani Mango. The tasty pulp is golden yellow in hue and the mature mango skin is yellowish green with a red tint at the top. It has a pulp that is sweet, juicy, and low in fibre. Romanian mangoes are also high in vitamins A and C. These are primarily used as table fruit, but they can also be used to make a variety of mango cocktails, such as smoothies.",
          nutrients: "Vitamin A & C",
          health_benefits: ["Helps in digestion"],
          color: ["Yellowish green"],
          shares: 0,
        },
        {
          name: "Neelam",
          link: "/neelam",
          title_one: "Sooper Neelam Mango",
          desc_one: "Delivery June 20, 2022 onwards",
          images: ["https://soopermango.com/images/product-images/neelam.jpg"],

          title_two: "Neelam Mango",
          reviews: {
            stars: 0,
            count: 0,
            review_array: [],
          },
          availabilty: false,
          prices: ["₹500 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "NE1009",
          description:
            "Neelam is a south indian mango variety, widely grown throughout the country and in China. The Neelam is known for its availability. Neelam mangoes are perfectly shaped - large, oblong, and pointed base.",
          nutrients: "Dietary Fiber and Proteins",
          health_benefits: [
            "Presence of rich anti-oxidants makes Neelam an effective fighter against cancer.",
            "Prevents heart related ailments",
          ],
          color: ["mooth-skinned and bright yellow upon ripening."],
          shares: 0,
        },
        {
          name: "Mallika",
          link: "/mallika",
          title_one: "Sooper Mallika Mango",
          desc_one: "Delivery June 20, 2021 onwards",
          images: [
            "https://soopermango.com/images/product-images/mallika_shop.jpg",
            "https://soopermango.com/images/product-images/mallika_1.jpg",
          ],

          title_two: "Mallika Mango",
          reviews: {
            stars: 0,
            count: 0,
            review_array: [],
          },
          availabilty: false,
          prices: ["₹500 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "MA1009",
          description:
            "Mallika is a hybrid variety of mangoes that is born out of combining Neelam and Dasheri varieties of mangoes. It must be noted that this variety is picked up as raw mangoes (green), and then ripened by maintaining them at room temperature. The process of ripening typically takes 2 to 3 weeks. Mallika happens to be a semi - dwarf variety of mango that is from India.",
          nutrients: "Vitamin A & B",
          health_benefits: [
            "Presence of rich anti-oxidants makes Mallika an effective fighter against cancer.",
            "Presence of certain nutrients make Mallika an effective medicine for ailments related to the eye.",
            "Improves the digestive system",
            "Increased immunity system",
            "Plays a key role in fighting stroke",
          ],
          color: ["Saffron", "Yellow", "Golden", "Green"],
          shares: 0,
        },
        {
          name: "Mulgoba",
          link: "/mulgoba",
          title_one: "Sooper Mulgoba Mango",
          desc_one: "Delivery June 20, 2022 onwards",
          images: [
            "https://soopermango.com/images/product-images/mulgoba.jpg",
            "https://soopermango.com/images/product-images/mulgoba_2.jpg",
          ],

          title_two: "Mulgoba Mango",
          reviews: {
            stars: 5,
            count: 3,
            review_array: [
              {
                name: "Megha Bhaskar",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
              {
                name: "Omar Khorshid",
                date: "18-May-2022",
                location: "Bengaluru, Karnataka",
                stars: 5,
                content:
                  "Awesome and tasty mangoes which was enjoyed by all age groups at our house.... ordering, processing, support and delivery were excellent .....Love you guys !! ",
              },
            ],
          },
          availabilty: false,
          prices: ["₹350 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "MAL1009",
          description:
            "Malgova variety of mangoes can be termed as the mangoes from the south of India. The yield in case of this variety is less. Malgova is considered as one of the best varieties of mangoes. This variety of mangoes are transplanted in Florida, and a strain is grown is Malaysia.",
          nutrients: "It has low acidity (0.11) with a pH of 4.65",
          health_benefits: [
            "Presence of rich anti-oxidants makes Malgova an effective fighter against cancer.",
            "Improves cardiac health",
            "Lowers cholesterol ",
          ],
          color: ["Green colour (with hints of red) when ripe."],
          shares: 0,
        },
        {
          name: "Banganapalli",
          link: "/banganapalli",
          title_one: "Sooper Banganapalli Mango",
          desc_one: "Delivery June 20, 2021 onwards",
          images: [
            "https://soopermango.com/images/product-images/benishan.png",
          ],

          title_two: "Banganapalli Mango",
          reviews: {
            stars: 0,
            count: 0,
            review_array: [],
          },
          availabilty: false,
          prices: ["₹500 - 3kg"],
          quanitiy: [1, 2, 3, 4, 5],

          product_code: "BP1009",
          description:
            "Banganapalli mango hails from a village of the same name in Andhra Pradesh. With its pleasant aroma, thin blemish - free skin and fibre - free sweet yellow pulp, the Baganapalli is certainly the choice for those who dont like fibrous textures in their fruit.",
          nutrients: "Vitamin A & C",
          health_benefits: [
            "Presence of rich anti-oxidants makes Banganapalli an effective fighter against cancer.",
            "Prevents heat stroke",
            "Improves concentration and memory",
            "Boosts Immunity ",
          ],
          color: ["Yellow flesh and a thin", " smooth yellow skin"],
          shares: 0,
        },
      ],
    };
  },
  methods: {
    set_product: function () {
      const product_order = [
        "Alphonso",
        "Rajgira Lalbagh Mango",
        "Totapuri",
        "Romania Apple Mango",
        "Neelam",
        "Malika",
        "Mulgoba",
        "Banganapalli",
      ];

      product_order.forEach((item, index) => {
        if (this.$route.meta.current === item) {
          this.current_product = index;
        }
      });
    },
    set_more: function () {
      var more_products = [];
      for (let i = 0; i < 3; i++) {
        var rand = -1;
        while (
          rand < 0 ||
          rand == this.current_product ||
          more_products.includes(rand)
        ) {
          rand = Math.floor(Math.random() * this.products_full.length);
        }
        more_products.push(rand);
      }
      this.more_products = more_products;
    },
    set_image: function (index) {
      this.current_image = index;
    },
  },
  created() {
    this.set_product();
    this.set_more();
  },
  setup() {
    return {
      alert: ref(false),
    };
  },
};
</script>

<style lang="scss">
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
</style>
