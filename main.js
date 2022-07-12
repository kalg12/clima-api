let ciudad = '';

const getInput = () =>{
    const input = document.getElementById("input").value;
    ciudad = input;
    getData();
}

const getData = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`;
    const peticion = await fetch(URL);
    const data = await peticion.json();
    console.log(data)
    const table = document.getElementById("table").innerHTML=`

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ciudad</th>
      <th scope="col">Clima</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${data.name}</td>
      <td>${data.main.temp/10}</td>
    </tr>
  </tbody>
</table>
    `
}