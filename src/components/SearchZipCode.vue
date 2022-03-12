<template>
  <div>
    <div searchBox>
      <input
        type="number"
        v-model="zipCode"
        placeholder="   Enter zip code"
        @keyup.enter="handleUrl"
      />
      <button @click="handleUrl">Go..</button>
    </div>
    <div class="upperSection" v-if="weather">
      <left-section />
      <MidSection />
      <RightSection />
    </div>
    <div class="lowerSection" v-if="weather">
      <LowerSection />
    </div>
  </div>
</template>

<script>
import MidSection from "./MidSection.vue";
import RightSection from "./RightSection.vue";
import LowerSection from "./LowerSection.vue";
import LeftSection from "./LeftSection.vue";
export default {
  data() {
    return {
      weather: null,
      state: { id: "1", userId: "12" },
      zipCode: "",
    };
  },
  components: { MidSection, RightSection, LowerSection, LeftSection },
  methods: {
    async handleUrl() {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode},in&appid=bf36ebd25be8147f707dfc6f07f27765`;
        const data = await (await fetch(url)).json();
        this.weather = data;
      } catch (er) {
        return console.log(er);
      }
      // console.log(this.weather);
    },
  },
  provide() {
    return {
      getWeather: () => this.weather,
    };
  },
};
</script>

<style>
</style>