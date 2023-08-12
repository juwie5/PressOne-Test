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

.offer {
  background-image: url("../assets/images/hero-background.png");
  background-repeat: no-repeat;
  background-position: 26px -50px;
}

</style>
