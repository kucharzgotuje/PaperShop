<template>
  <div class="SearchBar">
    <input
      class="SearchBar-input input is-medium"
      type="text"
      value=""
      placeholder="I'm looking for..."
    />
    <button class="SearchBar-button">
      <i class="fas fa-search fa-2x"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.image {
  max-width: 220px;
}

.SearchBar {
  display: flex;
  flex-direction: row;

  .SearchBar-input {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: none;
    box-shadow: 0px 0px 2px $grey-20;
    outline: none;
    color: $grey-20;

    &:focus {
      outline: none;
    }
  }

  .SearchBar-button {
    border: none;
    box-shadow: 0px 0px 2px $grey-20;
    margin-left: -2px;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-left: 14px;
    padding-right: 12px;
    color: $grey-20;
    transition: color 0.3s;
    cursor: pointer;

    &:focus {
      outline: none;
    }
    &:hover {
      color: $crimson;
    }
  }
}
</style>
