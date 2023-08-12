<template>
  <section class="plans-view">
    <div>
      <h3 class="section-header">Choose a plan that works for you</h3>
    </div>
    <div class="plans">
      <PlanPressOneIcon />
      <div v-for="item in testData" :key="item.id">
        <div class="plans-card">
          <div class="card-text">
            <p>{{ item.name }}</p>
            <h4>
              <span v-if="item.amount === 'Custom'"> {{ item.amount }}</span>
              <span v-else>N {{ convertNumber(item.amount) }}</span
              >/month
            </h4>
            <h6>{{ item.description }}</h6>
          </div>
          <button class="plans-cta-btn">{{ item.cta }}</button>
        </div>
      </div>
    </div>
    <div class="plans-img-background">
      <!-- <table>
        <tr v-for="item in testData" :key="item.id">
          <td>{{ item.agent }}</td>
          <td>{{ item.call_reception }}</td>
          <td>{{ item.calls_per_week }}</td>
        </tr>
      </table>

      <table>
        <tr v-for="item in fields" :key="item.id">
          <th v-for="item in header" :key="item.key">
            {{ item.label }}
          </th>
            <td v-for="headerItem in header">
              <span>{{ item[headerItem.key] }}</span>
            </td>
        </tr>
      </table> -->

      <table class="plans-table">
        <tr>
          <th>Call Reception</th>
          <td>Receive calls only</td>
          <td>Receive and make calls</td>
          <td>Receive and make calls</td>
        </tr>
        <tr>
          <th>Calls per Week</th>
          <td>Less than 30 calls per week</td>
          <td>30 - 70 calls per week</td>
          <td>You choose</td>
        </tr>
        <tr>
          <th>Agents</th>
          <td>Shared agents</td>
          <td>Semi-dedicated agents</td>
          <td>Fully dedicated agents</td>
        </tr>
      </table>
      <div class="join">
        <div class="join-card">
            <h5>Join thousands of entrepreneurs using PressOne to improve their business communications.</h5>
            <p>Ready to make your customers love your business?</p>
            <button>
                Join Now
            </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import PlanPressOneIcon from "../assets/icons/PlanPressOneIcon.vue";
import testData from "../utils/data.js";
import { convertNumber } from "../services/convertNumber.js";

const plansData = ref([]);

const fetchPlansData = async () => {
  try {
    const res = await axios.get("https://api.jsonserve.com/swQ1ic");
    plansData.value = res.data;

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const header = ref([
  {
    label: "Call Reception",
    key: "call_reception",
  },
  {
    label: "Calls per Week",
    key: "calls_per_week",
  },
  {
    label: "Agents",
    key: "agent",
  },
]);

let fields = testData;

onMounted(() => {
  fetchPlansData();
});
</script>

<style lang="scss" scoped>
  .plans-img-background{
    background-image: url("../assets/images/plans-background.png");
    background-repeat: no-repeat;
    background-position: -25% -10%;
  }

  .join-card{
    background-image: url("../assets/images/join-image.png");
    background-repeat: no-repeat;
  }
</style>
