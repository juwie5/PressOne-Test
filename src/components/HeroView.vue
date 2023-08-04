<template>
  <section class="hero">
    <section class="hero-main">
      <div class="hero-text">
        <div>
          <h1>You do the work,</h1>
          <h1>We’ll do the talk</h1>
        </div>
        <div class="space">
          <h4>
            Move your customers’ <span class="blue-text">enquiry</span> to our
          </h4>
          <h4>team of experts</h4>
        </div>
        <div class="space2">
            <p>Let us manage your customer relationship from their first call till </p>
            <p>they become your raving fans</p>
        </div>
        <div>
            <button class="hero-cta-btn">Get Started</button>
        </div>
      </div>
      <div>
        <img class="hero-image" src="../assets/hero-image.png" alt="landing-page-image" />
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import "../src/styles/default.scss";

.hero {
  height: 100vh;
  background-image: url("../assets/hero-background.png");
  background-repeat: no-repeat;
  margin-top: -1.5rem;
  padding: 0 7.5rem;
}

.hero-main {
  display: flex;
  align-items: center;
  padding-top: 5.125rem;
}

.space{
    margin: 2rem 0 0 0;
}
.space2{
    margin: 1rem 0 0 0;
}

.hero-text {
  width: 686px;
  .blue-text {
    color: $blue;
  }
  h1 {
    font-family: $herofonts;
    font-size: 3rem;
    margin: 0;
  }
  h4 {
    font-size: 2rem;
    font-family: $herofonts;
    margin: 0;
  }
  p {
    font-size: 1.25rem;
    color: $grey;
    margin: 0 ;
    line-height: 28px;
  }
}

.hero-cta-btn{
    margin-top: 6rem;
    width: 20.063rem;
    height: 3.5rem;
    border: none;
    background-color: $blue;
    color: $white;
    font-size: 1.125rem;
    border-radius: 0.25rem;
}
.hero-image{
    margin-top: 80px;
}
</style>
