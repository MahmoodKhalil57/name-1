<template>
  <q-page class="q-mb-xl default-page" padding>
    <!-- content -->
    <q-space />
    <div class="default-header">Login</div>
    <div class="q-mx-xl content-three" style="max-width: 1100px">
      Signin saves time! Easy access to your order history and status
    </div>
    <q-space />
    <div class="q-pa-md login-box column text-center">
      <q-btn
        id="google-btn"
        class="default-btn q-px-lg q-py-md"
        icon="fa-brands fa-google"
        no-caps
      >
        &nbsp;&nbsp;
        <span class="btn-content">Sign in with Google</span></q-btn
      >
      <span class="login-content">or</span>
      <q-btn
        id="apple-btn"
        class="default-btn q-px-lg q-py-md"
        icon="fa-brands fa-apple"
        no-caps
      >
        &nbsp;&nbsp;
        <span class="btn-content">Sign in with Apple</span></q-btn
      >
      <span class="login-content">or</span>
      <q-btn id="guest-btn" class="default-btn q-px-lg q-py-md" no-caps>
        &nbsp;&nbsp;
        <span class="btn-content">Continue as Guest</span></q-btn
      >
    </div>
    <q-space />
  </q-page>
</template>

<script>
export default {
  name: "PageName",
};
</script>

<style lang="scss" scoped>
.default-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.default-header {
  font-size: 2.5rem;
  font-family: "Thasadith", sans-serif;
}
.content-three {
  line-height: 29px;
  color: #323648;
  font-family: "Thasadith", sans-serif;

  font-size: 24px;
  font-weight: 400;
}
.login-box {
  border: 1px solid #fd7e14;
  border-radius: 5px;
}
.login-content {
  line-height: 2em;
  letter-spacing: 1px;
  color: #707579;
  font-weight: 100;
  font-family: "Verdana";
  font-size: 16px;
}
.btn-content {
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  font-size: 20px;
}
.default-btn {
  font-size: 10px;
  border-radius: 7px;
}
#google-btn {
  background-color: #007bff;
  color: white;
}
#apple-btn {
  background-color: #343a40;
  color: white;
}
#guest-btn {
  background-color: #ffc107;
  color: black;
}
</style>
