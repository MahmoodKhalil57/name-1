<template>
  <q-page class="q-mb-xl default-page" padding>
    <!-- content -->
    <div class="default-header">
      Testimonials <br />
      <h6>Here's what our customers have been saying about us</h6>
    </div>
    <div
      class="default-customer q-gutter-md"
      v-for="testimonial in testimonials"
      :key="testimonial.id"
    >
      <br />
      <hr />
      <br />
      <div class="quote-header">"{{ testimonial.title }}"</div>
      <q-img
        class="default-testimonial-img"
        v-for="screenshot in testimonial.screenshots"
        :key="screenshot"
        :src="screenshot"
      ></q-img>
      <iframe
        width="320"
        height="440"
        class="default-testimanial-insta"
        frameborder="0"
        v-for="instapost in testimonial.instagram"
        :key="instapost"
        :src="instapost"
      ></iframe>
    </div>
    <iframe
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhusudan.vasudevarao%2Fposts%2Fpfbid06Ma5KKSUutK23dhZyz8CitP2vJonEHZj2WrAY1Vwv16BW9oqX4jjsz6KtnL4exvsl&width=500&show_text=true&height=723&appId"
      width="500"
      height="723"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </q-page>
</template>

<script>
export default {
  name: "PageName",
  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          title: "Perfect blend of sweet, color and taste",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_8.jpeg",
          ],
        },
        {
          id: 2,
          title: "Well I had one, it was delicious",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_7.jpeg",
          ],
        },
        {
          id: 3,
          title: "That's how they look right now!",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_4.jpeg",
          ],
        },
        {
          id: 4,
          title: "Truly Sooper Mango!",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_5.jpeg",
          ],
        },
        {
          id: 5,
          title: "Very yummy, tasty!",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_6.jpeg",
          ],
          instagram: ["https://www.instagram.com/p/COPlnEyFFeO/embed"],
        },
        {
          id: 6,
          title: "Mangoes are very good and packing too is very good",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_2.jpeg",
          ],
        },
        {
          id: 7,
          title: "Awesome tasty mangoes",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_3.jpeg",
          ],
          instagram: ["https://www.instagram.com/p/COP4ou6pnuA/embed"],
        },
        {
          id: 8,
          title: "Amazing Taste! When Can I order next ?",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_1.jpeg",
          ],
        },
        {
          id: 9,
          title: "They are sooper sweet, Mango Ice Cream next on our menu.",
          screenshots: [
            "https://soopermango.com/images/customers/review_fb_1.jpg",
          ],
        },
        {
          id: 10,
          title: "The packaging is professional and the smell is divine.",
          screenshots: [
            "https://soopermango.com/images/customers/review_whatsapp_8.jpeg",
          ],
          instagram: [
            "https://www.instagram.com/p/CBBTHbygAEl/embed",
            "https://www.instagram.com/p/CBDtGHDJOFP/embed",
            "https://www.instagram.com/p/CBDz2cwpmIa/embed",
          ],
          facebook: [
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaranamkiran%2Fposts%2Fpfbid0iCAeEhJxa8pGRAQadf3DcsKXRBygyvJTKAtRY2TWhfyZfC88m71dthLUzDnXVwzpl&width=500&show_text=true&height=703&appId",
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpallavi.kasbe.39%2Fposts%2Fpfbid05VmgkuHFaWJREEDeqVWwcUrhmBKt2rWZvdUbX8Mn33EbC9PrkNvg5vUUrAc4rG96l&width=500&show_text=true&height=610&appId",
            "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhusudan.vasudevarao%2Fposts%2Fpfbid06Ma5KKSUutK23dhZyz8CitP2vJonEHZj2WrAY1Vwv16BW9oqX4jjsz6KtnL4exvsl&width=500&show_text=true&height=723&appId",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
hr {
  width: 70vw;
}
.default-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.default-header {
  font-size: 2.5rem;
}
.default-customer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.default-quote {
}
.quote-header {
  font-family: "Thasadith", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: #323648;
}
.default-testimonial-img {
  height: 60%;
  width: 60%;
}
.default-testimanial-insta {
  height: 70vw;
  width: 42vw;
}
</style>
