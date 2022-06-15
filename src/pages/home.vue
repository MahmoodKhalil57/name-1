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
      <!-- flexbox gowah 2 children 1 3ady w el wa7da menhom grid -->
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
      <q-card-section class="q-pa-xl sectionContainer">
        <!-- content -->
        <div id="child1" class="q-mt-md">
          <br /><br />
          <h4 class="sectionHeader1">Our Core Values</h4>
        </div>
        <div id="child2" class="gridContainer q-mt-xl">
          <!--item-1-->
          <div id="item1">
            <q-img
              class="q-my-sm"
              src="~assets\home\section_four.jpg"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <!--item-2-->
          <div id="item2" style="text-align: left">
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
      <!--Third Section-->
      <q-card-section class="bg-green text-white">
        <!-- content -->
        <h1>About FarmWeb</h1>
        <br />

        <p class="q-mx-xl text-left text-h6">
          Cillum et deserunt esse labore in culpa exercitation ea laboris.
          Adipisicing consectetur cillum adipisicing ullamco duis ea. Consequat
          minim nulla magna aliqua aute. Dolor velit fugiat reprehenderit cillum
          excepteur pariatur voluptate duis qui aliqua mollit tempor. Tempor
          amet minim minim irure esse exercitation duis excepteur mollit
          adipisicing. Laborum adipisicing pariatur proident nisi ut cillum. Non
          Lorem ipsum minim officia nostrud Lorem cillum est proident eiusmod
          elit. Minim nisi sint culpa in. Id consectetur minim tempor sint
          aliqua eu minim qui dolor fugiat et excepteur in cupidatat.
          Adipisicing enim et quis mollit esse. Nulla ea esse nisi tempor
          nostrud ipsum incididunt ullamco labore dolore eiusmod consectetur
          irure ad. Reprehenderit pariatur anim reprehenderit voluptate
          reprehenderit minim. Aliquip esse ullamco ea aliquip qui irure quis
          elit ut ex dolore dolor.
          <br /><br />
          Occaecat quis sit non ex ullamco officia. Non fugiat laboris aliqua
          officia ea cillum cupidatat commodo id magna. Voluptate incididunt sit
          sit cupidatat. Velit occaecat aute tempor Lorem officia nisi ut.
          Ullamco qui voluptate sint nostrud officia excepteur mollit magna
          Lorem in culpa non et. Voluptate dolore aute nostrud qui exercitation.
          Eiusmod velit consequat ullamco adipisicing. Aute occaecat laboris
          proident labore dolore et quis pariatur reprehenderit. Reprehenderit
          Lorem in aliquip id. Nulla amet eiusmod minim aliquip et amet
          voluptate labore consectetur. Eu eu elit id deserunt aliqua nostrud ex
          cupidatat dolore nisi veniam cillum esse aute. Exercitation enim duis
          sunt magna enim dolor quis ullamco. Occaecat enim fugiat sunt quis
          dolor veniam esse exercitation esse ad cupidatat irure. Eiusmod fugiat
          exercitation magna cillum ut qui dolor enim eu quis officia. Labore
          minim ullamco consequat Lorem culpa et sit ex incididunt incididunt
          mollit. Ipsum aliquip aute quis consectetur occaecat laboris eu.
          Occaecat officia adipisicing do Lorem aute adipisicing consectetur non
          voluptate proident nostrud aute. Occaecat velit velit qui qui quis
          aliqua mollit ex. Sint irure aliquip qui dolore excepteur nisi.
          <br /><br />
          Officia pariatur elit laboris non reprehenderit nulla nulla id
          reprehenderit. Id labore veniam magna do consectetur anim adipisicing
          nostrud occaecat deserunt. Ut proident deserunt ex quis enim est
          voluptate ullamco. Veniam exercitation est elit ut anim voluptate
          adipisicing esse amet adipisicing officia aliquip. Deserunt dolor
          pariatur ipsum sint occaecat sint magna duis qui tempor. Minim eu qui
          nisi dolor amet cillum. Quis quis dolor sint elit deserunt est
          pariatur in nostrud ut consequat magna amet. In quis fugiat occaecat
          aliqua velit laboris cupidatat aute ullamco commodo culpa veniam
          fugiat mollit. Aliqua excepteur veniam commodo esse do et irure. Lorem
          et aute non in quis quis adipisicing dolor consectetur id voluptate
          eiusmod in quis. Velit occaecat reprehenderit commodo ex voluptate
          elit officia culpa incididunt ullamco eu tempor sit ex. Nostrud
          consectetur non consequat sint cupidatat ipsum do. Aliqua mollit
          voluptate tempor dolor sunt labore sit. Dolor qui occaecat consequat
          proident nostrud quis anim occaecat esse. Ex exercitation deserunt
          anim ut est ullamco deserunt. Nisi dolore nostrud do tempor id in
          eiusmod labore consectetur pariatur magna ullamco culpa. Veniam est
          velit eu velit aute aliqua eu quis Lorem YABNI BA2A.
        </p>
      </q-card-section>
      <!--Fourth Section-->
      <q-card-section class="bg-info">
        <!-- content -->
        <h1>About FarmWeb</h1>
        <br />

        <p class="q-mx-xl text-left text-h6">
          Cillum et deserunt esse labore in culpa exercitation ea laboris.
          Adipisicing consectetur cillum adipisicing ullamco duis ea. Consequat
          minim nulla magna aliqua aute. Dolor velit fugiat reprehenderit cillum
          excepteur pariatur voluptate duis qui aliqua mollit tempor. Tempor
          amet minim minim irure esse exercitation duis excepteur mollit
          adipisicing. Laborum adipisicing pariatur proident nisi ut cillum. Non
          Lorem ipsum minim officia nostrud Lorem cillum est proident eiusmod
          elit. Minim nisi sint culpa in. Id consectetur minim tempor sint
          aliqua eu minim qui dolor fugiat et excepteur in cupidatat.
          Adipisicing enim et quis mollit esse. Nulla ea esse nisi tempor
          nostrud ipsum incididunt ullamco labore dolore eiusmod consectetur
          irure ad. Reprehenderit pariatur anim reprehenderit voluptate
          reprehenderit minim. Aliquip esse ullamco ea aliquip qui irure quis
          elit ut ex dolore dolor.
          <br /><br />
          Occaecat quis sit non ex ullamco officia. Non fugiat laboris aliqua
          officia ea cillum cupidatat commodo id magna. Voluptate incididunt sit
          sit cupidatat. Velit occaecat aute tempor Lorem officia nisi ut.
          Ullamco qui voluptate sint nostrud officia excepteur mollit magna
          Lorem in culpa non et. Voluptate dolore aute nostrud qui exercitation.
          Eiusmod velit consequat ullamco adipisicing. Aute occaecat laboris
          proident labore dolore et quis pariatur reprehenderit. Reprehenderit
          Lorem in aliquip id. Nulla amet eiusmod minim aliquip et amet
          voluptate labore consectetur. Eu eu elit id deserunt aliqua nostrud ex
          cupidatat dolore nisi veniam cillum esse aute. Exercitation enim duis
          sunt magna enim dolor quis ullamco. Occaecat enim fugiat sunt quis
          dolor veniam esse exercitation esse ad cupidatat irure. Eiusmod fugiat
          exercitation magna cillum ut qui dolor enim eu quis officia. Labore
          minim ullamco consequat Lorem culpa et sit ex incididunt incididunt
          mollit. Ipsum aliquip aute quis consectetur occaecat laboris eu.
          Occaecat officia adipisicing do Lorem aute adipisicing consectetur non
          voluptate proident nostrud aute. Occaecat velit velit qui qui quis
          aliqua mollit ex. Sint irure aliquip qui dolore excepteur nisi.
          <br /><br />
          Officia pariatur elit laboris non reprehenderit nulla nulla id
          reprehenderit. Id labore veniam magna do consectetur anim adipisicing
          nostrud occaecat deserunt. Ut proident deserunt ex quis enim est
          voluptate ullamco. Veniam exercitation est elit ut anim voluptate
          adipisicing esse amet adipisicing officia aliquip. Deserunt dolor
          pariatur ipsum sint occaecat sint magna duis qui tempor. Minim eu qui
          nisi dolor amet cillum. Quis quis dolor sint elit deserunt est
          pariatur in nostrud ut consequat magna amet. In quis fugiat occaecat
          aliqua velit laboris cupidatat aute ullamco commodo culpa veniam
          fugiat mollit. Aliqua excepteur veniam commodo esse do et irure. Lorem
          et aute non in quis quis adipisicing dolor consectetur id voluptate
          eiusmod in quis. Velit occaecat reprehenderit commodo ex voluptate
          elit officia culpa incididunt ullamco eu tempor sit ex. Nostrud
          consectetur non consequat sint cupidatat ipsum do. Aliqua mollit
          voluptate tempor dolor sunt labore sit. Dolor qui occaecat consequat
          proident nostrud quis anim occaecat esse. Ex exercitation deserunt
          anim ut est ullamco deserunt. Nisi dolore nostrud do tempor id in
          eiusmod labore consectetur pariatur magna ullamco culpa. Veniam est
          velit eu velit aute aliqua eu quis Lorem YABNI BA2A.
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "PageName",
};
</script>

<style lang="sass">
.my-text
  z-index: 2
.my-btn
  z-index: 2
.header-image
  width: 100%
  height: 105%
  opacity: 1
  filter: brightness(60%)
  z-index: 1
</style>
