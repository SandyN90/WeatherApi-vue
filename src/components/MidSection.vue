<template>
  <section>
      <!-- <h1>this is mid section</h1> -->
      <div class="img"><img src="../assets/shiny.jpg" alt="image"></div>
      <!-- <input type="text" v-model="StateName"> -->
  </section>
</template>

<script>
export default {
  data(){
    return {
      StateName: 'eg. NOIDA'
    }
  }
}
</script>

<style scoped>
section{
      display: flex;
    align-items: center;
}
.img{
  border: 1px solid #fff;
  border-radius: 50%;
}
img{
  width: 300px;
  height: 300px;
}


</style>