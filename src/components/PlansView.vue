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
@import "../src/styles/default.scss";

.plans-view {
  padding: 0 7.5rem;

}

.plans {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 32px;
}

.plans-card {
  padding: 24px;
  border: 1px solid $grey3;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin: 0;
    color: $blue;
    font-size: 1rem;
    font-weight: 700;
  }

  h4 {
    margin: 0;
    color: $grey4;
    font-size: 14px;

    span {
      color: $black;
      font-family: $herofonts;
      font-size: 32px;
      font-weight: 600;
    }
  }

  h6 {
    margin: 0;
    color: $grey;
    font-size: 1rem;
    font-weight: 500;
  }
}

.plans-cta-btn {
  border-radius: 4px;
  background-color: $blue;
  border: none;
  color: $white;
  padding: 14px 64px;
}

.plans-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  margin-bottom: 80px;

  tr:nth-child(odd) {
    background-color: #eaf1f6;
    border-radius: 8px;
  }

  th, td {
    padding: 16px 8px 16px 32px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    color: $grey2;
  }

  td:nth-last-child(1){
    color: $blue;
    font-weight: 500;
  }
}

.plans-img-background{
  background-image: url("../assets/images/plans-background.png");
  background-repeat: no-repeat;
  background-position: -25% -10%;
}
.join  {
    padding: 7.5rem 0;
} 

.join-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px 120px;
    background-color: $blue;
    gap: 40px;
    border-radius: 20px;
    background-image: url("../assets/images/join-image.png");
    background-repeat: no-repeat;
    h5{
        font-size: 40px;
        font-family: $herofonts;
        color: $white;
        text-align: center;
        font-weight: 600;
        margin: 0;
    }

    p{
        font-size: 20px;
        color: $white;
        margin: 0;
        font-weight: 300;
    }

    button{
        padding: 14px 112px;
        border: none;
        border-radius: 4px;
        background-color: $white;
        color: $blue;
    }
}
</style>
