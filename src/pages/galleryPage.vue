<template>
  <!--pageContainer-->
  <q-page class="column content-center">
    <!--Item1:header-->
    <span class="header-title text-center q-mt-xl q-mb-lg"> Gallery </span>
    <!--Item2:FlexRowContainer-->
    <div class="row q-pa-xl q-gutter-lg justify-between flex-container">
      <!--5Items Of Item2: FlexColumnContainer-->
      <div class="column flex-item" v-for="image in images" :key="image">
        <router-link v-if="!!image.image_link" :to="image.image_link"
          ><img :src="image.image_link" class="defualt-width default-height"
        /></router-link>
        <iframe
          v-else
          class="floating-video defualt-width default-height"
          :src="image.video_link"
          title="SooperMango - Driving straight into a tropical mango haven!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="q-pa-sm content-text defualt-width default-height">
          <span>{{ image.content }} </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'ComponentName',
  data: function () {
    return {
      images: [
        {
          video_link: "https://www.youtube.com/embed/_CpEdlOZLvk",
          content:
            "Leave the city buzz behind, and drive straight into a tropical mango haven!",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/1.jpeg",
          content: "Orchard View",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/2.jpeg",
          content: "In the midst of Rajgira Mango Tree",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/3.jpeg",
          content: "Hand Picked and stored in container",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/6.jpeg",
          content: "Safely transported to ripening chamber",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/4.jpeg",
          content: "Mangoes are sorted manually and put inside the 3kg box",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/5.jpeg",
          content: "Ready to be delivered",
        },
        {
          image_link:
            "https://soopermango.com/images/gallery-images/IMG_2252.jpg",
          content: "Hill View",
        },
        {
          image_link:
            "https://soopermango.com/images/gallery-images/IMG_2253.jpg",
          content: "Mangoes",
        },
        {
          image_link:
            "https://soopermango.com/images/gallery-images/IMG_2255.jpg",
          content: "Mallika",
        },
        {
          image_link:
            "https://soopermango.com/images/gallery-images/IMG_2367.jpg",
          content: "Mallika - Mango season starts!",
        },
        {
          image_link:
            "https://soopermango.com/images/gallery-images/harvesting_totapuri.jpg",
          content: "Totapuri Harvesting & Packing",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  max-width: 1200px;
}

.header-title {
  font: normal normal 700 30px/36px Thasadith, sans-serif;
  color: #323648;
}
.content-text {
  font: normal normal 100 17px/34px "Verdana", sans-serif;
  color: #707579;
}
.default-height {
  width: 20vw;
  max-width: 300px;
}
.default-width {
  height: auto;
}
</style>
}
