<template>
  <div>
    <div searchBox>
      <input
        type="text"
        v-model="cityName"
        placeholder="   Enter City Name"
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
import { store1, store } from "@/store/store.js";
import { mapWritableState } from "pinia";
export default {
  data() {
    return {
      weather: null,
      state: { id: "1", userId: "12" },
      cityName: "",
    };
  },
  computed: {
    ...mapWritableState(store, ["counter"]),
    ...mapWritableState(store1, ["count", "name"]),
  },
  components: { MidSection, RightSection, LowerSection, LeftSection },
  methods: {
    async handleUrl() {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=bf36ebd25be8147f707dfc6f07f27765`;
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
input {
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 15px;
  width: 50vh;
  height: 30px;
  text-align: center;
  padding: 5px 0 5px 0;
}
.upperSection {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.main {
  margin-top: 0;
}
button {
  width: 100px;
  height: 30px;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>