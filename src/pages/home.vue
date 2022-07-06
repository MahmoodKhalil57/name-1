<template>
  <q-page class="text-center">
    <q-card>
      <!--First Section-->
      <q-card-section>
        <q-toolbar class="q-py-lg">
          <q-card class="transparent no-shadow row justify-center">
            <q-card-section
              class="my-text"
              style="width: 50%; min-width: 300px"
            >
              <div v-if="$q.screen.lt.lg" style="height: 200px"></div>
              <div
                class="q-mt-xl q-pt-xl text-h3 text-white text-center text-bold"
              >
                Fresh Fruits and Vegtables
              </div>
              <div class="q-mt-sm text-subtitle1 text-grey-4 text-center">
                let's go back, follow the yellow brick road.
              </div>
              <div class="text-h6 text-grey-3 text-center">
                Dolor ut anim est magna aliqua. Eu exercitation nostrud laborum
                irure mollit in non elit labore. Aute laborum eu quis Lorem
                quis. Id occaecat deserunt amet id do. Elit non dolore aliquip
                Lorem nulla. Aliquip duis consequat mollit quis esse occaecat.
                Et minim nisi ad esse do ipsum ipsum sunt duis. Dolor ut anim
                est magna aliqua. Eu exercitation nostrud laborum irure mollit
                in non elit labore. Aute laborum eu quis Lorem quis. Id occaecat
                deserunt amet id do. Elit non dolore aliquip Lorem nulla.
                Aliquip duis consequat mollit quis esse occaecat. Et minim nisi
                ad esse do ipsum ipsum sunt duis.
              </div>
            </q-card-section>
          </q-card>
        </q-toolbar>

        <q-toolbar class="q-py-lg row justify-center my-btn" flat>
          <q-btn
            class="text-h3"
            color="accent"
            text-color="black"
            icon="shopping_cart"
            label="Shop Now"
            href="/shop"
            rounded
          />
        </q-toolbar>
        <q-img
          src="~assets\background\home-layout.jpg"
          class="header-image absolute-top"
          no-spinner
        />
      </q-card-section>

      <!--Second Section-->
      <!-- flexbox gowah 2 children 1 div 3ady w el tany 3obar 3an gridcontainer bel items beta3to  -->
      <q-card-section class="q-pa-xl sectionContainer">
        <!-- content -->
        <div id="child1" class="q-mt-md">
          <br /><br />
          <h4 class="sectionHeader1">Reservoir of Vitamins</h4>

          <p class="q-my-md text-h6 sectionContent">
            A slice of FarmWeb's Mangoes fulfills 100% requirement of your daily
            dose of Vitamin C. Besides, Mangoes are also rich in Vitamin A,
            Vitamin B, and other antioxidants, which helps in keeping your
            immune system strong, fights against cancerous cells, controls
            cholesterol, and also cares and improves vision. [Copied]
          </p>
        </div>
        <div id="child2" class="gridContainer q-mt-xl">
          <!--item-1-->
          <div id="item1">
            <q-icon class="fa-brands fa-envira gcircle" style="color: white" />
            <h4 class="q-my-lg gridHeader1">ALPHONSO</h4>
            <p>
              Alphonso at SooperMango is known as King of Kings and is not just
              a fruit but an emotion. These mangoes are famous for their
              sweetness and pulp, the richness in their flavour, aroma and color
              makes the fruit everyone's favourite. An Alphonso mango is the
              most premium variety of mangoes especially due to high content of
              beta-carotene and a precursor of vitamin A and vitamin B complex.
            </p>
          </div>
          <!--item-2-->
          <div id="item2">
            <q-icon class="fa-brands fa-envira gcircle" style="color: white" />
            <h4 class="q-my-lg gridHeader1">3EWEES</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              repellendus accusamus vel hic iusto ab adipisci maiores neque
              perferendis alias expedita saepe ex incidunt quos magnam qui
              nesciunt aliquid dicta illo laudantium dolore, itaque provident
              quisquam sint! Explicabo, totam porro!
            </p>
          </div>
          <!--item-3-->
          <div id="item3">
            <q-icon class="fa-brands fa-envira gcircle" style="color: white" />
            <h4 class="q-my-lg gridHeader1">MALLIKA</h4>
            <p>
              Alphonso at SooperMango is known as King of Kings and is not just
              a fruit but an emotion. These mangoes are famous for their
              sweetness and pulp, the richness in their flavour, aroma and color
              makes the fruit everyone's favourite. An Alphonso mango is the
              most premium variety of mangoes especially due to high content of
              beta-carotene and a precursor of vitamin A and vitamin B complex.
            </p>
          </div>
        </div>
        <br /><br />
      </q-card-section>

      <!--Third Section-->
      <!-- ana 7aramy w sara2t this part from above -->
      <q-card-section class="q-pa-xl bg-green sectionContainer">
        <!-- content -->
        <div id="child1" class="q-mt-md">
          <br /><br />
          <h4 class="sectionHeader2">Why Choose Us</h4>
        </div>
        <div id="child2" class="gridContainer q-mt-xl">
          <!--item-1-->
          <div id="item1">
            <q-icon class="fa-brands fa-pagelines gridIcon2" />
            <h4 class="q-my-lg gridHeader2">NATURAL</h4>
            <p class="gridContent2">
              Only the best farming methods, including vermin-composts, mulching
              Processing, organic herbicides and modern drip irrigation
              techniques are used to manage our farms that offer chemical-free
              crops.
            </p>
          </div>
          <!--item-2-->
          <div id="item2">
            <q-icon class="fa-solid fa-hand-back-fist gridIcon2" />
            <h4 class="q-my-lg gridHeader2">HAND PICKED</h4>
            <p class="gridContent2">
              Our Mangoes are handpicked and are safely packed in an eco
              friendly box. They are carefully wrapped in natural hay to avoid
              spoilage in transit. We bring the best quality Indian mangoes
              providing all types of mangoes to your door step.
            </p>
          </div>
          <!--item-3-->
          <div id="item3">
            <q-icon class="fa-solid fa-lightbulb gridIcon2" />
            <h4 class="q-my-lg gridHeader2">INNOVATION</h4>
            <p class="gridContent2">
              Our work team follows standard scientific norms for plant
              cultivation, manuring, plucking, grading, packaging and dispatch.
              All of our produce is grown organically, in a manner that
              optimizes the health of the farm's ecosystem
            </p>
          </div>
          <!--item-4-->
          <div id="item4">
            <q-icon class="fa-solid fa-earth-europe gridIcon2" />
            <h4 class="q-my-lg gridHeader2">SOOPER SOIL</h4>
            <p class="gridContent2">
              Our mango orchard is self-sustained by using latest practices for
              maintaining soil fertility by the manure production of livestock
              inside the farm. We also practice crop rotation which helps in
              reducing soil erosion and increases soil fertility and crop yield.
            </p>
          </div>
          <!--item-5-->
          <div id="item5">
            <q-icon class="fa-solid fa-seedling gridIcon2" />
            <h4 class="q-my-lg gridHeader2">ENVIRONMENT</h4>
            <p class="gridContent2">
              Our work team uses eco-friendly tools to protect the environment.
              All of our produce is grown in a manner that optimizes the health
              of the farm's ecosystem
            </p>
          </div>
        </div>
        <br /><br />
      </q-card-section>
      <!-- Fourth Section -->
      <q-card-section class="sectionContainer">
        <!-- content -->
        <div id="child1" class="q-mt-md">
          <br /><br />
          <h4 class="sectionHeader1">Our Core Values</h4>
        </div>
        <div
          id="child2"
          class="row q-mt-xl"
          style="
            max-width: 1300px;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            align-items: center;
            justify-content: center;
          "
        >
          <!--item-1-->
          <div id="item1">
            <q-img
              class="q-my-sm q-px-md annoying-image-1"
              src="~assets\home\section_four.jpg"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <!--item-2-->
          <div id="item2" class="annoying-text-1 q-px-md">
            <h4 class="gridHeader1">
              IMPROVING AGRICULTURE, IMPROVING LIVES, CULTIVATING NEW CROPS
              THROUGH INNOVATION.
            </h4>
            <p>
              At Pavana Vatika, we are a mindful bunch of agri enthusiasts who
              never lose touch with the impact our business creates as we walk
              our journey. From the soil we work on, to the people we work with,
              we account for every detail we encounter and create.
            </p>
          </div>
        </div>
        <br /><br />
      </q-card-section>
      <!--Fifth Section-->
      <q-card-section
        class="text-white sectionContainer responsive"
        style="z-index: 0"
      >
        <!-- content -->
        <h4
          class="responsive my-text sectionContainer3 q-mt-xl q-mb-md"
          style="z-index: 1"
        >
          The Best Time To
          <span class="willo q-mx-sm">Get Healthy</span>
          is Now.
        </h4>

        <p
          class="q-mx-xl text-center text-h6"
          style="z-index: 1; color: #ccc; line-height: 2; width: 55vw"
        >
          The aim of PavanaVatika's innovation in agriculture is to produce high
          quality, nutritious crop that contributes to preventive health care
          and well-being. With improved taste, flavour and nourishment, the
          benefits of healthy crops are multipronged. It's a natural complement
          to a healthier life-style, and builds a stronger immunity to prevent
          health complications caused by chemically grown crops.
        </p>
        <q-img
          class="q-my-sm header-image absolute-top"
          src="~assets\home\section_5.jpg"
          spinner-color="primary"
          spinner-size="82px"
          style="z-index: -1"
        />
        <div class="sectionContainer2 q-mb-md q-mt-sm">
          <q-btn
            class="q-mr-md"
            style="background: #e8cd30; color: #333; height: 7vh; width: 20vh"
            >Shop now</q-btn
          >
          <q-btn
            class="text-white q-ml-md"
            style="background: #009f4d; height: 7vh; width: 20vh"
            >Contact us</q-btn
          >
        </div>
      </q-card-section>
      <!--Section 6-->
      <q-card-section class="q-pa-xl sectionContainer">
        <!-- content -->

        <div id="child1" class="q-mt-md">
          <br /><br />
          <h4 class="sectionHeader1">Accreditation & Certifications</h4>

          <ul
            class="q-my-md text-h6 text-left sectionContent"
            style="max-width: 1200px"
          >
            <li>
              Registered in APEDA (Govt. of India) Horti-Net Farm Registration
              Number: KA2901186103,101,102,104,202
            </li>
            <li>Certified under Global - Good Agricultural Practice (G.A.P)</li>
            <li>
              CERTIFICATE OF IMPORTER-EXPORTER CODE from Ministry of Commerce &
              Industry - DGFT - Govt. Of Indian
            </li>
          </ul>
        </div>
        <div
          id="child2"
          class="row q-mt-xl"
          style="align-items: center; justify-content: center"
        >
          <!--item-1-->
          <div id="item1">
            <q-img
              class="q-px-md"
              src="~assets/certifications/apeda.svg"
              style="height: 100px; width: 100px"
            />
          </div>
          <!--item-2-->
          <div id="item2">
            <img
              class="q-px-md"
              src="~assets/certifications/section_6_2.png"
              style="height: 100px; object-fit: cover"
            />
          </div>
          <!--item-3-->
          <div id="item3">
            <img
              class="q-px-md"
              src="~assets/certifications/section_6_1.jpg"
              style="height: 100px; object-fit: cover"
            />
          </div>
        </div>
      </q-card-section>
      <!--section 7-->
      <q-card-section class="text-white" style="z-index: 0">
        <q-img
          class="q-my-sm header-image absolute-top"
          src="~assets\background\pexels-james-wheeler-1592461.jpg"
          spinner-color="primary"
          spinner-size="82px"
          style="z-index: -1"
        />
        <!--flex container-->
        <div
          class="sectionContainer3 text-white q-my-xl q-pt-lg responsive"
          style="flex-wrap: wrap; justify-content: space-around"
        >
          <!--gridcontainer1-->
          <div
            class="text-white q-mr-xl"
            style="
              display: grid;
              grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
              grid-row-gap: 1.5vh;
            "
          >
            <div style="justify-self: start">
              <q-icon
                class="fa-regular fa-face-smile q-pt-md"
                style="transform: scale(2.5); left: 1.2vw"
              />
            </div>
            <h4 style="justify-self: start">5000</h4>
            <h5 style="justify-self: start">HAPPY CUSTOMERS</h5>
          </div>
          <!--gridcontainer2-->
          <div
            class="text-white q-mr-xl"
            style="
              display: grid;
              grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
              grid-row-gap: 1.5vh;
            "
          >
            <div style="justify-self: start">
              <q-icon
                class="fa-tree fa-solid q-pt-md"
                style="transform: scale(2.5); left: 1.2vw"
              />
            </div>
            <h4 style="justify-self: start">1000</h4>
            <h5 style="justify-self: start">MANGO TREES</h5>
          </div>
          <!--gridcontainer3-->
          <div
            class="text-white q-mr-xl"
            style="
              display: grid;
              grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
              grid-row-gap: 1.5vh;
            "
          >
            <div style="justify-self: start">
              <q-icon
                class="fa-solid fa-earth-africa q-pt-md"
                style="transform: scale(2.5); left: 1.2vw"
              />
            </div>
            <h4 style="justify-self: start">14</h4>
            <h5 style="justify-self: start">ACRES</h5>
          </div>
          <!--gridcontainer4-->
          <div
            class="text-white q-mr-xl"
            style="
              display: grid;
              grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
              grid-row-gap: 1.5vh;
            "
          >
            <div style="justify-self: start">
              <q-icon
                class="fa-brands fa-pagelines q-pt-md"
                style="transform: scale(2.5); left: 1.2vw"
              />
            </div>
            <h4 style="justify-self: start">100%</h4>
            <h5 style="justify-self: start">CHEMICAL FREE</h5>
          </div>
        </div>
      </q-card-section>
      <!-- Eighth section -->
      <q-card-section class="q-py-xl sectionContainer">
        <div id="child1" class="q-mt-md">
          <h4 class="sectionHeader1 q-pb-lg">Testimonials</h4>
          <q-carousel
            v-model="slide"
            class="testimonial-carousel shadow-1 rounded-borders"
            control-color="black"
            padding
            navigation
            arrows
            infinite
          >
            <q-carousel-slide
              :name="testimonial_group.id"
              class="column no-wrap flex-center"
              v-for="testimonial_group in testimonials"
              :key="testimonial_group.id"
            >
              <div class="row q-gutter-lg gutter-slide">
                <q-card
                  class="my-card"
                  style="height: 274px; max-width: 300px; text-align: left"
                  v-for="testimonial in testimonial_group.elements"
                  :key="testimonial.id"
                >
                  <q-card-section>
                    <div class="text-h6" style="height: 64px">
                      {{ testimonial.title }}
                    </div>
                  </q-card-section>

                  <q-card-section>
                    <div class="text-subtitle2" style="height: 66px">
                      <q-icon name="fa-solid fa-quote-left"></q-icon>
                      {{ testimonial.content }}
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <q-avatar>
                      <img :src="testimonial.image" />
                    </q-avatar>
                    {{ testimonial.name }}
                  </q-card-section>
                </q-card>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PageName",
  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          elements: [
            {
              id: 1,
              title: "WANT TO ORDER AGAIN",
              content:
                "Very sweet and high quality mangoes. Wanted to order again but got disappointed to see as Sold out.",
              name: "Lakshmiprasad G V",
              image:
                "https://soopermango.com/images/customers/raghavendra_kiran.jpg",
            },
            {
              id: 2,
              title: "WORTH THE PRICE!",
              content: "Top quality. Totally worth the price!",
              name: "Divij Bhat",
              image:
                "https://soopermango.com/images/customers/adithya_radhakrishna.jpg",
            },
            {
              id: 3,
              title: "NEAT PACKAGING",
              content:
                "Delicious, fresh mangoes delivered to home with neat packaging and within time.",
              name: "C R Anjana Devi",
              image: "https://soopermango.com/images/customers/hariprasad.jpg",
            },
          ],
        },
        {
          id: 2,
          elements: [
            {
              id: 1,
              title: "BEST SATVIK MANGOES",
              content:
                "The best satvik mangoes from the most pious and divine thota!!!",
              name: "Raghavendra Kiran",
              image:
                "https://soopermango.com/images/customers/raghavendra_kiran.jpg",
            },
            {
              id: 2,
              title: "MANGOES ARE DELICIOUS",
              content:
                "The mangoes are delicious and we relished it. Thanks for delivering it on time.",
              name: "Adithya Radhakrishna",
              image:
                "https://soopermango.com/images/customers/adithya_radhakrishna.jpg",
            },
            {
              id: 3,
              title: "DIVINE TASTE",
              content:
                "Mango was excellent, Sweetest ever, Looking forward for more.",
              name: "Hariprasad",
              image: "https://soopermango.com/images/customers/hariprasad.jpg",
            },
          ],
        },
      ],
    };
  },

  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style lang="scss">
.testimonial-carousel {
  min-height: 400px;
  max-height: 1250px;
  height: 400px;
  @media screen and (max-width: 1100px) {
    height: 700px;
  }
  @media screen and (max-width: 780px) {
    height: 1250px;
  }
}
.gutter-slide {
  align-items: center;
  justify-content: center;
}
.my-text {
  z-index: 2;
}
.my-btn {
  z-index: 2;
}
.header-image {
  width: 100%;
  height: 105%;
  opacity: 1;
  filter: brightness(60%);
  z-index: 0;
}
</style>
