<template>
  <div class="BasketIcon">
    <button class="BasketIcon-button">
      <i class="fas fa-shopping-basket fa-2x"></i>
      <div class="BasketIcon-amountIndicator">{{ amountInBasket }}</div>
    </button>
    <span class="BasketIcon-total">{{ totalPrice }},00kr</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      amountInBasket: 0,
      totalPrice: 0,
    };
  },
  computed: {
    itemsInBasket() {
      return this.$store.state.basket.itemsInBasket;
    },
  },
  mounted() {
    this.amountInBasket = this.itemsInBasket.length;
    this.totalPrice = this.itemsInBasket.reduce(
      (prevValue, nextValue) => prevValue + nextValue.price,
      0
    );
  },
  watch: {
    itemsInBasket(newValue, oldValue) {
      this.amountInBasket = this.itemsInBasket.length;
      this.totalPrice = this.itemsInBasket.reduce(
        (prevValue, nextValue) => prevValue + nextValue.price,
        0
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.BasketIcon {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1020px) {
    flex-direction: row;
  }
}
.BasketIcon-button {
  position: relative;
  border: none;
  background: none;
}

.BasketIcon-amountIndicator {
  background-color: $crimson;
  position: absolute;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 11px;
  top: 0;
  right: 12px;
  font-weight: bold;
  color: white;

  @media screen and (min-width: 1020px) {
    top: -6px;
    right: -6px;
  }
}

.BasketIcon-total {
  margin: 0 8px;
}
</style>