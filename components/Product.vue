<template>
  <div class="Product">
    <div class="Product-main">
      <ProductGallery v-if="!isMobile" />
      <div class="Product-details is-flex is-flex-direction-column">
        <h2 class="Product-title">Paper</h2>
        <div
          class="Product-toBasket is-flex is-flex-direction-row is-justify-content-space-between"
        >
          <ProductPrice
            :price="product.price"
            :priceWithTax="product.priceWithTax"
          />
          <VariantSelect />
          <div class="Product-button">
            <button
              @click="addToBasket()"
              class="Button button is-crimson is-light"
            >
              Add to basket
            </button>
          </div>
        </div>
        <ProductGallery v-if="isMobile" />
        <ProductDescription />
      </div>
    </div>
    <div class="ProductColumns columns">
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

<script>
export default {
  data() {
    return {
      product: {
        price: 565,
        priceWithTax: 670,
      },
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile.isMobile;
    },
  },
  methods: {
    addToBasket() {
      this.$store.commit("basket/addToBasket", this.product);
    },
  },
  head: {
    title: "Paper - OfficeSupplies online shop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        hid: "stripe",
        src: "https://kit.fontawesome.com/c7e908580e.js",
        defer: true,
      },
      {
        type: "application/ld+json",
        src: JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "Store",
          name: "Paper",
          description:
            "Cool paper that you can write on and show it to your family and Friends! ",
        }),
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1020px) {
  .Product-main {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 2fr;
  }
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