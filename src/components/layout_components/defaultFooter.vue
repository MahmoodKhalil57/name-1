<template>
  <!-- Shop now -->
  <div>
    <q-toolbar class="q-py-lg row justify-center">
      <q-btn
        class="text-h3"
        color="accent"
        text-color="black"
        icon="shopping_cart"
        label="Shop Now"
        to="/shop"
        rounded
      />
    </q-toolbar>
    <!-- /Shop now -->
    <!-- Google Maps
    <q-toolbar class="no-margin">
      <div
        class="bg-yellow-10 q-pa-md fit column wrap items-center"
        style="border-radius: 10px"
      >
        <iframe
          frameBorder="0"
          class="full-width"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
          height="450"
          style="
            border-radius: 10px;
            border: 0px solid black;
            box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
            max-width: 85%;
          "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </q-toolbar>
    /Google Maps-->
    <!-- Icon  -->
    <q-toolbar class="q-py-lg row justify-center">
      <router-link to="/" :class="scale_stage_2[fw_gt_sm].icon_align" class="rlu">
        <w-icon
          class="col self-center"
          :iconSize="scale_stage_1[fw_gt_lg].icon[0]"
          :style="scale_stage_2[fw_gt_sm].icon_offset"
        />
        <w-name
          class="col self-center"
          :iconSize="scale_stage_1[fw_gt_lg].icon[1]"
          :style="scale_stage_2[fw_gt_sm].name_offset"
        />
      </router-link>
    </q-toolbar>
    <!-- /Icon  -->
    <!-- Social media -->
    <q-toolbar
      class="row max-width wrap justify-evenly q-py-xl fa-4x q-gutter-lg"
      style="width: auto; height: auto"
    >
      <iframe
        frameBorder="0"
        class="full-width"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
        height="450"
        style="
          border-radius: 10px;
          border: 0px solid black;
          box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
          max-width: 85%;
        "
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </q-toolbar>
   /Google Maps-->
  <!-- Icon  -->
  <q-toolbar class="q-py-lg row justify-center">
    <a href="/" :class="scale_stage_2[fw_gt_sm].icon_align" class="rlu">
      <w-icon
        class="col self-center"
        :iconSize="scale_stage_1[fw_gt_lg].icon[0]"
        :style="scale_stage_2[fw_gt_sm].icon_offset"
      />
      <w-name
        class="col self-center"
        :iconSize="scale_stage_1[fw_gt_lg].icon[1]"
        :style="scale_stage_2[fw_gt_sm].name_offset"
      />
    </a>
  </q-toolbar>
  <!-- /Icon  -->

    <!-- whatsapp/num/email-->
    <q-toolbar class="q-my-md justify-center align-center">
      <q-card class="bg-primary">
        <q-card-section :class="scale_stage_2[fw_gt_sm].icon_align">
          <router-link to="javascript:void(0)" target="_self" class="flinks">
            <q-icon name="mail"> </q-icon>
            Emailaddress@website.com
          </router-link>
          <q-separator dark vertical class="q-mx-sm" />
          <router-link to="/" class="flinks">
            <q-icon name="fa-brands fa-whatsapp"></q-icon>
            +20122222234345
          </router-link>
        </q-card-section>
      </q-card>
    </q-toolbar>
    <!-- /whatsapp/num/email-->

  <!-- Social media -->
  <q-toolbar
    class="row max-width wrap justify-evenly q-py-xs fa-4x q-gutter-lg"
    style="width: auto; height: auto"
  >
    <q-space />
    <a href="javascript:void(0)" target="_self" class="flinks">
      <q-icon class="fa-brands fa-facebook-square" color="blue-8" />
    </a>

    <a href="javascript:void(0)" target="_self" class="flinks">
      <q-icon class="fa-brands fa-instagram insta radio" color="dark" />
    </a>

    <a href="javascript:void(0)" target="_self" class="flinks">
      <q-icon class="fa-brands fa-twitter-square" color="light-blue-5" />
    </a>

    <a href="javascript:void(0)" target="_self" class="flinks">
      <q-icon class="fa-brands fa-youtube-square" color="red" />
    </a>
    <q-space />
  </q-toolbar>
  <!-- /Social media -->

  <!--location-->
  <q-toolbar class="q-pt-lg justify-center align-center no-margin">
    <a href="https://goo.gl/maps/XHHJXeABQKWpaBGw8" target="_blank" class="flinks">
      <q-icon name="fa-solid fa-location-dot" /> 28 Cairo - Alexandria Desert
      Rd, Al Giza Desert, Giza Governorate 12677, Egypt</a
    >
      <q-btn class="q-my-md" color="deep-orange" push>
        <q-card flat class="flat transparent">
          <q-card-section horizontal>
            <q-card-section class="q-pa-sm">
              <q-icon left name="fa-brands fa-apple" />
            </q-card-section>
            <q-separator vertical class="" />
            <q-card-section class="q-py-none">
              Available at the<br />
              App Store
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-btn>
      <q-btn class="q-my-md" color="deep-orange" push>
        <q-card flat class="flat transparent">
          <q-card-section horizontal>
            <q-card-section class="q-pa-sm">
              <q-icon left name="fa-brands fa-google-play scl-dw" />
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="q-py-none q-px-sm">
              Get it on<br />
              Google play
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-btn>
    </q-toolbar>
    <!-- /Appstore / Google play buttons-->

    <!--location-->
    <q-toolbar class="q-pt-lg justify-center align-center no-margin">
      <span>
        <q-icon name="fa-solid fa-location-dot" /> 28 Cairo - Alexandria Desert
        Rd, Al Giza Desert, Giza Governorate 12677, Egypt</span
      >
    </q-toolbar>
    <!--location-->

    <!-- User can see a small list of strings next to each other with the first four as hyper links indicating
        [terms - privacy - refund - shipping policy] and then copy right of website, and then a link to the developer info.
        With a vertical line dividing each item from the following. -->
    <q-toolbar class="q-pt-lg justify-center align-center no-margin">
      <span><router-link to="/terms" target="_self" class="flinks">Terms</router-link></span>
      <div class="vl q-mx-sm"></div>
      <span><router-link to="/privacy" target="_self" class="flinks">privacy</router-link></span>
      <div class="vl q-mx-sm"></div>
      <span><router-link to="/refund" target="_self" class="flinks">refund</router-link></span>
      <div class="vl q-mx-sm"></div>
      <span
        ><router-link to="/shipping" target="_self" class="flinks"
          >shipping policy</router-link
        ></span
      >
    </q-toolbar>

    <q-toolbar class="q-pa-lg justify-center align-center no-margin">
      <router-link to="javascript:void(0)" target="_self" class="flinks">
        <span>Powered by <strong>SupaDevs</strong> in Egypt. </span>
      </router-link>
      <div class="vl q-mx-sm"></div>
      <router-link to="javascript:void(0)" target="_self" class="flinks">
        <span>All rights reserved © 2022 <strong>SupaDevs.</strong> </span>
      </router-link>
    </q-toolbar>
    <!--[terms - privacy - refund - shipping policy]-->
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

<style>
.insta {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
.radio {
  border-radius: 30%;
}
.idk {
  @media only screen and (max-width: 375px) {
    max-width: 365px;
  }
}
</style>
