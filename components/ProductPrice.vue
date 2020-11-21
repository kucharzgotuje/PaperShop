<template>
  <div
    class="ProductPrice is-flex is-flex-direction-column is-justify-content-center"
  >
    <span class="ProductPrice-withoutTax"><b>565,00 kr</b></span>
    <span class="ProductPrice-withTax">670 kr</span>
  </div>
</template>

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