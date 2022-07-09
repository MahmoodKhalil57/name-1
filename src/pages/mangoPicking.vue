<template>
  <q-page class="q-mb-xl q-mx-xl default-page" padding>
    <!-- content -->
    <div class="text-section">
      <span class="default-header">
        Drive straight into a tropical mango haven!
      </span>
      <br />
      <iframe
        class="floating-video"
        src="https://www.youtube.com/embed/_CpEdlOZLvk"
        title="SooperMango - Driving straight into a tropical mango haven!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="q-pa-md">
        <br />
        <span class="default-content">
          <q-icon
            name="fa-solid fa-quote-left"
            style="padding-bottom: 2px"
          ></q-icon>
          Wish to get out and do something over a weekend ? Looking at getting
          fresh air in the country side ? Well, this is just for you. Here is a
          chance to step back from hectic city routines and immerse yourself in
          the tranquillity of lush mango grove on our 14 acre orchard, keeping
          the fun element and spending an experiential day
          <q-icon
            name="fa-solid fa-quote-right"
            style="padding-bottom: 2px"
          ></q-icon>
        </span>

        <br /><br />

        <span class="content-header">Who can come</span>
        <br />
        <span class="default-content">
          All ages are welcome, You can park your cars inside our orchard.
        </span>

        <br /><br />

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

        <br /><br />

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
        <br /><br />
      </div>
    </div>
    <div class="form-section">
      <span class="default-header"> MangoPicking - Registration Form </span>
      <br />
      <div class="form-gutter row q-gutter-sm">
        <div class="default-form">
          <!-- q-input name-->
          <q-input
            v-model="name"
            label="Name"
            placeholder="Enter your name"
            :error="nameError"
            :error-message="nameErrorMessage"
            :rules="nameRules"
            :clearable="true"
            :autofocus="true"
            @input="nameInput"
          ></q-input>
          <!-- q-input email-->
          <q-input
            v-model="email"
            label="Email"
            placeholder="Enter your email"
            :error="emailError"
            :error-message="emailErrorMessage"
            :rules="emailRules"
            :clearable="true"
            @input="emailInput"
          ></q-input>
          <!-- q-input phone-->
          <q-input
            v-model="phone"
            label="Phone"
            placeholder="Enter your phone"
            :error="phoneError"
            :error-message="phoneErrorMessage"
            :rules="phoneRules"
            :clearable="true"
            @input="phoneInput"
          ></q-input>
          <!-- q-input number of people -->
          <q-input
            v-model="people"
            label="Number of People"
            placeholder="Enter number of people"
            :error="peopleError"
            :error-message="peopleErrorMessage"
            :rules="peopleRules"
            :clearable="true"
            @input="peopleInput"
          ></q-input>
          <div class="row q-gutter-md">
            <!-- q-input date -->
            <q-input
              v-model="date"
              label="Date"
              placeholder="Enter date"
              :error="dateError"
              :error-message="dateErrorMessage"
              :rules="dateRules"
              :clearable="true"
              @input="dateInput"
            >
            </q-input>
            <!-- q-input time -->
            <q-input
              v-model="time"
              label="Time"
              placeholder="Enter time"
              :error="timeError"
              :error-message="timeErrorMessage"
              :rules="timeRules"
              :clearable="true"
              @input="timeInput"
            >
            </q-input>
          </div>
          <span>
            *You will receive an email from SooperMango confirming your slot.<br />
          </span>
          <!-- q-submit -->
          <q-btn
            @click="submit"
            :loading="loading"
            :disabled="disabled"
            color="primary"
            label="Submit"
          >
          </q-btn>
        </div>
        <iframe
          frameBorder="0"
          class="default-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageName",
};
</script>

<style lang="scss">
.forn-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: block;
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
.floating-video {
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
.default-map {
  height: 450px;
  border-radius: 10px;
  border: 0px solid black;
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
  width: 35vw;
  @media only screen and (max-width: 980px) {
    width: 70vw;
  }
}
.default-form {
  width: 35vw;
  @media only screen and (max-width: 980px) {
    width: 70vw;
  }
}

.text-section,
.form-section {
  max-width: 90%;
}
</style>
