<template>
  <!--First Section-->
  <q-card-section>
    <q-toolbar class="q-py-lg">
      <q-card class="transparent no-shadow row justify-center">
        <q-card-section class="my-text" style="width: 50%; min-width: 300px">
          <div v-if="$q.screen.lt.lg" style="height: 200px"></div>
          <div class="q-mt-xl q-pt-xl text-h3 text-white text-center text-bold">
            Fresh Fruits and Vegtables
          </div>
          <div class="q-mt-sm text-subtitle1 text-grey-4 text-center">
            let's go back, follow the yellow brick road.
          </div>
          <div class="text-h6 text-grey-3 text-center">
            Dolor ut anim est magna aliqua. Eu exercitation nostrud laborum
            irure mollit in non elit labore. Aute laborum eu quis Lorem quis. Id
            occaecat deserunt amet id do. Elit non dolore aliquip Lorem nulla.
            Aliquip duis consequat mollit quis esse occaecat. Et minim nisi ad
            esse do ipsum ipsum sunt duis. Dolor ut anim est magna aliqua. Eu
            exercitation nostrud laborum irure mollit in non elit labore. Aute
            laborum eu quis Lorem quis. Id occaecat deserunt amet id do. Elit
            non dolore aliquip Lorem nulla. Aliquip duis consequat mollit quis
            esse occaecat. Et minim nisi ad esse do ipsum ipsum sunt duis.
          </div>
        </q-card-section>
      </q-card>
    </q-toolbar>

    <q-toolbar class="q-py-lg row justify-center my-btn" flat>
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
    <q-img
      src="~assets\background\home-layout.jpg"
      class="header-image absolute-top"
      no-spinner
    />
  </q-card-section>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>


<style lang="scss">
.my-text {
  z-index: 2;
}
.my-btn {
  z-index: 2;
}
.header-image {
  width: 100%;
  height: 105%;
  opacity: 1;
  filter: brightness(60%);
  z-index: 0;
}
</style>
