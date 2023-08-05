<template>
  <section class="offer">
    <section class="offer-cards-section">
      <div>
        <h3 class="section-header">What you get</h3>
      </div>
      <div class="offer-stack">
        <div class="offer-card">
          <img src="../assets/images/sales-offer.png" alt="sales-offer-image" />
          <div class="offer-container">
            <SalesOfferIcon class="svg-head" />
            <div>
              <h4 class="offer-header">Sales Support</h4>
              <div class="offer-inner">
                <CircleIcon color="#FF981F" />
                <p>
                  We handle your enquiries, orders, reservations and help
                  improve your customers' experience.
                </p>
              </div>
              <div class="offer-inner">
                <CircleIcon color="#FF981F" />
                <p>
                  We send a weekly report of custom sales through a personalized
                  dashboard for your business.
                </p>
              </div>
              <div class="offer-inner">
                <CircleIcon color="#FF981F" />
                <p>
                  You can monitor the calls, hear the conversations and make
                  instant decisions that would grow your business at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="offer-card">
          <img src="../assets/images/customer-offer.png" alt="customer-offer-image" />
          <div class="offer-container">
            <CustomerOfferIcon class="svg-head" />
            <div>
              <h4 class="offer-header">Customer Support</h4>
              <div class="offer-inner">
                <CircleIcon color="#1A96F0" />
                <p>
                    We handle all your customer calls and help them transition through each phase of their customer journey.
                </p>
              </div>
              <div class="offer-inner">
                <CircleIcon color="#1A96F0" />
                <p>
                    We send a weekly report of customer engagement through a personalized dashboard for your business.
                </p>
              </div>
              <div class="offer-inner">
                <CircleIcon color="#1A96F0" />
                <p>
                    You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import SalesOfferIcon from "../assets/icons/SalesOfferIcon.vue";
import CustomerOfferIcon from "../assets/icons/CustomerOfferIcon.vue";
import CircleIcon from "../assets/icons/CircleIcon.vue";

</script>

<style lang="scss" scoped>
@import "../src/styles/default.scss";
.offer {
  background-image: url("../assets/images/hero-background.png");
  background-repeat: no-repeat;
  padding-top: -3.5rem;
}
.offer-cards-section {
  padding: 7.5rem 7.5rem;
}

.offer-stack{
    display: flex;
    justify-content: space-evenly;
}

.offer-card {
  width: 30.5rem;
  border-radius: 20px;
  border: 1px solid #eeeeee;
  img {
    border-radius: 5%;
  }
  background-color: $white;
  color: $grey2;
}

.offer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  border-radius: 20px;
  position: relative;
  .svg-head {
    position: absolute;
    top: -80px;
  }
  padding: 40px 32px;
}

.offer-header {
  text-align: center;
  margin: 40px 0 0 32px;
  font-family: $herofonts;
  font-size: 32px;
}

.offer-inner {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    width: 23.966rem;
    color: $grey;
    font-size: 18px;
  }
}
</style>
