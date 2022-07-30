<template>
  <q-page class="column items-center default-page" padding>
    <div class="default-header q-pb-xl">
      <span class="default-header-text">Shipping Policy</span>
    </div>
    <div class="column q-gutter-lg">
      <div class="column q-gutter-md">
        <span class="secondary-header"> Domestic Shipping Policy</span>
        <span class="default-content">
          All orders are processed within the date mentioned on the shop page.
          If we are experiencing a high volume of orders or due to weather or
          harvesting constraint, shipments may be delayed by a few days. Please
          allow additional days in transit for delivery. If there will be a
          significant delay in shipment of your order, we will contact you via
          email or phone. Delivery delays can occasionally occur.
        </span>
      </div>
      <!---------->
      <div class="column q-gutter-md">
        <span class="secondary-header">
          Shipping rates & delivery estimates</span
        >
        <span class="default-content">
          Shipping charges for your order will be calculated and displayed at
          checkout.
        </span>
      </div>
      <!---------->
      <div class="column q-gutter-md">
        <span class="secondary-header"> Damages</span>
        <span class="default-content">
          Sooper Mango is not liable for any products damaged or lost during
          shipping.
        </span>
      </div>
      <!---------->
      <div class="column q-gutter-md">
        <span class="secondary-header"> International Shipping Policy</span>
        <span class="default-content">
          All orders outside India are shipped via DHL. Your order will arrive
          4-7 days after the order is placed. When ordering outside of India,
          the recipient is responsible for assuring the product can be legally
          imported to the destination country. The recipient is the importer of
          record and must comply with all laws and regulations of the
          destination country. The recipient of an international shipment may be
          subject to import taxes, customs duties and fees, which are imposed
          once a shipment reaches the recipient's country.
          <br /><br />
          To avoid a delay in receiving your order, we strongly suggest:
          Providing a phone number where you can be reached by delivery agents
          when your product arrives. This phone number will be listed on the
          commercial invoice so agents can reach you to clear your order.
          <br /><br />
          Since the mangoes are raw or semi ripe when we send from India, they
          would ripen as they reach your place or after reaching your place.
          Please keep them in the same box if not ripe, if ripe please
          refrigerate them.
        </span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageName",
};
</script>

<style lang="scss" scoped>
.default-header-text {
  font-family: "Thasadith", sans-serif;
  font-size: 30px;
  color: #323648;
  line-height: 36px;
  font-weight: 700;
}
.default-content {
  font-family: "Verdana", sans-serif;
  font-size: 17px;
  color: #707579;
  line-height: 34px;
  font-weight: 100;
}
.default-page {
  padding-right: 200px;
  padding-left: 200px;
}
.secondary-header {
  font-family: "Thasadith", sans-serif;
  font-size: 38px;
  color: #323648;
  line-height: 34px;
  font-weight: 500;
}
</style>
