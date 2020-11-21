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
  top: -6px;
  right: -6px;
  font-weight: bold;
  color: white;
}

.BasketIcon-total {
  margin: 8px;
}
</style>