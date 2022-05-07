<link rel="stylesheet" href="app.scss" />

<template>
  <q-layout view="hhh lpr fff">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <div class="column no-wrap items-center fit GNL__toolbar">
        <div class="col">
          <div
          class="q-my-lg"
          style="
            width:300px;
            height:100px;
            background:gray
            "
          >
          </div>
        <!--- Links -->
        <div class="col row items-center">
          <div
            class="
              GL__toolbar-link
              q-mx-xl q-gutter-lg
              row
              items-center
            "
            >

            <div
              style="
                content: '';
                width:75px;
                height:50px;
                background:gray
                "
            >
            </div>
          </div>
        <!--- Links -->

        <!--- Menu -->
            <div
              class="q-mx-xl"
              style="
                content: '';
                width:75px;
                height:50px;
                background:gray
                "
            >
            </div>
            <div
              class="q-mx-xl"
              style="
                content: '';
                width:75px;
                height:50px;
                background:gray
                "
            >
            </div>
          </div>
        <!--- Menu -->
        </div>
      </div>
      <q-toolbar class="row">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Farmweb" />
          <q-breadcrumbs-el label="About" />
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
    const search = ref("");

    return {
      search,
    };
  },
};
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 150px
    background-image: url("/background/pexels-kelly-l-4098496.jpg")

  &__toolbar-input
    width: 55%
</style>
