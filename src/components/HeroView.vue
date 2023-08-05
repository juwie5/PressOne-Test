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
        <img class="hero-image" src="../assets/images/hero-image.png" alt="landing-page-image" />
      </div>
    </section>
    <section class="hero-cards-section">
        <div v-for="item in keyStrength" :key="item">
            <div class="hero-card">
                <HeroheaderIcon/>
                <div>
                    <p>
                       {{ item.title }}
                    </p>
                </div>
            </div>
        </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import HeroheaderIcon from '../assets/icons/HeroHeaderIcon.vue';

const keyStrength = ref([
    {
        title: '75% of consumers prefer human interactions to automated interactions.'
    },
    {
        title: "81% of consumers say a positive customer service experience increases the chances of them making another purchase."
    },
    {
        title: "76% of surveyed customers contact customer service over the phone."
    },
    {
        title: "68% of buyers will pay more for products and services from a company with a strong record of good customer service."
    }
])
</script>

<style lang="scss">
.hero {
  background-image: url("src/assets/images/hero-background.png");
  background-repeat: no-repeat;
  margin-top: -1.5rem;  
}
</style>
