<link rel="stylesheet" href="app.scss" />

<template>
  <q-layout view="hhh lpr fff">
    <!-- The Header -->
    <q-header class="transparent">
      <!-- Top-Bar -->
      <div class="bg row items-center" :class="scale_stage_1.header">
        <!-- Logo -->
        <a href="/"  :class="scale_stage_3.icon_align" class="q-my-lg rlu">
          <w-icon class="col" :iconSize="scale_stage_1.icon[0]" :style="scale_stage_3.icon_offset" />
          <w-name class="col" :iconSize="scale_stage_1.icon[1]" :style="scale_stage_3.name_offset" />
        </a>

        <q-space v-if="scale_stage_2.logo_space"/>

        <!-- Logo -->

        <!--- Links -->
        <div>
          <div v-if="scale_stage_1.nav"
            class="inline GL__toolbar-link row no-wrap text-body1 text-weight-bold text-white"
          >
            <q-btn flat rounded href="/">
              <q-icon name="home" /> Home
            </q-btn>
            <q-btn flat rounded href="/about"> About </q-btn>
            <q-btn flat rounded href="/shop"> Shop </q-btn>
            <q-btn flat rounded href="/mango-picking"> MangoPicking </q-btn>
            <q-btn flat rounded href="/your-responses"> Testimonials </q-btn>
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
              class="row items-center no-wrap bg-accent q-pa-sm rounded-borders"
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
                <q-item
                  clickable
                  href="/about"
                >
                  <q-item-section>About</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="/shop"
                >
                  <q-item-section>Shop</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="/mango-picking"
                >
                  <q-item-section>Mangopicking</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="/your-responses"
                >
                  <q-item-section>Testimonials</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="contact"
                >
                  <q-item-section>Contact</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- /Navigate -->
          <!-- Cart -->
          <q-btn color="accent" text-color="black" icon="shopping_cart" label="cart" href="/cart  " />
          <!-- /Cart -->

          <!-- Menu -->
          <q-btn dense flat>
            <div
              class="row items-center no-wrap bg-accent q-pa-sm rounded-borders shadow-3"
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
                <q-item
                  clickable
                  href="/blog"
                >
                  <q-item-section>Blog</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="/gallery"
                >
                  <q-item-section>Gallery</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="/tips"
                >
                  <q-item-section>Ripening Tips</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="/harvesting-process"
                >
                  <q-item-section>Harvesting Process</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable
                  href="/login"
                >
                  <q-item-section><q-icon name="login" />Login</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- /Menu -->
        </nav>
        <!--- /Buttons -->
      </div>

      <q-toolbar class=" q-py-lg">
        <q-card class=" transparent no-shadow row justify-center">
          <q-card-section  style="width: 50%; min-width:300px;">
            <div class="q-mt-xl q-pt-xl text-h3 text-white text-center text-bold">
              Fresh Fruits and Vegtables
            </div>
            <div class="q-mt-sm text-subtitle1 text-grey-4 text-center">
              let's go back, follow the yellow brick road.
            </div>
            <div class="text-h6 text-grey-3 text-center">
              Dolor ut anim est magna aliqua. Eu exercitation nostrud laborum irure mollit
              in non elit labore. Aute laborum eu quis Lorem quis. Id occaecat deserunt
              amet id do. Elit non dolore aliquip Lorem nulla. Aliquip duis consequat mollit
              quis esse occaecat. Et minim nisi ad esse do ipsum ipsum sunt duis.
              Dolor ut anim est magna aliqua. Eu exercitation nostrud laborum irure mollit
              in non elit labore. Aute laborum eu quis Lorem quis. Id occaecat deserunt
              amet id do. Elit non dolore aliquip Lorem nulla. Aliquip duis consequat mollit
              quis esse occaecat. Et minim nisi ad esse do ipsum ipsum sunt duis.
            </div>
          </q-card-section>

        </q-card>
      </q-toolbar>

      <q-toolbar class=" q-py-lg row justify-center">
        <q-btn class="text-h3" color="accent" text-color="black" icon="shopping_cart" label="Shop Now" href="/shop" rounded/>
      </q-toolbar>



      <q-img
        src="~assets\background\home-layout.jpg"
        class="header-image absolute-top"
        no-spinner
      />
      <!-- /Top-Bar -->
    </q-header>
    <!-- /Header -->

    <!-- The Footer -->
    <q-footer class="bg-dark" elevated>
      <q-toolbar class="bg-primary q-py-lg row justify-center">
       <q-btn class="text-h3" color="accent" text-color="black" icon="shopping_cart" label="Shop Now" href="/shop" rounded/>
      </q-toolbar>
      <!-- Google Maps-->
      <q-toolbar class="no-padding no-margin">
        <div class="fit column wrap items-center">
          <iframe
            frameBorder="0"
            class="full-width"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
            height="450"
            style="border-top: 3px solid black; border-bottom: 3px solid black; box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </q-toolbar>
      <!-- Icon-->
      <q-toolbar class="q-py-lg row justify-center">
        <a href="/" :class="scale_stage_3.icon_align" class="rlu">
          <w-icon class="col self-center" :iconSize="scale_stage_1.icon[0]" :style="scale_stage_3.icon_offset" />
          <w-name class="col self-center" :iconSize="scale_stage_1.icon[1]" :style="scale_stage_3.name_offset" />
        </a>
      </q-toolbar>
      <!-- whatsapp/num/email-->
      <q-toolbar class="q-my-md justify-center align-center">
        <q-card class="bg-primary">
          <q-card-section :class="scale_stage_3.icon_align">
            <a href="javascript:void(0)" target="_self" class="flinks">
              <q-icon name="mail" > </q-icon>
              Emailaddress@website.com
            </a>
            <q-separator dark vertical class="q-mx-sm" />
            <a href="/" class="flinks">
              <q-icon
                name="fa-brands fa-whatsapp"
              ></q-icon>
              +20122222234345
            </a>
          </q-card-section>
        </q-card>

      </q-toolbar>
      <!-- Appstore / Google play buttons-->
    </q-footer>
    <!-- /The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container class="bg-secondary">
      <!-- This is where pages get injected -->
      <q-card>
        <router-view />
      </q-card>
      <q-page-scroller
        position="bottom-left"
        :scroll-offset="800"
        :offset="[30, 30]"
        expand
      >
        <q-btn push color="green" rounded>
          <q-avatar icon="fa-brands fa-whatsapp"> </q-avatar>
          {{ $route.meta.title }} Whatsapp Us
          <q-badge color="red" rounded floating>
            <q-avatar icon="fa-solid fa-exclamation" size="1.5em"> </q-avatar>
          </q-badge>
        </q-btn>
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  // name: 'LayoutName',
  computed: {
    scale_stage_1()
    {
      return this.$q.screen.gt.lg? {
        header: "justify-between",

        icon: ["4.4", "4.4"],
        nav: true
        } : {
        header: "justify-center",

        icon: ["5","6"],
        nav: false
        }
    },
    scale_stage_2()
    {
      return this.$q.screen.gt.sm? {logo_space: true } : {logo_space : false };
    },
    scale_stage_3()
    {
      return this.$q.screen.lt.md? {
        icon_align : "column",
        name_offset: "transform: translateX(0%) translateY(15%)",
        icon_offset: "transform: translateX(0%) translateY(15%)",
        } : {
        icon_align : "row",
        name_offset: "transform: translateX(-30%) translateY(0%)",
        icon_offset: "transform: translateX(10%) translateY(0%)",};
    }
  },


  setup() {
    const search = ref("");
    const $q = useQuasar();

    $q.screen.setSizes({ sm: 300, md: 1000, lg: 1500, xl: 1500 });

    return {
      search,
      $q,
    };
  },

};
</script>

<style lang="sass">
.GNL
  &__toolbar-input
    width: 50%
.rlu:link, rlu:visited, rlu:hover, rlu:active
  text-decoration: none
.header-image
  width: 100%
  height: 100%
  opacity: 1
  filter: brightness(60%)
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
  color:#EEDD82
</style>
