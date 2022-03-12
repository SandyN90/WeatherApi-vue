<template>
  <div>
      <nav>
        <div class="navItems">
            <ul>
              <li :class="{active: state.isHomeActive}"><router-link to="/" @click="homeCheck">Home</router-link></li>
              <li :class="{active: state.isAboutActive}" ><router-link to="/about" @click="AboutCheck">About</router-link></li>
              <li :class="{active: state.isNameActive}"><router-link to="/searchbystatename" @click="NameCheck">Search with stateName</router-link></li>
              <li :class="{active: state.isLanlatActive}" ><router-link to="/searchbylanlat" @click="LanLatCheck">Search with Lon-lat</router-link></li>
              <li :class="{active: state.isZipCodeActive}" ><router-link to="/searchbyzipcode" @click="ZipCodeCheck">Search with ZipCode</router-link></li>
            </ul>
        </div>
        <div class="searchBar">

        </div>
      </nav>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      state: {
        isHomeActive: true,
        isAboutActive: false,
        isNameActive: false,
        isLanlatActive: false,
        isZipCodeActive: false
      }
    }
  },
  // provide() {
  //   return {
  //     message: this.state
  //   }
  // },
  methods: {
    homeCheck(){
      this.state.isHomeActive = true,
      this.state.isAboutActive= false,
      this.state.isNameActive= false,
      this.state.isLanlatActive= false,
      this.state.isZipCodeActive= false
      console.log('home tab')
    },
    AboutCheck(){
      this.state.isHomeActive = false,
      this.state.isAboutActive= true,
      this.state.isNameActive= false,
      this.state.isLanlatActive= false,
      this.state.isZipCodeActive= false
      console.log('aboutA tab')
    },
    NameCheck(){
      this.state.isHomeActive = false,
      this.state.isAboutActive= false,
      this.state.isNameActive= true,
      this.state.isLanlatActive= false,
      this.state.isZipCodeActive= false
      console.log('name tab')
    },
    LanLatCheck(){
      this.state.isHomeActive = false,
      this.state.isAboutActive= false,
      this.state.isNameActive= false,
      this.state.isLanlatActive= true,
      this.state.isZipCodeActive= false
      console.log('lanlat tab')
    },
    ZipCodeCheck(){
      this.state.isHomeActive = false,
      this.state.isAboutActive= false,
      this.state.isNameActive= false,
      this.state.isLanlatActive= false,
      this.state.isZipCodeActive= true
      console.log('zipcode tab')
    }
  }
}
</script>

<style scoped>
.navItems{
  background-color: azure;
}
ul {
  list-style: none;
  text-decoration: none;
  display: inline-flex ;
  margin-top: 20px;
  margin-bottom: 20px;
}
ul li{
  margin-right: 12px;
  text-decoration: none;
  padding: 8px 10px 8px 10px;
  border: 1px solid black;
  border-radius: 15px;
}
ul li:hover{
  background-color: antiquewhite;
}
ul li a{
  text-decoration: none;
}
.active{
  background-color: antiquewhite;
}
</style>