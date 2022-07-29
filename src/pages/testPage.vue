<template>
  <q-page padding>
    <div>
      email<input type="text" v-model="FormData.email" /> <br /><br /><br />
      password<input
        type="text"
        v-model="FormData.password"
      /><br /><br /><br />
      <input
        type="button"
        value="login"
        @click="$store.dispatch('mydata/registerUser', FormData)"
      />
      <input
        type="button"
        value="Other button"
        @click="dostuff"
      />
        <input
        type="button"
        value="Other button"
        @click="printstuff"
      />
      <div>{{ $store.state.mydata.productData }}</div>
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";

export default {
  // name: 'PageName',
  data: function () {
    return {
      FormData: {
        email: "",
        password: "",
      },
    };
  },
  methods:{
    dostuff:function(){
      this.$store.commit('mydata/getProducts',"yeah!");
    },
    printstuff:function(){console.log(this.$store.state.mydata.userData)}
    },
  created() {},
  setup() {
    let data = {
      email: "",
      password: "",
    };

    const query = "hmm";
    const apiKey = "yeah!";

    const getResponse = () => {
      api
        .get("")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      getResponse,
    };
  },
};
</script>
