<template>
  <div>
    <section class="section">
      <header class="Header">
        <div class="HeaderTop">
          <Hamburger v-if="isMobile" />
          <h1 class="SiteHeader title">
            <Logo />
          </h1>
          <SearchBar v-if="!isMobile" />
          <BasketIcon />
          <CheckoutButton v-if="!isMobile" />
        </div>
        <TopNavigation v-if="!isMobile" />
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
export default {
  data() {
    return {
      isMobile: false,
      metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Default Title",
        // all titles will be injected into this template
        titleTemplate: "%s | My Awesome Webapp",
      },
    };
  },
  mounted() {
    this.setIsMobile(window.outerWidth);
    window.addEventListener("resize", (event) =>
      this.setIsMobile(event.currentTarget.outerWidth)
    );
  },
  methods: {
    setIsMobile(windowWidth) {
      this.isMobile = windowWidth < 820;
      this.$store.commit("isMobile/setIsMobileFlag", this.isMobile);
    },
  },
};
</script>

<style lang="scss">
.Main {
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 820px) {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 3fr;
  }
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
