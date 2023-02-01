export default class IW {
    // #temp
    // #temp_min
    // #temp_max
    // #temp_feels
    // #humidity
    // #localtime
    // #wind
    // #city
    // #country
    // #condition

    constructor(data) {
        this.temp = data.current.temp_c;
        this.temp_min = data.forecast.forecastday[0].day.mintemp_c;
        this.temp_max = data.forecast.forecastday[0].day.maxtemp_c;
        this.temp_feels = data.current.feelslike_c;
        this.humidity = data.current.humidity;
        this.localtime = data.location.localtime;
        this.wind = data.current.wind_kph;
        this.city = data.location.name;
        this.country = data.location.country;
        this.condition = data.current.condition;
    };

    // get getTemp() {
    //     return this.#temp
    // }
    // get getTemp_min() {
    //     return this.#temp_min
    // }
    // get getTemp_max() {
    //     return this.#temp_max
    // }
    // get getTemp_feels() {
    //     return this.#temp_feels
    // }
    // get getHumidity() {
    //     return this.#humidity
    // }
    // get getLocaltime() {
    //     return this.#localtime
    // }
    // get getWind() {
    //     return this.#wind
    // }
    // get getCity() {
    //     return this.#city
    // }
    // get getCountry() {
    //     return this.#country
    // }
    // get getCondition() {
    //     return this.#condition
    // }

}


