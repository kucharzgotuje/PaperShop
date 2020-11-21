<template>
  <div
    class="ProductPrice is-flex is-flex-direction-column is-justify-content-center"
  >
    <span class="ProductPrice-withoutTax"
      ><b>{{ price }},00 kr</b></span
    >
    <span class="ProductPrice-withTax">{{ priceWithTax }},00 kr</span>
  </div>
</template>

<script>
export default {
  props: ["price", "priceWithTax"],
};
</script>

<style lang="scss" scoped>
.ProductPrice {
  .ProductPrice-withoutTax {
    font-size: 16px;
    line-height: 16px;
  }

  .ProductPrice-withTax {
    font-size: 12px;
  }
}
</style>