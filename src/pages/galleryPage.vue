<template>
  <!--pageContainer-->
  <q-page class="column content-center">
    <!--Item1:header-->
    <span class="header-title text-center q-mt-xl q-mb-lg"> Gallery </span>
    <!--Item2:FlexRowContainer-->
    <div class="row q-pa-xl q-mb-xl q-gutter-lg justify-between flex-container">
      <!--5Items Of Item2: FlexColumnContainer-->
      <div class="flex-item" v-for="image in images" :key="image">
        <img
          v-if="!!image.image_link"
          :src="image.image_link"
          style="width: 20vw; height: 20vw; content: ''; max-width: 300px"
        />
        <iframe
          class="floating-video"
          :src="image.video_link"
          title="SooperMango - Driving straight into a tropical mango haven!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="text-center">
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
          content: "Orchard View",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/1.jpeg",
          content: "Orchard View",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/2.jpeg",
          content: "Orchard View",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/3.jpeg",
          content: "In the midst of Rajgira Mango Tree",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/4.jpeg",
          content: "Hand Picked and stored in container",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/5.jpeg",
          content: "Hand Picked and stored in container",
        },
        {
          image_link: "https://soopermango.com/images/gallery-images/5.jpeg",
          content: "Hand Picked and stored in container",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.flex-item {
  border-style: solid;
  border-width: 1px;
  max-width: 300px;
  height: 100%;
}

.flex-container {
  border-style: solid;
  border-width: 1px;
  max-width: 1200px;
}
.title-fonts {
  font: normal normal 900 22px/42px Thasadith, sans-serif;
  color: #323648;
  text-transform: uppercase;
}
.content-fonts {
  font: normal normal 100 17px/34px Verdana;
  color: #707579;
}

.id-fonts {
  font: normal normal 700 24px/36px Roboto, sans-serif;
  color: #009f4d;
}

.header-title {
  font: normal normal 700 30px/36px Thasadith, sans-serif;
  color: #323648;
}
</style>
}
