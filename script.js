const apiKey = "34fb6151dda2ff8f7c1394d4f88a8907";

function weatherData(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then((response) => {
        if (response.status >= 400 && response.status < 500 ){
            document.querySelector(".error").style.display = "block";
            return false;
        }
        return response.json();
    }).then(data => {
        var icon = data.weather[0].icon;
        var temperature = data.main.temp;
        var windSpeed = data.wind.speed;
        var humidity = data.main.humidity;
        var description = data.weather[0].description;
        var iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".error").style.display = "none";
        document.querySelector("#weatherImage").src = iconUrl;
        document.querySelector("#temperature").innerText = temperature; 
        document.querySelector("#city").innerText = cityName.toUpperCase();
        document.querySelector("#weatherDescription").innerText = description;
        document.querySelector("#humidity").innerText = humidity;
        document.querySelector("#windSpeed").innerText = windSpeed;
    }).catch((err) => { 
        console.log("Some error occured while fetching weather details."); 
    })
}

weatherData("Chennai");

document.querySelector(".input button").addEventListener('click', function(){
    var cityName = document.querySelector("#cityName").value.trim();
    weatherData(cityName);
    cityName.value = "";
})