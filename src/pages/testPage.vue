<template>
  <q-page class="flex-center" padding>
    <div>{{ products_full }}</div>
  </q-page>
</template>

<script>
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
};
</script>
