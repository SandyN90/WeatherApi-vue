<template>
  <div>
    <h1>
      Welcome to {{ updatedData.name }}<br />
      This is weather Condition in {{ updatedData.name }}
    </h1>
  </div>
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
div {
  margin: 50px 0 20px 0;
}
h1 {
  color: red;
}
</style>