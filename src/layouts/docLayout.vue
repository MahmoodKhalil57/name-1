<link rel="stylesheet" href="app.scss" />

<template>
  <q-layout view="hhh lpr fff">
    <!-- The Header -->
    <!-- Top-Bar -->

    <!--- Links -->
    <!--- /Links -->

    <!--- Buttons -->

    <!-- Navigate -->
    <!-- /Navigate -->

    <!-- Menu -->
    <!-- /Menu -->

    <!-- Cart -->
    <!-- /Cart -->

    <!--- /Buttons -->

    <!-- /Top-Bar -->

    <!-- searchBar -->
    <!-- /searchBar -->
    <!-- /The Header -->

    <!-- The Header -->
    <q-header elevated>
      <!-- Top-Bar -->
      <div class="bg row items-center" :class="scale_stage_1.header">
        <!-- Logo -->
        <div :class="scale_stage_3.icon_align">
          <w-icon class="col" :iconSize="scale_stage_1.icon[0]" />
          <w-name class="col" :iconSize="scale_stage_1.icon[1]" />
        </div>

        <q-space v-if="scale_stage_2.logo_space"/>

        <!-- Logo -->

        <!--- Links -->
        <div>
          <q-space />
          <div v-if="scale_stage_1.nav"
            class="inline GL__toolbar-link row no-wrap text-body1 text-weight-bold text-white"
          >
            <q-btn flat rounded href="javascript:void(0)">
              <q-icon name="home" /> Home
            </q-btn>
            <q-btn flat rounded href="javascript:void(0)"> About </q-btn>
            <q-btn flat rounded href="javascript:void(0)"> Shop </q-btn>
            <q-btn flat rounded href="javascript:void(0)"> MangoPicking </q-btn>
            <q-btn flat rounded href="javascript:void(0)"> Testimonials </q-btn>
            <q-btn flat rounded href="javascript:void(0)"> Contact </q-btn>
          </div>
        </div>
        <!--- /Links -->
        <!--- Buttons -->
        <nav
          class="q-gutter-sm row items-center no-wrap q-pa-xl q-mx-xl text-black"
        >
          <!-- Navigate -->
          <q-btn v-if="!scale_stage_1.nav" dense flat>
            <div
              class="row items-center no-wrap bg-warning q-pa-sm rounded-borders"
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
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>About</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Shop</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Mangopicking</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Testimonials</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Contact</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- /Navigate -->
          <!-- Cart -->
          <div
            class="row items-center no-wrap bg-warning q-pa-sm rounded-borders"
          >
            <q-btn dense flat round size="sm" icon="shopping_cart" />
            Cart
          </div>
          <!-- /Cart -->

          <!-- Menu -->
          <q-btn dense flat>
            <div
              class="row items-center no-wrap bg-warning q-pa-sm rounded-borders"
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
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Blog</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Gallery</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Ripening Tips</q-item-section>
                </q-item>
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link"
                >
                  <q-item-section>Harvesting Process</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable
                  href="javascript:void(0)"
                  class="GL__menu-link text-no-wrap"
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



      <!-- /Top-Bar -->
      <!-- searchBar -->
      <q-toolbar class="row">
        <q-breadcrumbs>
          <q-breadcrumbs-el :label="$route.meta.root" />
          <q-breadcrumbs-el :label="$route.meta.current" />
        </q-breadcrumbs>
        <q-space />
        <q-input
          class="GNL__toolbar-input"
          rounded
          outlined
          dense
          v-model="search"
          bg-color="white"
          color="shadow-1"
          placeholder="Search for fresh fruits or vegetables"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
        </q-input>
        <q-space />
      </q-toolbar>
      <q-img
        src="~assets\background\pexels-kelly-l-4098496.jpg"
        class="header-image absolute-top"
      />
      <!-- /searchBar -->
    </q-header>
    <!-- /Header -->

    <!-- The Footer -->
    <q-footer elevated>
      <div class="justify-center">
        <div class="row">
        <w-icon class="col" :iconSize="scale_stage_1.icon[0]" />
        <w-name class="col" :iconSize="scale_stage_1.icon[1]" />
        </div>
      </div>
      <!-- Google Maps-->
      <q-toolbar class="no-padding no-margin">
        <div class="fit column wrap items-center">
          <iframe
            class="q-my-lg shadow-24 full-width"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
            width="900"
            height="450"
            style="border-top: 2px solid black; border-bottom: 2px solid black"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </q-toolbar>
      <!-- whatsapp/num/email-->
      <q-toolbar class="row justify-center q-my-md">
        <a href="javascript:void(0)" target="_self" class="flinks q-mx-sm">
          <q-avatar icon="mail" style="text-shadow: none"> </q-avatar>
          Emailaddress@website.com
        </a>
        <q-separator dark vertical class="q-mx-sm" />
        <a href="javascript:void(0)" target="_self" class="flinks">
          <q-avatar
            icon="fa-brands fa-whatsapp"
            style="text-shadow: none"
          ></q-avatar>
          +20122222234345
        </a>
      </q-toolbar>
      <!-- Appstore / Google play buttons-->
      <div class="q-pa-md q-gutter-sm">
        <p>
          I was gonna take the time to sit down and write you a little letter.
          But I thought a song would probably be a little better. Instead of a
          ,letter. That you'd probably just shred up--yeah. I stumbled on your
          picture yesterday and it made me stop and think of. How much of a
          waste it'd ,be for me to put some ink to, a stupid piece a. Paper, I'd
          rather let you see how. Much I fucking hate you in a freestyle.kol
          5ara
        </p>
      </div>
    </q-footer>
    <!-- /The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
      <q-page-scroller
        position="bottom-left"
        :scroll-offset="10"
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
    scale_stage_3()
    {
      return this.$q.screen.lt.md? {icon_align : "column"} : {icon_align : "row"};
    },
    scale_stage_2()
    {
      return this.$q.screen.gt.sm? {logo_space: true} : {logo_space : false};
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
    width: 55%
.header-image
  width: 100%
  height: 100%
  opacity: 1
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
.flinks:hover
  text-shadow: 10px 10px 25px black
  color:#EEDD82
</style>
