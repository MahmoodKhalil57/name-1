<template>
  <q-page>
    <div class="parallax_wrapper">
      <div class="parallax_group intro_screen" id="intro">
        <q-card-section>
          <q-toolbar
            class="row items-center"
            style="z-index: 10; transform: translateY(10vh)"
          >
            <!-- Logo -->
            <a href="/" :class="scale_stage_3.icon_align" class="q-my-lg rlu">
              <w-icon
                class="col"
                :iconSize="scale_stage_1.icon[0]"
                :style="scale_stage_3.icon_offset"
              />
              <w-name
                class="col"
                :iconSize="scale_stage_1.icon[1]"
                :style="scale_stage_3.name_offset"
              />
            </a>

            <q-space v-if="scale_stage_2.logo_space" />

            <!-- Logo -->

            <!--- Links -->
            <div>
              <div
                v-if="scale_stage_1.nav"
                class="
                  inline
                  GL__toolbar-link
                  row
                  no-wrap
                  text-body1 text-weight-bold text-white
                "
              >
                <q-btn flat rounded href="/">
                  <q-icon name="home" /> Home
                </q-btn>
                <q-btn flat rounded href="/about"> About </q-btn>
                <q-btn flat rounded href="/shop"> Shop </q-btn>
                <q-btn flat rounded href="/mango-picking"> MangoPicking </q-btn>
                <q-btn flat rounded href="/your-responses">
                  Testimonials
                </q-btn>
                <q-btn flat rounded href="/contact"> Contact </q-btn>
              </div>
            </div>
            <!--- /Links -->
            <!--- Buttons -->
            <nav
              class="q-gutter-sm row items-center no-wrap q-mx-xl text-black"
            >
              <!-- Navigate -->
              <q-btn v-if="!scale_stage_1.nav" dense flat>
                <div
                  class="
                    row
                    items-center
                    no-wrap
                    bg-accent
                    q-pa-sm
                    rounded-borders
                  "
                >
                  Navigate
                  <q-icon
                    name="arrow_drop_down"
                    size="16px"
                    style="margin-left: -2px"
                  />
                </div>
                <q-menu auto-close>
                  <q-list dense style="min-width: 100px">
                    <q-item clickable href="/about">
                      <q-item-section>About</q-item-section>
                    </q-item>
                    <q-item clickable href="/shop">
                      <q-item-section>Shop</q-item-section>
                    </q-item>
                    <q-item clickable href="/mango-picking">
                      <q-item-section>Mangopicking</q-item-section>
                    </q-item>
                    <q-item clickable href="/your-responses">
                      <q-item-section>Testimonials</q-item-section>
                    </q-item>
                    <q-item clickable href="contact">
                      <q-item-section>Contact</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <!-- /Navigate -->
              <!-- Cart -->
              <q-btn
                color="accent"
                text-color="black"
                icon="shopping_cart"
                label="cart"
                href="/cart  "
              />
              <!-- /Cart -->

              <!-- Menu -->
              <q-btn dense flat>
                <div
                  class="
                    row
                    items-center
                    no-wrap
                    bg-accent
                    q-pa-sm
                    rounded-borders
                    shadow-3
                  "
                >
                  more
                  <q-icon
                    name="arrow_drop_down"
                    size="16px"
                    style="margin-left: -2px"
                  />
                </div>
                <q-menu auto-close>
                  <q-list dense style="min-width: 100px">
                    <q-item clickable href="/blog">
                      <q-item-section>Blog</q-item-section>
                    </q-item>
                    <q-item clickable href="/gallery">
                      <q-item-section>Gallery</q-item-section>
                    </q-item>
                    <q-item clickable href="/tips">
                      <q-item-section>Ripening Tips</q-item-section>
                    </q-item>
                    <q-item clickable href="/harvesting-process">
                      <q-item-section>Harvesting Process</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable href="/login">
                      <q-item-section
                        ><q-icon name="login" />Login</q-item-section
                      >
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <!-- /Menu -->
            </nav>
            <!--- /Buttons -->
          </q-toolbar>
          <q-toolbar>
            <q-card class="transparent no-shadow row justify-center">
              <q-card-section
                class="my-text"
                style="width: 50%; min-width: 300px"
              >
                <div v-if="$q.screen.lt.lg" style="height: 200px"></div>
                <div
                  class="
                    q-mt-xl q-pt-xl
                    text-h3 text-white text-center text-bold
                  "
                >
                  Fresh Fruits and Vegtables
                </div>
                <div class="q-mt-sm text-subtitle1 text-grey-4 text-center">
                  let's go back, follow the yellow brick road.
                </div>
                <div class="text-h6 text-grey-3 text-center">
                  Dolor ut anim est magna aliqua. Eu exercitation nostrud
                  laborum irure mollit in non elit labore. Aute laborum eu quis
                  Lorem quis. Id occaecat deserunt amet id do. Elit non dolore
                  aliquip Lorem nulla. Aliquip duis consequat mollit quis esse
                  occaecat. Et minim nisi ad esse do ipsum ipsum sunt duis.
                  Dolor ut anim est magna aliqua. Eu exercitation nostrud
                  laborum irure mollit in non elit labore. Aute laborum eu quis
                  Lorem quis. Id occaecat deserunt amet id do. Elit non dolore
                  aliquip Lorem nulla. Aliquip duis consequat mollit quis esse
                  occaecat. Et minim nisi ad esse do ipsum ipsum sunt duis.
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
      </div>
      <div class="parallax_group" id="group-1">
        <q-card-section class="bg-info q-pa-xl">
          <!-- content -->
          <h1>About FarmWeb</h1>
          <br />

          <p class="q-mx-xl text-left text-h6">
            Cillum et deserunt esse labore in culpa exercitation ea laboris.
            Adipisicing consectetur cillum adipisicing ullamco duis ea.
            Consequat minim nulla magna aliqua aute. Dolor velit fugiat
            reprehenderit cillum excepteur pariatur voluptate duis qui aliqua
            mollit tempor. Tempor amet minim minim irure esse exercitation duis
            excepteur mollit adipisicing. Laborum adipisicing pariatur proident
            nisi ut cillum. Non Lorem ipsum minim officia nostrud Lorem cillum
            est proident eiusmod elit. Minim nisi sint culpa in. Id consectetur
            minim tempor sint aliqua eu minim qui dolor fugiat et excepteur in
            cupidatat. Adipisicing enim et quis mollit esse. Nulla ea esse nisi
            tempor nostrud ipsum incididunt ullamco labore dolore eiusmod
            consectetur irure ad. Reprehenderit pariatur anim reprehenderit
            voluptate reprehenderit minim. Aliquip esse ullamco ea aliquip qui
            irure quis elit ut ex dolore dolor.
            <br /><br />
            Occaecat quis sit non ex ullamco officia. Non fugiat laboris aliqua
            officia ea cillum cupidatat commodo id magna. Voluptate incididunt
            sit sit cupidatat. Velit occaecat aute tempor Lorem officia nisi ut.
            Ullamco qui voluptate sint nostrud officia excepteur mollit magna
            Lorem in culpa non et. Voluptate dolore aute nostrud qui
            exercitation. Eiusmod velit consequat ullamco adipisicing. Aute
            occaecat laboris proident labore dolore et quis pariatur
            reprehenderit. Reprehenderit Lorem in aliquip id. Nulla amet eiusmod
            minim aliquip et amet voluptate labore consectetur. Eu eu elit id
            deserunt aliqua nostrud ex cupidatat dolore nisi veniam cillum esse
            aute. Exercitation enim duis sunt magna enim dolor quis ullamco.
            Occaecat enim fugiat sunt quis dolor veniam esse exercitation esse
            ad cupidatat irure. Eiusmod fugiat exercitation magna cillum ut qui
            dolor enim eu quis officia. Labore minim ullamco consequat Lorem
            culpa et sit ex incididunt incididunt mollit. Ipsum aliquip aute
            quis consectetur occaecat laboris eu. Occaecat officia adipisicing
            do Lorem aute adipisicing consectetur non voluptate proident nostrud
            aute. Occaecat velit velit qui qui quis aliqua mollit ex. Sint irure
            aliquip qui dolore excepteur nisi.
            <br /><br />
            Officia pariatur elit laboris non reprehenderit nulla nulla id
            reprehenderit. Id labore veniam magna do consectetur anim
            adipisicing nostrud occaecat deserunt. Ut proident deserunt ex quis
            enim est voluptate ullamco. Veniam exercitation est elit ut anim
            voluptate adipisicing esse amet adipisicing officia aliquip.
            Deserunt dolor pariatur ipsum sint occaecat sint magna duis qui
            tempor. Minim eu qui nisi dolor amet cillum. Quis quis dolor sint
            elit deserunt est pariatur in nostrud ut consequat magna amet. In
            quis fugiat occaecat aliqua velit laboris cupidatat aute ullamco
            commodo culpa veniam fugiat mollit. Aliqua excepteur veniam commodo
            esse do et irure. Lorem et aute non in quis quis adipisicing dolor
            consectetur id voluptate eiusmod in quis. Velit occaecat
            reprehenderit commodo ex voluptate elit officia culpa incididunt
            ullamco eu tempor sit ex. Nostrud consectetur non consequat sint
            cupidatat ipsum do. Aliqua mollit voluptate tempor dolor sunt labore
            sit. Dolor qui occaecat consequat proident nostrud quis anim
            occaecat esse. Ex exercitation deserunt anim ut est ullamco
            deserunt. Nisi dolore nostrud do tempor id in eiusmod labore
            consectetur pariatur magna ullamco culpa. Veniam est velit eu velit
            aute aliqua eu quis Lorem pariatur.
          </p>
        </q-card-section>
      </div>
      <div class="parallax_group" id="group-2">
        <q-card-section class="bg-green text-white">
          <!-- content -->
          <h1>About FarmWeb</h1>
          <br />

          <p class="q-mx-xl text-left text-h6">
            Cillum et deserunt esse labore in culpa exercitation ea laboris.
            Adipisicing consectetur cillum adipisicing ullamco duis ea.
            Consequat minim nulla magna aliqua aute. Dolor velit fugiat
            reprehenderit cillum excepteur pariatur voluptate duis qui aliqua
            mollit tempor. Tempor amet minim minim irure esse exercitation duis
            excepteur mollit adipisicing. Laborum adipisicing pariatur proident
            nisi ut cillum. Non Lorem ipsum minim officia nostrud Lorem cillum
            est proident eiusmod elit. Minim nisi sint culpa in. Id consectetur
            minim tempor sint aliqua eu minim qui dolor fugiat et excepteur in
            cupidatat. Adipisicing enim et quis mollit esse. Nulla ea esse nisi
            tempor nostrud ipsum incididunt ullamco labore dolore eiusmod
            consectetur irure ad. Reprehenderit pariatur anim reprehenderit
            voluptate reprehenderit minim. Aliquip esse ullamco ea aliquip qui
            irure quis elit ut ex dolore dolor.
            <br /><br />
            Occaecat quis sit non ex ullamco officia. Non fugiat laboris aliqua
            officia ea cillum cupidatat commodo id magna. Voluptate incididunt
            sit sit cupidatat. Velit occaecat aute tempor Lorem officia nisi ut.
            Ullamco qui voluptate sint nostrud officia excepteur mollit magna
            Lorem in culpa non et. Voluptate dolore aute nostrud qui
            exercitation. Eiusmod velit consequat ullamco adipisicing. Aute
            occaecat laboris proident labore dolore et quis pariatur
            reprehenderit. Reprehenderit Lorem in aliquip id. Nulla amet eiusmod
            minim aliquip et amet voluptate labore consectetur. Eu eu elit id
            deserunt aliqua nostrud ex cupidatat dolore nisi veniam cillum esse
            aute. Exercitation enim duis sunt magna enim dolor quis ullamco.
            Occaecat enim fugiat sunt quis dolor veniam esse exercitation esse
            ad cupidatat irure. Eiusmod fugiat exercitation magna cillum ut qui
            dolor enim eu quis officia. Labore minim ullamco consequat Lorem
            culpa et sit ex incididunt incididunt mollit. Ipsum aliquip aute
            quis consectetur occaecat laboris eu. Occaecat officia adipisicing
            do Lorem aute adipisicing consectetur non voluptate proident nostrud
            aute. Occaecat velit velit qui qui quis aliqua mollit ex. Sint irure
            aliquip qui dolore excepteur nisi.
            <br /><br />
            Officia pariatur elit laboris non reprehenderit nulla nulla id
            reprehenderit. Id labore veniam magna do consectetur anim
            adipisicing nostrud occaecat deserunt. Ut proident deserunt ex quis
            enim est voluptate ullamco. Veniam exercitation est elit ut anim
            voluptate adipisicing esse amet adipisicing officia aliquip.
            Deserunt dolor pariatur ipsum sint occaecat sint magna duis qui
            tempor. Minim eu qui nisi dolor amet cillum. Quis quis dolor sint
            elit deserunt est pariatur in nostrud ut consequat magna amet. In
            quis fugiat occaecat aliqua velit laboris cupidatat aute ullamco
            commodo culpa veniam fugiat mollit. Aliqua excepteur veniam commodo
            esse do et irure. Lorem et aute non in quis quis adipisicing dolor
            consectetur id voluptate eiusmod in quis. Velit occaecat
            reprehenderit commodo ex voluptate elit officia culpa incididunt
            ullamco eu tempor sit ex. Nostrud consectetur non consequat sint
            cupidatat ipsum do. Aliqua mollit voluptate tempor dolor sunt labore
            sit. Dolor qui occaecat consequat proident nostrud quis anim
            occaecat esse. Ex exercitation deserunt anim ut est ullamco
            deserunt. Nisi dolore nostrud do tempor id in eiusmod labore
            consectetur pariatur magna ullamco culpa. Veniam est velit eu velit
            aute aliqua eu quis Lorem YABNI BA2A.
          </p>
        </q-card-section>
      </div>
      <div class="parallax_group" id="group-3">
        <q-card-section class="bg-info">
          <!-- content -->
          <h1>About FarmWeb</h1>
          <br />

          <p class="q-mx-xl text-left text-h6">
            Cillum et deserunt esse labore in culpa exercitation ea laboris.
            Adipisicing consectetur cillum adipisicing ullamco duis ea.
            Consequat minim nulla magna aliqua aute. Dolor velit fugiat
            reprehenderit cillum excepteur pariatur voluptate duis qui aliqua
            mollit tempor. Tempor amet minim minim irure esse exercitation duis
            excepteur mollit adipisicing. Laborum adipisicing pariatur proident
            nisi ut cillum. Non Lorem ipsum minim officia nostrud Lorem cillum
            est proident eiusmod elit. Minim nisi sint culpa in. Id consectetur
            minim tempor sint aliqua eu minim qui dolor fugiat et excepteur in
            cupidatat. Adipisicing enim et quis mollit esse. Nulla ea esse nisi
            tempor nostrud ipsum incididunt ullamco labore dolore eiusmod
            consectetur irure ad. Reprehenderit pariatur anim reprehenderit
            voluptate reprehenderit minim. Aliquip esse ullamco ea aliquip qui
            irure quis elit ut ex dolore dolor.
            <br /><br />
            Occaecat quis sit non ex ullamco officia. Non fugiat laboris aliqua
            officia ea cillum cupidatat commodo id magna. Voluptate incididunt
            sit sit cupidatat. Velit occaecat aute tempor Lorem officia nisi ut.
            Ullamco qui voluptate sint nostrud officia excepteur mollit magna
            Lorem in culpa non et. Voluptate dolore aute nostrud qui
            exercitation. Eiusmod velit consequat ullamco adipisicing. Aute
            occaecat laboris proident labore dolore et quis pariatur
            reprehenderit. Reprehenderit Lorem in aliquip id. Nulla amet eiusmod
            minim aliquip et amet voluptate labore consectetur. Eu eu elit id
            deserunt aliqua nostrud ex cupidatat dolore nisi veniam cillum esse
            aute. Exercitation enim duis sunt magna enim dolor quis ullamco.
            Occaecat enim fugiat sunt quis dolor veniam esse exercitation esse
            ad cupidatat irure. Eiusmod fugiat exercitation magna cillum ut qui
            dolor enim eu quis officia. Labore minim ullamco consequat Lorem
            culpa et sit ex incididunt incididunt mollit. Ipsum aliquip aute
            quis consectetur occaecat laboris eu. Occaecat officia adipisicing
            do Lorem aute adipisicing consectetur non voluptate proident nostrud
            aute. Occaecat velit velit qui qui quis aliqua mollit ex. Sint irure
            aliquip qui dolore excepteur nisi.
            <br /><br />
            Officia pariatur elit laboris non reprehenderit nulla nulla id
            reprehenderit. Id labore veniam magna do consectetur anim
            adipisicing nostrud occaecat deserunt. Ut proident deserunt ex quis
            enim est voluptate ullamco. Veniam exercitation est elit ut anim
            voluptate adipisicing esse amet adipisicing officia aliquip.
            Deserunt dolor pariatur ipsum sint occaecat sint magna duis qui
            tempor. Minim eu qui nisi dolor amet cillum. Quis quis dolor sint
            elit deserunt est pariatur in nostrud ut consequat magna amet. In
            quis fugiat occaecat aliqua velit laboris cupidatat aute ullamco
            commodo culpa veniam fugiat mollit. Aliqua excepteur veniam commodo
            esse do et irure. Lorem et aute non in quis quis adipisicing dolor
            consectetur id voluptate eiusmod in quis. Velit occaecat
            reprehenderit commodo ex voluptate elit officia culpa incididunt
            ullamco eu tempor sit ex. Nostrud consectetur non consequat sint
            cupidatat ipsum do. Aliqua mollit voluptate tempor dolor sunt labore
            sit. Dolor qui occaecat consequat proident nostrud quis anim
            occaecat esse. Ex exercitation deserunt anim ut est ullamco
            deserunt. Nisi dolore nostrud do tempor id in eiusmod labore
            consectetur pariatur magna ullamco culpa. Veniam est velit eu velit
            aute aliqua eu quis Lorem YABNI BA2A.
          </p>
        </q-card-section>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  // name: 'LayoutName',
  computed: {
    scale_stage_1() {
      return this.$q.screen.gt.lg
        ? {
            header: "justify-between",

            icon: ["4.4", "4.4"],
            nav: true,
          }
        : {
            header: "justify-center",

            icon: ["5", "6"],
            nav: false,
          };
    },
    scale_stage_2() {
      return this.$q.screen.gt.sm
        ? { logo_space: true }
        : { logo_space: false };
    },
    scale_stage_3() {
      return this.$q.screen.lt.md
        ? {
            icon_align: "column",
            name_offset: "transform: translateX(0%) translateY(15%)",
            icon_offset: "transform: translateX(0%) translateY(15%)",
          }
        : {
            icon_align: "row",
            name_offset: "transform: translateX(-30%) translateY(0%)",
            icon_offset: "transform: translateX(10%) translateY(0%)",
          };
    },
  },

  setup() {
    const $q = useQuasar();

    $q.screen.setSizes({ sm: 300, md: 1000, lg: 1500, xl: 1500 });

    return {
      $q,
    };
  },
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

.GNL
  &__toolbar-input
    width: 50%
.rlu:link, rlu:visited, rlu:hover, rlu:active
  text-decoration: none

.flex-break
  flex: 1 0 100% !important
.row
  .flex-break
    height: 0 !important
.column
  .flex-break
    width: 0 !important
.flinks
  color: white
  background-color: transparent
  text-decoration: none
  text-align: center
.flinks:hover
  text-shadow: 10px 10px 25px black
  color: #EEDD82
</style>
