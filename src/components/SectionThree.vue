<template>
  <div class="parallax_layer base_layer q-gutter-xl">
    <q-space />
    <q-space />
    <q-space />
    <q-card class="my-card text-center .shadow-24">
      <div style="filter: brightness(60%)">1</div>

      <q-card-section
        class="text-black text-subtitle1"
        style="max-width: 300px"
      >
        I have found that focusing on web development allows me to build
        beautiful, responsive, and easy to use applications that can be used on
        many modern devices.
      </q-card-section>
    </q-card>
    <q-space />
  </div>
  <div class="parallax_layer bot_layer">
    <div
      width="100px"
      style="
        position: absolute;
        transform: translateX(600px) translateY(-100px) rotate(65deg);
      "
    >
      2
    </div>
    <div
      style="
        position: absolute;
        transform: translateX(-650px) translateY(-150px) rotate(-25deg);
      "
    >
      3
    </div>
  </div>
  <div class="parallax_layer mid_layer q-gutter-xl">
    <q-space />
    <div class="text-h1 text-white">Web Dev</div>
    <q-space />
    <q-space />
    <q-space />
    <div
      style="
        position: absolute;
        transform: translateX(650px) translateY(-220px) rotate(20deg);
      "
    >
      4
    </div>
  </div>
  <div class="parallax_layer top_layer">
    <div
      style="
        position: absolute;
        background-color: white;
        width: 300px;
        height: 20px;
        transform: translateX(-285px) translateY(60px);
        border-radius: 0px 0px 50px 50px;
        opacity: 0.7;
      "
    ></div>
    <div
      style="
        position: absolute;
        background-color: gray;
        width: 200px;
        height: 20px;
        transform: translateX(-285px) translateY(100px);
        border-radius: 0px 0px 50px 50px;
        opacity: 0.7;
      "
    ></div>
    <div
      style="
        position: absolute;
        background-color: gray;
        width: 175px;
        height: 20px;
        transform: translateX(320px) translateY(-215px);
        border-radius: 50px 50px 0px 0px;
        opacity: 0.7;
      "
    ></div>
    <div
      style="
        position: absolute;
        background-color: white;
        width: 250px;
        height: 20px;
        transform: translateX(320px) translateY(-185px);
        border-radius: 50px 50px 0px 0px;
        opacity: 0.7;
      "
    ></div>
    <div
      style="
        position: absolute;
        background-color: white;
        width: 300px;
        height: 20px;
        transform: translateX(320px) translateY(205px);
        border-radius: 3px 3px 12px 12px;
        opacity: 0.7;
      "
    ></div>
    <span class="invisible">Top Layer Page</span>
  </div>
  <div class="parallax_layer final_layer">
    <div
      width="100px"
      style="
        position: absolute;
        transform: translateX(530px) translateY(-220px) rotate(-20deg);
      "
    >
      5
    </div>
    <div
      width="300px"
      style="
        position: absolute;
        transform: translateX(-50px) translateY(-200px) rotate(35deg);
      "
    >
      6
    </div>
    <div
      width="100px"
      style="
        position: absolute;
        transform: translateX(-550px) translateY(250px);
      "
    >
      6
    </div>
    <div
      width="150px"
      style="
        position: absolute;
        transform: translateX(-400px) translateY(250px);
      "
    >
      7
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTwo",
  setup() {
    return {};
  },
};
</script>
