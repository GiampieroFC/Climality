
export default function getLocation() {

    navigator.geolocation.getCurrentPosition((position) => `${position.coords.latitude},${position.coords.longitude}`)

}
