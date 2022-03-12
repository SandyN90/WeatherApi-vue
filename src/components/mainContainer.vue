<template>
  <div>
      <HeaderComp/>
      <NavBar/>
      <MainComponent/>
      <FooterSection/>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import NavBar from "./NavBar.vue";
import MainComponent from "./MainComponent.vue";
import FooterSection from "./FooterSection.vue";

export default {
    components: { HeaderComp, NavBar, MainComponent, FooterSection },
}
</script>

<style>

</style>