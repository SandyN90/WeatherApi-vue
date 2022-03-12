<template>
  <div>
    <div searchBox>
      <input
        ref="input"
        type="text"
        v-model="latitude"
        placeholder="    Enter Latitude"
        @keyup.enter="handleLat"
        v-show="isActive"
      />
      <input
        ref="input"
        type="text"
        v-model="longitude"
        placeholder="    Enter Longitude"
        @keyup.enter="handlelong"
        v-show="!isActive"
      />
      <button @click="handleUrl" v-show="isShow">Go..</button>
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
      placeHolder: "   Enter latitude ",
      inputCheck: false,
      weather: null,
      latitude: "",
      longitude: "",
      isActive: true,
      isShow: false,
    };
  },
  components: { MidSection, RightSection, LowerSection, LeftSection },
  methods: {
    handleLat() {
      this.isActive = false;
      console.log(this.latitude, "latitude");
    },
    handlelong() {
      this.isActive = true;
      this.handleUrl();
      this.isShow = true;
      console.log(this.longitude, "longitude");
    },
    async handleUrl() {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=bf36ebd25be8147f707dfc6f07f27765`;
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