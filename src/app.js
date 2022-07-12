const getInput = () => {
    let inputHTML = document.getElementById("input").innerHTML = `<input class="input" id="input" type="text">`;
    let btnHTML = document.getElementById("boton").innerHTML = `<button class="boton" id="button" onclick="getInput()">Buscar</button>`
}