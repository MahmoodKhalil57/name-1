<template>
  <div class="row items-center" :class="scale_stage_1[fw_gt_lg].header">
    <!-- LOGO-->
    <a href="/" :class="scale_stage_2[fw_gt_sm].icon_align" class="q-my-lg rlu">
      <w-icon
        class="col"
        :iconSize="scale_stage_1[fw_gt_lg].icon[0]"
        :style="scale_stage_2[fw_gt_sm].icon_offset"
      />
      <w-name
        class="col"
        :iconSize="scale_stage_1[fw_gt_lg].icon[1]"
        :style="scale_stage_2[fw_gt_sm].name_offset"
      />
    </a>
    <q-space v-if="scale_stage_2[fw_gt_sm].logo_space" />
    <!-- /LOGO -->
    <!--- Links -->
    <div>
      <div
        v-if="scale_stage_1[fw_gt_lg].nav"
        class="
          inline
          GL__toolbar-link
          row
          no-wrap
          text-body1 text-weight-bold text-white
        "
      >
        <q-btn flat rounded href="/"> <q-icon name="home" /> Home </q-btn>
        <q-btn flat rounded href="/about"> About </q-btn>
        <q-btn flat rounded href="/shop"> Shop </q-btn>
        <q-btn flat rounded href="/mango-picking"> MangoPicking </q-btn>
        <q-btn flat rounded href="/your-reviews"> Testimonials </q-btn>
        <q-btn flat rounded href="/contact"> Contact </q-btn>
      </div>
    </div>
    <!--- /Links -->
    <!--- Buttons -->
    <nav class="q-gutter-sm row items-center no-wrap q-mx-xl text-black">
      <!-- Navigate -->
      <q-btn v-if="!scale_stage_1[fw_gt_lg].nav" dense flat>
        <div class="row items-center no-wrap bg-accent q-pa-sm rounded-borders">
          Navigate
          <q-icon
            name="arrow_drop_down"
            size="16px"
            style="margin-left: -2px"
          />
        </div>
        <q-menu auto-close>
          <q-list dense style="min-width: 100px">
            <q-item clickable href="/about">
              <q-item-section>About</q-item-section>
            </q-item>
            <q-item clickable href="/shop">
              <q-item-section>Shop</q-item-section>
            </q-item>
            <q-item clickable href="/mango-picking">
              <q-item-section>Mangopicking</q-item-section>
            </q-item>
            <q-item clickable href="/your-reviews">
              <q-item-section>Testimonials</q-item-section>
            </q-item>
            <q-item clickable href="contact">
              <q-item-section>Contact</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <!-- /Navigate -->
      <!-- Cart -->
      <q-btn
        color="accent"
        text-color="black"
        icon="shopping_cart"
        label="cart"
        href="/cart  "
      />
      <!-- /Cart -->

      <!-- Menu -->
      <q-btn dense flat>
        <div
          class="
            row
            items-center
            no-wrap
            bg-accent
            q-pa-sm
            rounded-borders
            shadow-3
          "
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
            <q-item clickable href="/blog">
              <q-item-section>Blog</q-item-section>
            </q-item>
            <q-item clickable href="/gallery">
              <q-item-section>Gallery</q-item-section>
            </q-item>
            <q-item clickable href="/tips">
              <q-item-section>Ripening Tips</q-item-section>
            </q-item>
            <q-item clickable href="/harvesting-process">
              <q-item-section>Harvesting Process</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable href="/login">
              <q-item-section>
                <div>
                  <q-icon name="login" />
                  <span class="q-mx-sm">Login</span>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <!-- /Menu -->
    </nav>
    <!--- /Buttons -->
  </div>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  // name: 'LayoutName',
  data: function () {
    return {
      scale_stage_1: [
        {
          header: "justify-between",
          icon: ["4.4", "4.4"],
          nav: true,
        },
        {
          header: "justify-center",
          icon: ["5", "6"],
          nav: false,
        },
      ],
      scale_stage_2: [
        {
          logo_space: true,
          icon_align: "row",
          name_offset: "transform: translateX(-30%) translateY(0%)",
          icon_offset: "transform: translateX(10%) translateY(0%)",
        },
        {
          logo_space: false,
          icon_align: "column",
          name_offset: "transform: translateX(0%) translateY(15%)",
          icon_offset: "transform: translateX(0%) translateY(15%)",
        },
      ],
    };
  },
  computed: {
    fw_gt_lg() {
      return +!this.$q.screen.gt.lg;
    },
    fw_gt_sm() {
      return +!this.$q.screen.gt.sm;
    },
  },
  setup() {
    const $q = useQuasar();
    $q.screen.setSizes({ sm: 300, md: 1041, lg: 1500, xl: 1500 });
    return {
      $q,
    };
  },
};
</script>
