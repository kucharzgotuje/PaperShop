export const state = () => ({
  itemsInBasket: []
});

export const mutations = {
  addToBasket(state, product) {
    state.itemsInBasket.push(product);
  }
};
