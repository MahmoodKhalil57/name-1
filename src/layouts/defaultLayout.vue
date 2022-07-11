<template>
  <q-layout view="hhh lpr fff">
    <!-- The Header -->
    <q-header elevated :class="!$route.meta.current ? 'home-header' : ''">
      <default-header />
    </q-header>
    <!-- /The Header -->

    <!-- The Footer-->
    <q-footer class="bg-dark" elevated>
      <default-footer />
    </q-footer>
    <!-- /The Footer-->

    <!-- The Content -->
    <q-page-container v-if="!$route.meta.current">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <q-page-container class="bg-secondary" v-else>
      <!-- This is where pages get injected -->
      <q-card class="my-card bg-info q-ma-md shadow-24">
        <router-view />
      </q-card>
    </q-page-container>
    <!-- /The Content -->

    <!-- Floaties -->
    <default-floatie />
    <!-- /Floaties -->
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
