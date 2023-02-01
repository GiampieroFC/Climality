
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7b3da08bdmsha22d68629a9ebf1p1a2735jsnb5da3114d978',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export default async function getInfoWeatherCity(city) {
    try {
        let response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`, options)
        let json = await response.json()
        return json;
    } catch (error) {
        console.log("hay un erro: ", error);
    }


}
