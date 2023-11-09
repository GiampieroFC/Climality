export default class IW {
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
}


