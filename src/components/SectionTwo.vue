<template>
  <div class="parallax_layer base_layer q-gutter-xl">
    <q-space />
    <q-space />
    <q-space />
    <q-card class="my-card text-center shadow-24">
      <div style="filter: brightness(60%)">4</div>

      <q-card-section
        class="text-black text-subtitle1"
        style="max-width: 300px"
      >
        I have always been facinated by data science and the possibilities it
        opened up. I mainly focus on machine learning, ai, and deep learning,
        looking forward to tackling natural language processing soon!
      </q-card-section>
    </q-card>
    <q-space />
  </div>
  <div class="parallax_layer bot_layer">
    <div
      width="100px"
      style="
        position: absolute;
        transform: translateX(450px) translateY(-300px);
      "
    >
      1
    </div>
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
      width="400px"
      style="
        position: absolute;
        transform: translateX(-50px) translateY(-250px) rotate(10deg);
      "
    >
      3
    </div>
  </div>
  <div class="parallax_layer mid_layer q-gutter-xl">
    <q-space />
    <div class="text-h1 text-white">Data Science</div>
    <q-space />
    <q-space />
    <q-space />
  </div>
  <div class="parallax_layer top_layer">
    <div
      style="
        position: absolute;
        background-color: white;
        width: 400px;
        height: 20px;
        transform: translateX(-250px) translateY(60px);
        border-radius: 0px 0px 50px 50px;
        opacity: 0.7;
      "
    ></div>
    <div
      style="
        position: absolute;
        background-color: gray;
        width: 300px;
        height: 20px;
        transform: translateX(-250px) translateY(100px);
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
        transform: translateX(320px) translateY(-240px);
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
        transform: translateX(320px) translateY(-210px);
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
        transform: translateX(320px) translateY(230px);
        border-radius: 3px 3px 12px 12px;
        opacity: 0.7;
      "
    ></div>
    <span class="invisible">Top Layer Page</span>
  </div>
  <div class="parallax_layer final_layer">
    <div
      width="300px"
      style="
        position: absolute;
        transform: translateX(-600px) translateY(-150px) rotate(-35deg);
      "
    >
      5
    </div>
    <div
      width="100px"
      style="position: absolute; transform: translateX(80px) translateY(230px)"
    >
      6
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
