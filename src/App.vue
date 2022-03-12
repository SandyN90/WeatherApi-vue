<template>
  <div>
    <!-- Header Component -->
    <mainContainer/>
  </div>
</template>

<script>
import mainContainer from './components/mainContainer.vue'

export default {
  name: 'App',
  components: {
    mainContainer
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
