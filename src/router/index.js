// Importing files to direct access the component via router
import { createRouter, createWebHistory } from 'vue-router'

import mainContainer from '../components/mainContainer.vue'
import AboutComponent from '../components/AboutComponent.vue'
import Search_StateName from '../components/Search_StateName.vue'
import SearchLonLat from '../components/SearchLonLat.vue'
import SearchZipCode from '../components/SearchZipCode.vue'
import HomeComponent from '../components/HomeComponent.vue'

// creating routing path and name to the components
const routes = [
    {
      path: '/', name: 'Home', component: HomeComponent,
      // beforeEnter(to, from){
      //   console.log(to, from)
      // }
    },
    {
      path: '/maincontainer', name: 'mainContainer', component: mainContainer,
      // beforeEnter(to, from){
      //   console.log(to, from)
      // }
    },
    {
      path: '/about', name: 'About', component: AboutComponent,
      // beforeEnter(to, from){
      //   console.log(to, from)
      // }
    },
    {
      path: '/searchbystatename', name: 'SearchByStateName', component: Search_StateName,
      // beforeEnter(to, from){
      //   console.log(to, from)
      // }
    },
    {
      path: '/searchbylanlat', name: 'SearchByLanLat', component: SearchLonLat,
      // beforeEnter(to, from){
      //   console.log(to, from)
      // }
    },
    {
      path: '/searchbyzipcode', name: 'SearchByZipCode', component: SearchZipCode,
      // beforeEnter(to, from){
      //   console.log(to, from)
      // }
    }

]

// creating router instance
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

 
// now exporting the router to access by main
export default router