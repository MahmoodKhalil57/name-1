<template>
  <!-- Eighth section -->
  <q-card-section class="q-py-xl sectionContainer">
    <div id="child1" class="q-mt-md">
      <h4 class="sectionHeader1 q-pb-lg">Testimonials</h4>
      <q-carousel
        v-model="slide"
        class="testimonial-carousel shadow-1 rounded-borders"
        control-color="black"
        padding
        navigation
        arrows
        infinite
        animated
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide
          :name="testimonial_group.id"
          class="column no-wrap flex-center"
          v-for="testimonial_group in testimonials"
          :key="testimonial_group.id"
        >
          <div class="row q-gutter-lg gutter-slide">
            <q-card
              class="my-card"
              style="height: 274px; max-width: 300px; text-align: left"
              v-for="testimonial in testimonial_group.elements"
              :key="testimonial.id"
            >
              <q-card-section>
                <div class="text-h6" style="height: 64px">
                  {{ testimonial.title }}
                </div>
              </q-card-section>

              <q-card-section>
                <div class="text-subtitle2" style="height: 66px">
                  <q-icon name="fa-solid fa-quote-left"></q-icon>
                  {{ testimonial.content }}
                </div>
              </q-card-section>
              <q-card-section>
                <q-avatar>
                  <img :src="testimonial.image" />
                </q-avatar>
                {{ testimonial.name }}
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-card-section>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'ComponentName',
  data: function () {
    return {
      testimonials: [
        {
          id: 1,
          elements: [
            {
              id: 1,
              title: "WANT TO ORDER AGAIN",
              content:
                "Very sweet and high quality mangoes. Wanted to order again but got disappointed to see as Sold out.",
              name: "Lakshmiprasad G V",
              image:
                "https://soopermango.com/images/customers/raghavendra_kiran.jpg",
            },
            {
              id: 2,
              title: "WORTH THE PRICE!",
              content: "Top quality. Totally worth the price!",
              name: "Divij Bhat",
              image:
                "https://soopermango.com/images/customers/adithya_radhakrishna.jpg",
            },
            {
              id: 3,
              title: "NEAT PACKAGING",
              content:
                "Delicious, fresh mangoes delivered to home with neat packaging and within time.",
              name: "C R Anjana Devi",
              image: "https://soopermango.com/images/customers/hariprasad.jpg",
            },
          ],
        },
        {
          id: 2,
          elements: [
            {
              id: 1,
              title: "BEST SATVIK MANGOES",
              content:
                "The best satvik mangoes from the most pious and divine thota!!!",
              name: "Raghavendra Kiran",
              image:
                "https://soopermango.com/images/customers/raghavendra_kiran.jpg",
            },
            {
              id: 2,
              title: "MANGOES ARE DELICIOUS",
              content:
                "The mangoes are delicious and we relished it. Thanks for delivering it on time.",
              name: "Adithya Radhakrishna",
              image:
                "https://soopermango.com/images/customers/adithya_radhakrishna.jpg",
            },
            {
              id: 3,
              title: "DIVINE TASTE",
              content:
                "Mango was excellent, Sweetest ever, Looking forward for more.",
              name: "Hariprasad",
              image: "https://soopermango.com/images/customers/hariprasad.jpg",
            },
          ],
        },
      ],
    };
  },

  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
