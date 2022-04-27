<template>
  <q-layout view="hHh lpR lFr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
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
          <q-avatar>
            <q-icon name="fa-brands fa-whatsapp" />
            <!--<img src="\static\kindpng_497719.png" style="max-width: 30px; height: 30px;">-->
          </q-avatar>
          <q-item-section>
            Whatsapp Us!
          </q-item-section>
          <q-badge color="red" label="!" rounded floating>!</q-badge>
          
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
