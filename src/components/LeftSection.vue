<template>
  <section class="main">
    <div class="mainHeading">
      <h1>{{ Math.round(updatedData.main.temp) - 273 }}<sup>0</sup></h1>
    </div>
    <div class="cityName">
      <img src="" alt="" />
      <h1>{{ updatedData.name }}</h1>
    </div>
    <div class="toggle">
      <h1 class="leftArrow">&#8592;</h1>
      <h1 class="rightArrow">&#8594;</h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ["getWeather"],
  computed: {
    updatedData() {
      return this.getWeather();
    },
  },
  created() {
    if (this.updatedData) {
      this.isActive = true;
    }
  },
};
</script>

<style scoped>
.main {
  /* margin-top: 30px; */
}
.mainHeading {
  display: flex;
  width: 400px;
  height: 328px;
  position: relative;
  /* background-color: azure; */
  justify-content: center;
  align-items: center;
  /* border: 1px solid #000; */
  border-radius: 50%;
}
.mainHeading h1 {
  font-size: 50px;
  font-weight: 800;
}
.cityName {
  top: -80px;
  width: 400px;
  height: auto;
  position: relative;
  /* background-color: aliceblue; */
  margin-bottom: 10px;
}
.toggle {
  position: relative;
  width: 400px;
  display: flex;
  justify-content: space-around;
}
.leftArrow {
  width: 45px;
  height: 45px;
  font-size: 30px;
  border: 1px solid rgb(59, 58, 58);
  border-radius: 50%;
  /* padding-bottom: 10px; */
}
.leftArrow:hover {
  background-color: antiquewhite;
  color: green;
  border: 1px solid green;
}
.rightArrow {
  width: 45px;
  height: 45px;
  font-size: 30px;
  border: 1px solid rgb(87, 85, 85);
  border-radius: 50%;
  /* padding-bottom: 10px; */
}
.rightArrow:hover {
  background-color: antiquewhite;
  color: green;
  border: 1px solid green;
}
.rightArrow h1 {
}
</style>