const ciudad = 'Chilpancingo'
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`;

const getData = async () => {
    const peticion = await fetch(URL);
    const data = await peticion.json();
    console.log(data)
}

getData();