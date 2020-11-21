<template>
  <div>
    <section class="section">
      <header class="Header">
        <div class="HeaderTop">
          <h1 class="SiteHeader title">
            <Logo />
          </h1>
          <SearchBar />
          <BasketIcon />
          <CheckoutButton />
        </div>
        <TopNavigation />
      </header>
    </section>

    <section class="MainSection section">
      <main class="Main">
        <LeftColumn class="LeftColumn" />
        <Product class="is-flex-grow-1" />
      </main>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;
}
.MainSection.section {
  padding-top: 0;
  padding-bottom: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.Header {
  display: flex;
  flex-direction: column;
}

.HeaderTop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .SiteHeader.title {
    margin-bottom: 0;
  }
}
</style>
