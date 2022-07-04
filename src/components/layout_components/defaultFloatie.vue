<template>
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

  <q-page-scroller
    position="bottom-right"
    :scroll-offset="100"
    :offset="[30, 30]"
  >
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
