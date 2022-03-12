import {defineStore} from 'pinia'

const store = defineStore('main',{
    state: ()=>{
        return {
            counter: 1,
            name: 'sandy',
            // zipCode: '',
            // Latitude: '',
            // Longitude: '',
            // cityName: '',
            // stateUrl: `api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=bf36ebd25be8147f707dfc6f07f27765`,
            // lonLatUrl: `api.openweathermap.org/data/2.5/weather?lat=${this.Latitude}&lon=${this.Longitude}&appid=bf36ebd25be8147f707dfc6f07f27765`,
            // zipCodeUrl: `https://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode},in&appid=bf36ebd25be8147f707dfc6f07f27765`

        }
    }
})
 const store1 = defineStore('main1',{
    state: ()=>{
        return {
            count: 1,
            name: 'sandy'
        }
    }
})

export {store, store1}

