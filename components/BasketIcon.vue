<template>
  <div class="BasketIcon">
    <button class="BasketIcon-button">
      <i class="fas fa-shopping-basket fa-2x"></i>
      <div class="BasketIcon-amountIndicator">2</div>
    </button>
    <span class="BasketIcon-total">596,00kr</span>
  </div>
</template>

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