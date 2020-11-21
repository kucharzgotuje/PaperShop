<template>
  <div class="ProductDescription">
    <p class="ProductDescription-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
      bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
      justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,
      nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
      sapien nunc eget odio. <br /><br />Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
      amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
      tempor. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
      felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
      <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
      accumsan et viverra justo commodo. Proin sodales<br/><br/>

      <p v-if="isExpanded" class="ProductDescription-paragraph">Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
      amet lacus accumsan et viverra justo commodo. <br/><br/>Proin sodales pulvinar
      tempor. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
      felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
    </p>
    <span class="ProductDescription-expand" @click="toggleIsExpanded">{{isExpanded ? 'Read less' : 'Read more'}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleIsExpanded() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.ProductDescription {
  margin: 22px 0;

  .ProductDescription-paragraph {
    font-size: 14px;
  }

  .ProductDescription-expand {
    text-decoration: underline;
  }
}
</style>