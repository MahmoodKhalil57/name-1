<template>
  <q-layout view="hHh lpR lFr">

    <q-header elevated class="bg-primary text-white q-pa-xl" height-hint="98">

      <q-avatar>
        <img src="/SVG/manggo.svg">
      </q-avatar>
      Title



      <q-tabs alignment="center">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
        <q-route-tab to="/page4" label="Page Four" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="transparent">
      <div class="q-pa-md q-gutter-sm">
        <q-btn push color="green" text-color="White" rounded>
          <q-avatar icon="fa-brands fa-whatsapp"> </q-avatar>
          <q-item-section>
            Whatsapp Us
          </q-item-section>
          <q-badge color="red" rounded floating>
            <q-avatar icon="fa-solid fa-exclamation" size="1.5em"> </q-avatar>
          </q-badge>

        </q-btn>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
