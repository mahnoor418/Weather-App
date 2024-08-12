

const apiKey = '0c62604b59d8ee7f0a9e01814c60a409'; 

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const icon = data.weather[0].icon;

    document.getElementById('temperature').textContent = `${temp}°C`;
    document.getElementById('description').textContent = description;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} km/h`;
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
