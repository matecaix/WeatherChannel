let btn = document.querySelector(".btn")
let input = document.querySelector(".input")
let sGrados = document.querySelector("#grados")
let sCiudad = document.querySelector("#ciudad")
let wicon = document.querySelector("#wicon")
let descripcion = document.querySelector("#descripcion")

function cargarCiudad(ciudad)
{
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=6fe5b39433ebb1b24f12bbb555b14d1a",
    function(data)
    {
        sGrados.innerHTML = (data.main.temp - 274.15).toFixed() + " °C"  
        console.log(data.main.temp)
        sCiudad.textContent = data.name
        let icon = data.weather[0].icon
        wicon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        descripcion.textContent = data.weather[0].description;
        document.querySelector(".container").style.visibility = "visible"
    })
}
function check()
{
    if (input.value)
    {
        let ciudad = input.value
        cargarCiudad(ciudad)
        input.value = ""
    }
    else
    {
        alert("Debes introducir una ciudad")
    }
}

document.body.addEventListener("keydown", function (info) {
    if (info.key === "Enter")
    {    
        check()
    }
})

btn.addEventListener("click", function()
{
    check()
})