<link rel="stylesheet" href="app.scss" />

<template>
  <q-layout view="hhh lpr fff">
    <!-- The Header -->
    <q-header style="height: 0">
      <!-- Top-Bar -->
      <div class="row items-center" :class="scale_stage_1.header">
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
            class="inline GL__toolbar-link row no-wrap text-body1 text-weight-bold text-white"
          >
            <q-btn flat rounded href="/"> <q-icon name="home" /> Home </q-btn>
            <q-btn flat rounded href="/about"> About </q-btn>
            <q-btn flat rounded href="/shop"> Shop </q-btn>
            <q-btn flat rounded href="/mango-picking"> MangoPicking </q-btn>
            <q-btn flat rounded href="/your-responses"> Testimonials </q-btn>
            <q-btn flat rounded href="/contact"> Contact </q-btn>
          </div>
        </div>
        <!--- /Links -->
        <!--- Buttons -->
        <nav class="q-gutter-sm row items-center no-wrap q-mx-xl text-black">
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
                <q-item
                  clickable
                  href="/login"
                >
                    <q-item-section>
                      <div>
                      <q-icon name="login"/>
                      <span class="q-mx-sm">Login</span>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- /Menu -->
        </nav>
        <!--- /Buttons -->
      </div>

      <!-- /Top-Bar -->
    </q-header>
    <!-- /Header -->

    <!-- The Footer -->
    <q-footer class="bg-dark" elevated>

      <q-toolbar class="q-py-lg row justify-center">
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

      <!-- Google Maps-->
      <q-toolbar class="no-margin">
        <div class="bg-yellow-10 q-pa-md fit column wrap items-center" style="border-radius: 10px;">
          <iframe
            frameBorder="0"
            class="full-width"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
            height="450"
            style="
              border-radius: 10px;
              border: 0px solid black;
              box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
              max-width: 85%;
            "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </q-toolbar>
      <!-- Icon-->
      <q-toolbar class="q-py-lg row justify-center">
        <a href="/" :class="scale_stage_3.icon_align" class="rlu">
          <w-icon
            class="col self-center"
            :iconSize="scale_stage_1.icon[0]"
            :style="scale_stage_3.icon_offset"
          />
          <w-name
            class="col self-center"
            :iconSize="scale_stage_1.icon[1]"
            :style="scale_stage_3.name_offset"
          />
        </a>
      </q-toolbar>
            <q-toolbar class="justify-between q-pb-xl">
        <q-space />
        <a
          href="javascript:void(0)"
          target="_self"
          class="flinks scl-x4 q-mx-xl"
        >
          <q-icon class="fa-brands fa-facebook-square" color="blue-9" />
        </a>

        <a
          href="javascript:void(0)"
          target="_self"
          class="flinks scl-x4 q-mx-xl"
        >
          <q-icon class="fa-brands fa-instagram-square flinks" color="pink-7" />
        </a>

        <a
          href="javascript:void(0)"
          target="_self"
          class="flinks scl-x4 q-mx-xl"
        >
          <q-icon class="fa-brands fa-twitter-square" color="light-blue-5" />
        </a>

        <a
          href="javascript:void(0)"
          target="_self"
          class="flinks scl-x4 q-mx-xl"
        >
          <q-icon class="fa-brands fa-youtube-square" color="red-9" />
        </a>
        <q-space />
      </q-toolbar>
      <!-- whatsapp/num/email-->
      <q-toolbar class="q-my-md justify-center align-center">
        <q-card class="bg-primary">
          <q-card-section :class="scale_stage_3.icon_align">
            <a href="javascript:void(0)" target="_self" class="flinks">
              <q-icon name="mail"> </q-icon>
              Emailaddress@website.com
            </a>
            <q-separator dark vertical class="q-mx-sm" />
            <a href="/" class="flinks">
              <q-icon name="fa-brands fa-whatsapp"></q-icon>
              +20122222234345
            </a>
          </q-card-section>
        </q-card>
      </q-toolbar>
      <!-- Appstore / Google play buttons-->
      <q-toolbar class="q-pa-lg justify-center align-center no-margin">
        <q-btn class="q-ma-md" color="deep-orange" push>
          <q-card flat class="flat transparent">
            <q-card-section horizontal>
              <q-card-section class="q-pa-sm">
                <q-icon left name="fa-brands fa-apple" />
              </q-card-section>
              <q-separator vertical />
              <q-card-section class="q-py-none q-px-sm">
                Available at the<br />
                App Store
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-btn>
        <q-btn class="q-ma-md" color="deep-orange" push>
          <q-card flat class="flat transparent">
            <q-card-section horizontal>
              <q-card-section class="q-pa-sm">
                <q-icon left name="fa-brands fa-google-play scl-dw" />
              </q-card-section>
              <q-separator vertical />
              <q-card-section class="q-py-none q-px-sm">
                Get it on<br />
                Google play
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-btn>
      </q-toolbar>
      <!--[terms - privacy - refund - shipping policy]-->

      <!-- User can see a small list of strings next to each other with the first four as hyper links indicating
      [terms - privacy - refund - shipping policy] and then copy right of website, and then a link to the developer info.
      With a vertical line dividing each item from the following. -->
      <q-toolbar class="q-pt-lg justify-center align-center no-margin">
        <span><a href="javascript:void(0)" target="_self" class="flinks">Terms</a></span>
        <div class="vl q-mx-sm"></div>
        <span><a href="javascript:void(0)" target="_self" class="flinks">privacy</a></span>
        <div class="vl q-mx-sm"></div>
        <span><a href="javascript:void(0)" target="_self" class="flinks">refund</a></span>
        <div class="vl q-mx-sm"></div>
        <span><a href="javascript:void(0)" target="_self" class="flinks">shipping policy</a></span>

      </q-toolbar>

      <q-toolbar class="q-pa-lg justify-center align-center no-margin">
        <a href="javascript:void(0)" target="_self" class="flinks">
          <span>Powered by
              <strong>SupaDevs</strong> in Egypt.
          </span>
        </a>
        <div class="vl q-mx-sm"></div>
        <a href="javascript:void(0)" target="_self" class="flinks">
          <span>All rights reserved © 2022 <strong>SupaDevs.</strong> </span>
        </a>
      </q-toolbar>
    </q-footer>
    <!-- /The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container class="bg-secondary">
      <!-- This is where pages get injected -->
      <router-view />
      <q-page-scroller
        position="bottom-left"
        :scroll-offset="100"
        :offset="[30, 30]"
        expand
      >
        <q-btn push color="green" rounded>
          <q-avatar icon="fa-brands fa-whatsapp"> </q-avatar>
          Whatsapp Us
          <q-badge color="red" rounded floating>
            <q-avatar icon="fa-solid fa-exclamation" size="1.5em"> </q-avatar>
          </q-badge>
        </q-btn>
      </q-page-scroller>

    </q-page-container>
    <q-page-scroller position="bottom-right"
        :scroll-offset="100"
        :offset="[30, 30]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
  </q-layout>
</template>

<script>
import { ref } from "vue";
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

</style>
