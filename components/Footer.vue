<template>
  <footer class="Footer footer">
    <div class="is-flex is-flex-direction-column">
      <Logo />
      <div class="FooterLinks columns">
        <div
          class="column is-half-desktop is-two-thirds-tablet is-two-quarters-mobile"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
            odio.
          </p>
        </div>
        <div class="FooterColumn column is-one-third-mobile">
          <h3>Bestsellers</h3>
          <div class="columns">
            <ul class="column">
              <li><a href="#">A4</a></li>
              <li><a href="#">A5</a></li>
              <li><a href="#">Pens</a></li>
              <li><a href="#">Staplers</a></li>
            </ul>
            <ul class="column">
              <li><a href="#">A4</a></li>
              <li><a href="#">A5</a></li>
              <li><a href="#">Pens</a></li>
              <li><a href="#">Staplers</a></li>
            </ul>
          </div>
        </div>
        <div class="FooterColumn column is-one-third-mobile">
          <h3>We're social!</h3>
          <div>
            <ul class="is-flex is-flex-direction-row">
              <li class="FooterLinks-socialMediaLink">
                <a href="#"><i class="fab fa-twitter-square fa-2x"></i></a>
              </li>
              <li class="FooterLinks-socialMediaLink">
                <a href="#"><i class="fab fa-facebook-square fa-2x"></i></a>
              </li>
              <li class="FooterLinks-socialMediaLink">
                <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.Footer {
  margin-top: auto;
  margin-bottom: 0;
}
.FooterLinks {
  margin-top: 20px;
}
.FooterLinks-socialMediaLink {
  margin-right: 8px;
}
</style>