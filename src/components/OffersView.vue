<template>
  <section class="offer">
    <section class="offer-cards-section">
      <div>
        <h3 class="section-header">
            What you get
        </h3>
      </div>
      <div class="offer-card"></div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../src/styles/default.scss';
.offer {
  background-image: url("../assets/images/hero-background.png");
  background-repeat: no-repeat;
}
.offer-cards-section {
  padding: 7.5rem 7.5rem;
}

.offer-card {
  width: 30.5rem;
}

</style>
