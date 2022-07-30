<template>
  <q-page class="q-mb-xl default-page" padding>
    <!-- content -->
    <div class="default-header">Terms & Conditions</div>
    <br />
    <div class="q-mx-xl" style="max-width: 1100px">
      <div class="default-content">
        The orders placed at SooperMango are delivered to our customers by a
        third-party logistics and courier service companies. Our efforts are to
        ensure that we handover orders in the best possible state for your
        consumption. We further inform you that the orders placed, especially
        fruits may ripe after delivery. The orders which are packed in
        eco-friendly boxes once dispatched for delivery are under the control of
        logistics companies. Our efforts are to ensure that orders reach you at
        their best state. However, in case of any damage during transit,
        SooperMango shall not be responsibe for the same. Status update is sent
        to our customer after the shipment is handed over to logistics company.
        Further, once an order is placed, the customer agrees that he/she is
        fully aware that the said order cannot be cancelled, replaced or
        refunded. However, SooperMango reserves right to cancel any order due to
        non-availability of the stock and to refund the amount paid, if any.
        Furthermore, in case the order was not delivered due to your
        non-availablity at the shipping address or due to non co-operation to
        direct the delivery person, we shall leave the order at the nearest
        address of your choice or your neighbour. Under any circumstatnce, the
        order once dispatched for delivery must be delivered to you and the same
        cannot be taken back due to the perishable nature of the order. Kindly
        note that the item(s) in your order may differ marginally in size and
        weight. Subsequently, the real weight of the item conveyed can have a
        little fluctuation. You will be charged dependent on the real weight
        during packing.
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
.default-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.default-header {
  font-size: 2.5rem;
}
.default-content {
  margin: 0;
  text-align: left;
  font-size: 17px;
  line-height: 2em;
  letter-spacing: 1px;
  color: #707579;
  font-weight: 100;
  font-family: verdana;
}
</style>
