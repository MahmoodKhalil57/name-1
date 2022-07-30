<template>
  <q-page class="q-mb-xl column default-page q-gutter-sm" padding>
    <div class="default-header">Contact Us</div>
    <div class="row q-gutter-md">
      <div class="row q-gutter-md">
        <q-icon class="fa-brands fa-envira circle-icon" />
        <div class="column">
          <span class="header-two">Visit Us</span>
          <span class="content-two">
            Pavana Vatika Orchards, Thinakallu, Chintamani, Karnataka, India
            563125
          </span>
        </div>
      </div>
      <div class="row q-gutter-md">
        <q-icon class="fa-brands fa-envira circle-icon" />
        <div class="column">
          <span class="header-two">Mail Us</span>
          <span class="content-two"> sales@soopermango.com </span>
        </div>
      </div>
      <div class="row q-gutter-md">
        <q-icon class="fa-brands fa-envira circle-icon" />
        <div class="column">
          <span class="header-two">Call Us</span>
          <span class="content-two"> +91 6362479557 </span>
        </div>
      </div>
    </div>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="default-form row q-gutter-md"
    >
      <div class="form-boxes">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules="ondemand"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="email"
          label="Your email *"
          hint="Enter your email"
          lazy-rules="ondemand"
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            (val) =>
              (val && /^.+@.+\..+$/.test(val)) || 'Please enter a valid email',
          ]"
        />
        <!-- Q-input mobile number -->
        <q-input
          filled
          type="number"
          v-model="mobile"
          label="Your mobile number *"
          hint="Enter your mobile number"
          lazy-rules="ondemand"
          :rules="[
            (val) =>
              (val !== null && val !== '') ||
              'Please type number of people in the group',
            (val) => (val > 0 && val < 11) || 'Please type a valid number',
          ]"
        />
      </div>

      <div class="form-boxes">
        <!-- q-input message box-->
        <q-input
          filled
          v-model="message"
          label="Your message *"
          hint="Enter your message"
          lazy-rules="ondemand"
          type="textarea"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <div class="q-pt-md">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </div>
    </q-form>

    <iframe
      frameBorder="0"
      class="default-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.75439222384!2d31.02494087802049!3d30.059745364807686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0554c9b7a3%3A0xdb3b24f330c6ae90!2sDandy%20Mega%20Mall!5e0!3m2!1sen!2suk!4v1651997535725!5m2!1sen!2suk"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style lang="scss" scoped>
.default-page {
  align-items: center;
  justify-content: center;
}
.default-header {
  font-size: 2.5rem;
  font-family: "Thasadith", sans-serif;
}
.circle-icon {
  border-radius: 100%;
  background: $soopergreen;
  color: white;
  width: 70px;
  height: 70px;
  font-size: 30px;
}
.header-two {
  font-size: 1.4em;
}
.content-two {
  color: #707579;
  font-size: 17px;
  line-height: 2em;
  font-weight: 100;
  font-family: "Verdana";
  max-width: 300px;
}
.default-map {
  height: 450px;
  border-radius: 10px;
  border: 0px solid black;
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
  width: 75vw;
}
.default-form {
  max-width: 3000px;
  align-items: center;
  justify-content: center;
}
.form-boxes {
  max-width: 500px;
  width: 70vw;
}
</style>
