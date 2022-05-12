<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <div>
        <div v-if="$q.screen.lt.md" class="column">
          <w-icon class="" iconSize="6" />
          <w-name class="" iconSize="5" />
        </div>
        <div v-else class="row justify-center items-center">
          <w-icon class="col" iconSize="4.4" />
          <w-name class="col" iconSize="4.4" />
        </div>
      </div>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import WIcon from "src/components/WIcon.vue";
import WName from "src/components/WName.vue";

export default {
  components: { WIcon, WName },
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
