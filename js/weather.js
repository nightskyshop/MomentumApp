import API_KEY from "./secret.js";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const temp = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            const sign = document.querySelector("#weather span:nth-child(2)")
            temp.innerText = Math.round(data.main.temp);
            weather.innerText = data.name;
            sign.classList.remove("hidden");
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);