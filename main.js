let ciudad = '';

const getInput = () => {
    const input = document.getElementById('input').value;
    if(input.length > 0){
        ciudad = input;
        getData();
    }
}

const getData = async () => {
    try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`;
        const peticion = await fetch(URL);
        const data = await peticion.json();
        const html = `
            <table>
                <tr>
                    <td>Ciudad:</td>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <td>Temperatura:</td>
                    <td>${data.main.temp/10}</td>
                </tr>
                <tr>
                    <td>Estado:</td>
                    <td>${data.weather[0].description}</td>
                </tr>
            </table>
        `;
        document.getElementById('result').innerHTML = html;
    }catch (err) {
        console.log(err)
    }
}