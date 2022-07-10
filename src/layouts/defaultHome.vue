<template>
  <q-layout view="hhh lpr fff">
    <!-- The Header -->
    <q-header class="home-header">
      <default-header />
    </q-header>

    <q-footer class="bg-dark" elevated>
      <default-footer />
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <default-floatie />
  </q-layout>
</template>

<script>
import DefaultHeader from "src/components/layout_components/defaultHeader.vue";
import DefaultFooter from "src/components/layout_components/defaultFooter.vue";
import DefaultFloatie from "src/components/layout_components/defaultFloatie.vue";

export default {
  // name: 'LayoutName',

  components: { DefaultHeader, DefaultFooter, DefaultFloatie },
};
</script>

<style lang="scss">
.home-header {
  height: 0;
}
</style>
