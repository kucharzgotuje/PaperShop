<template>
  <nav class="TopNavigation">
    <a class="TopNavigation-link" href="#">All our products</a>
    <a class="TopNavigation-link" href="#">Inspiration for the office</a>
    <a class="TopNavigation-link" href="#">About us</a>
  </nav>
</template>

<style lang="scss" scoped>
.TopNavigation {
  margin: 18px 0;
  padding: 8px 0;
  border-top: 1px solid $grey-10;
  border-bottom: 1px solid $grey-10;

  .TopNavigation-link {
    color: $primary;
    margin-right: 18px;
    transition: color 0.3s;

    &:hover {
      color: $blue;
    }
  }
}
</style>