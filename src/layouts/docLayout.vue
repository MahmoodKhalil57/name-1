<link rel="stylesheet" href="app.scss" />

<template>
  <q-layout view="hhh lpr fff">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header
      elevated
      class="header-container"
      style="height: 150px; padding: 0px"
    >
      <q-toolbar class="col-md-auto q-py-sm q-px-md">
        <div class="row no-wrap items-center">
          <div class="col">
            <q-btn
              round
              dense
              flat
              :ripple="false"
              size="40px"
              color="white"
              class="q-mr-sm ds"
              no-caps
              style=""
            >
              <div class="row">
                <div class="col col-md-auto"><WIcon class="no-wrap" /></div>

                <div class="col column" style="height: 150px" absolute>
                  <div
                    class="col"
                    style="transform: translateY(-75px) translateX(-75px)"
                  >
                    <h1>FarmWeb</h1>
                  </div>
                  <div
                    class="col text-no-wrap text-gray"
                    style="transform: translateX(-75px)"
                  >
                    we do mangos you eat them!
                  </div>
                </div>
              </div>
            </q-btn>
          </div>
          <!-- links -->
          <div class="col">
            <div
              v-if="$q.screen.gt.sm"
              class="GL__toolbar-link q-ml-xl q-gutter-lg text-body1 text-weight-bold row items-center no-wrap"
            >
              <a
                href="javascript:void(0)"
                class="text-white q-gutter-lg text-no-wrap"
              >
                <q-icon class="q-ma-xs" name="home" /> Home
              </a>
              <a href="javascript:void(0)" class="text-white"> About </a>
              <a href="javascript:void(0)" class="text-white"> Shop </a>
              <a href="javascript:void(0)" class="text-white"> MangoPicking </a>
              <a href="javascript:void(0)" class="text-white"> Testimonials </a>
              <a href="javascript:void(0)" class="text-white"> Contact </a>
            </div>
          </div>
          <!-- menu -->
          <div class="col">
            <div
              class="q-pl-sm q-gutter-sm row items-center no-wrap absolute-right q-mr-xl text-black"
            >
              <q-btn v-if="$q.screen.gt.xs" dense flat>
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
                    <q-item clickable class="GL__menu-link">
                      <q-item-section>Blog</q-item-section>
                    </q-item>
                    <q-item clickable class="GL__menu-link">
                      <q-item-section>Gallery</q-item-section>
                    </q-item>
                    <q-item clickable class="GL__menu-link">
                      <q-item-section>Ripening Tips</q-item-section>
                    </q-item>
                    <q-item clickable class="GL__menu-link">
                      <q-item-section>Harvesting Process</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable class="GL__menu-link text-no-wrap">
                      <q-item-section
                        ><q-icon name="login" />Login</q-item-section
                      >
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>

              <div
                class="row items-center no-wrap bg-warning q-pa-sm rounded-borders"
              >
                <q-btn
                  v-if="$q.screen.gt.xs"
                  dense
                  flat
                  round
                  size="sm"
                  icon="shopping_cart"
                />
                Cart
              </div>
            </div>
          </div>
        </div>

        <!-- stuff -->

        <!-- stuff  -->
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer elevated>
      <q-toolbar>
        <div class="row">
          <div class="col col-md-auto"><WIcon class="no-wrap" /></div>

          <div class="col column" style="height: 150px" absolute>
            <div
              class="col"
              style="transform: translateY(-75px) translateX(-75px)"
            >
              <h1>FarmWeb</h1>
            </div>
            <div
              class="col text-no-wrap text-gray"
              style="transform: translateX(-75px)"
            >
              we do mangos you eat them!
            </div>
          </div>
        </div>
      </q-toolbar>
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
          Whatsapp Us
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

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss"></style>
