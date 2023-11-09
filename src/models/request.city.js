
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
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
