<template>
  <div class="Product">
    <div class="Product-main">
      <div class="Product-gallery">
        <ProductGallery />
      </div>
      <div class="Product-details is-flex is-flex-direction-column">
        <h2 class="Product-title">Paper</h2>
        <div
          class="Product-toBasket is-flex is-flex-direction-row is-justify-content-space-between"
        >
          <ProductPrice />
          <VariantSelect />
          <div class="Product-button">
            <button class="Button button is-crimson is-light">
              Add to basket
            </button>
          </div>
        </div>
        <ProductDescription />
      </div>
    </div>
    <div class="ProductColumns columns is-mobile">
      <div class="ProductColumn column is-full-mobile">
        <h3 class="ProductColumn-header">Paper is awesome!</h3>
        <p class="ProductColumn-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus sapien nunc eget odio.
        </p>
      </div>
      <div class="ProductColumn column is-full-mobile">
        <h3 class="ProductColumn-header">Paper is awesome!</h3>
        <p class="ProductColumn-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet.
        </p>
      </div>
      <div class="ProductColumn column is-full-mobile">
        <h3 class="ProductColumn-header">Paper is awesome!</h3>
        <p class="ProductColumn-paragraph">
          Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis
          orci, sed rhoncus sapien nunc eget odio.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Product-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
}
.Product-toBasket {
  padding: 8px 0;
}
.Product-title {
  font-size: 22px;
  font-weight: bold;
}
.ProductButton .Button.button {
  background-color: $crimson;
  transition: background-color 0.3s;
  color: white;
}
.ProductButton .Button.button:hover {
  background-color: $pink;
  color: white;
}
.ProductColumns {
  padding: 22px 0;
}
.ProductColumn-header {
  font-size: 16px;
  font-weight: bold;
}
.ProductColumn-paragraph {
  font-size: 14px;
}
.ProductColumn:nth-child(2) {
  border-left: 1px solid $grey-10;
  border-right: 1px solid $grey-10;
}
</style>