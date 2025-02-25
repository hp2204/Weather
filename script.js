const apiKey = "164c6145a93bf4838b5049f4489592cd"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please enter a valid city.");
            return;
        }

        document.getElementById("cityName").textContent = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
    }
}
