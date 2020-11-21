<template>
  <button class="CheckoutButton button is-crimson is-light">Checkout</button>
</template>

<style lang="scss" scoped>
.CheckoutButton.button {
  background-color: $crimson;
  transition: background-color 0.3s;
  color: white;

  &:hover {
    background-color: $pink;
    color: white;
  }
}
</style>