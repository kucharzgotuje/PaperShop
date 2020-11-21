<template>
  <div class="ProductGallery is-flex is-flex-direction-column">
    <div class="ProductGallery-choosenImage">
      <img
        @click="openInOverlay($event)"
        :src="choosenImage.src"
        :alt="choosenImage.alt"
      />
    </div>
    <div
      class="ProductGallery-imageSelector is-flex is-flex-direction-row is-justify-content-space-between"
    >
      <img
        ref="firstImage"
        @click="chooseImage($event.target)"
        src="@/assets/paper1.jpg"
        alt="First Paper gallery image"
      />
      <img
        @click="chooseImage($event.target)"
        src="@/assets/paper2.jpg"
        alt="Second Paper gallery image"
      />
      <img
        @click="chooseImage($event.target)"
        src="@/assets/paper3.jpg"
        alt="Third Paper gallery image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choosenImage: {
        src: null,
        alt: null,
      },
    };
  },
  mounted() {
    this.choosenImage.src = this.$refs.firstImage.src;
    this.choosenImage.alt = this.$refs.firstImage.alt;
  },
  methods: {
    openInOverlay() {
      // @TODO: Let's add overlay element & open it on big image click
    },
    chooseImage(target) {
      this.choosenImage.src = target.currentSrc;
      this.choosenImage.alt = target.alt;
    },
  },
};
</script>

<style lang="scss" scoped>
.ProductGallery {
  .ProductGallery-choosenImage {
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  .ProductGallery-imageSelector {
    img {
      cursor: pointer;
      height: auto;
      max-width: 30%;

      @media screen and (min-width: 1020px) {
        height: 68px;
      }
    }
  }
}
</style>