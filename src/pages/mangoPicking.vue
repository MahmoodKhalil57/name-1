<template>
  <q-page class="q-mb-xl default-page" padding>
    <!-- content -->
    <div class="default-header">
      Drive straight into a tropical mango haven!
    </div>
    <br />
    <div class="q-mx-xl" style="max-width: 1100px">
      <iframe
        class="video-iframe"
        src="https://www.youtube.com/embed/_CpEdlOZLvk"
        title="SooperMango - Driving straight into a tropical mango haven!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <span class="default-content">
        <q-icon
          name="fa-solid fa-quote-left"
          style="padding-bottom: 2px"
        ></q-icon>
        Wish to get out and do something over a weekend ? Looking at getting
        fresh air in the country side ? Well, this is just for you. Here is a
        chance to step back from hectic city routines and immerse yourself in
        the tranquillity of lush mango grove on our 14 acre orchard, keeping the
        fun element and spending an experiential day
        <q-icon
          name="fa-solid fa-quote-right"
          style="padding-bottom: 2px"
        ></q-icon>
      </span>

      <br /><br />

      <span>
        <span class="content-header">Who can come</span>
        <br />
        <span class="default-content">
          All ages are welcome, You can park your cars inside our orchard.
        </span>
      </span>
      <br /><br />

      <span>
        <span class="content-header">Mango Picking (Seasonal)</span>
        <br />
        <span class="default-content">
          Reward your taste buds with farm-fresh delicious mangoes and take some
          home too! Besides their unique flavor and fragrance, mango has been
          hailed as king of fruits due to the numerous health benefits it
          offers. It indeed is a powerhouse of nutrients. This divine fruit is
          extraordinarily rich in pectin, vitamin C, fiber and antioxidants that
          are beneficial for human body. You just have to pluck & pay and take
          the mangoes home. It's that simple. So, don't forget to grab some of
          these tasty and beneficial mangoes.
          <br /><br />
          You will stroll in the fields, so make sure to wear shoe which is
          comfortable. Likewise dont think little of city traffic, plan
          accordingly to get to the orchard early, so you can fully utilize your
          visit.
        </span>
      </span>
      <br /><br />

      <span>
        <span class="content-header">Kindly Note</span>
        <br />
        <span class="default-content">
          Online Registration is mandatory. Show the confirmation email from
          SooperMango at the entrance (Confirmation Email is mandatory) Get a
          eco friendly bag (Plastic bag not allowed). You have to get your
          Breakfast or Lunch, you can pick a spot under a shady mango tree and
          enjoy your picnic. Since our orchard is plastic free zone, avoid
          plastic. No Alcohol , No smoking, No Non-Veg Food.
        </span>
      </span>
      <br /><br />
    </div>
    <br />
    <hr />
    <br />
    <div class="quote-content">
      <q-icon
        name="fa-solid fa-quote-left"
        style="padding-bottom: 2px"
      ></q-icon>
      We at Pavana Vatika sell all varieties of mangoes like Totapuri, Mallika,
      Neelam, Mulgoa, Aphonso, Sendhoora.
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageName",
};
</script>

<style lang="scss">
hr {
  height: 50%;
}
.content-header {
  font-size: 1.25rem;
  font-weight: 700;
  color: #707579;
  line-height: 2em;
  letter-spacing: 1px;
  font-family: verdana;
}
.default-link {
  color: #007bff;
  text-decoration: none;
}
.default-link:hover {
  color: #0056b3;
}
.default-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.default-header {
  text-align: center;
  font-family: thasadith, sans-serif;
  color: #323648;
  line-height: 1.2;
  letter-spacing: 2px;
  font-size: 2.5rem;
}
.default-content {
  text-align: left;
  font-size: 17px;
  line-height: 2em;
  letter-spacing: 1px;
  color: #707579;
  font-weight: 100;
  font-family: verdana;
}
.quote-content {
  display: inline;
  font-size: 20px;
  color: #009f4d;
  font-family: "Times New Roman", serif;
}
.video-iframe {
  float: right;
  width: 430px;
  height: 430px;
  padding: 20px;
  @media only screen and (max-width: 876px) {
    float: none;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    float: none;
    width: 90vw;
    height: 90vw;
  }
}
</style>
