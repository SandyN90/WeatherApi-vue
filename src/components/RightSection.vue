<template>
  <section>
    <div>
      <h1>Pressure : {{ updatedData.main.pressure / 1000 }} kPa</h1>
      <h1>Humidiy : {{ updatedData.main.humidity }} kPa</h1>
      <h1>Wind Speed : {{ updatedData.wind.speed }} m/sec</h1>
      <h1>Weather Condition : {{ updatedData.weather[0].description }}</h1>
      <h1>Humidiy: {{ updatedData.main.humidity }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  inject: ["getWeather"],
  computed: {
    updatedData() {
      return this.getWeather();
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  /* align-content: center; */
  /* justify-content: center; */
  align-items: center;
}
section div {
  display: inline;
  text-align: left;
}
section div h1 {
  margin-bottom: 10px;
}
</style>