function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "c14e3219613c4398bd9cf48eb5d743e1";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temp").innerText =
                "Temperature: " + data.main.temp + " °C";

            document.getElementById("condition").innerText =
                "Condition: " + data.weather[0].description;

            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + "%";

            document.getElementById("wind").innerText =
                "Wind Speed: " + data.wind.speed + " m/s";
        })
        .catch(() => {
            alert("City not found");
        });
}
