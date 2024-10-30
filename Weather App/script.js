const darkMode = document.getElementById('dark-mode');
const mainContainer = document.querySelector('.main-container');
const bodyDiv = document.querySelector('body');
const weatherConditionsDiv = document.querySelector('.weather-conditions');
const tooltipText = document.querySelector('.tooltip-text');
const cityDiv = document.querySelector('.city');

darkMode.addEventListener('click', ()=>{
  if(darkMode.checked){
    mainContainer.style.background ="black";
    mainContainer.style.color = "white";
    weatherConditionsDiv.style.color = "white";
    tooltipText.style.display = "none";
    bodyDiv.style.background = "#002D62";
    document.querySelector('.today-date').style.color = "#eee";
    cityDiv.style.color ="white"
  }
  else{
    mainContainer.style.background = "white";
    mainContainer.style.color = "black";
     weatherConditionsDiv.style.color = "grey";
    tooltipText.style.display = "block";
    bodyDiv.style.background = "rgb(112,216,248)"
    document.querySelector('.today-date').style.color = "#BABABA";
    cityDiv.style.color = "black"
;  }
})


function getWeather() {
    const city = document.querySelector('#search').value;
    const apiKey = '6d6886bf73b0138619daf051e115e911'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    
    
  

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.querySelector('.city').innerText = `
                ${data.name}
                `;
              document.querySelector('.temp').innerText = `${Math.round(data.main.temp)}°`;
                document.querySelector('.feels-like').innerText = `Feels Like: ${Math.round(data.main.feels_like)}°F`;
                document.querySelector('.humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.querySelector('.wind').innerText = `Wind Speed: ${Math.round(data.wind.speed)} mph`;
                weatherConditionsDiv.style.visibility = "visible";
                document.querySelector('hr').style.display = "block";
                
               const weatherCondition = data.weather[0].id;
               const customIcon = getCustomIcon(weatherCondition)
               document.querySelector('.weather-icon').innerHTML = `<img class="custom-icon" src="${customIcon}" alt="Weather Icon">` 
               
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Could not fetch weather data. Please try again.');
        });
};

const today = new Date();
const hours = today.getHours().toString().padStart(2, '0');
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
const monthName = monthNames[today.getMonth()];  
const dayOfWeek = daysOfWeek[today.getDay()];
const year = today.getFullYear();
const day = today.getDate();
document.querySelector('.today-date').innerHTML = `${dayOfWeek} ${day} ${monthName} ${year}`;


  function getCustomIcon(weatherCondition) {
    const weatherIcons = {
        2: './images/thunderstorm.png', // Thunderstorm group
        3: './images/drizzle.png',      // Drizzle group
        5: './images/raining.png',         // Rain group
        6: './images/snow.png',         // Snow group
        7: './images/partly-cloudy.png',   // Atmosphere group: mist, smoke, haze, etc.
        800: hours > 18 && hours < 6 ? './images/crescent-moon.png' : './images/sun.png',      // Clear sky
        801: './images/cloud.png',      // Few clouds
        802: './images/cloudy.png',      // Scattered clouds
        803: './images/cloud.png',      // Broken clouds
        804: './images/cloud.png'       // Overcast clouds
    };
  
    // Check if the weather condition has a specific icon
    if (weatherIcons[weatherCondition]) {
        return weatherIcons[weatherCondition];
    }

    // Otherwise, use the icon for the general group
    const weatherGroup = String(weatherCondition).charAt(0);
    return weatherIcons[weatherGroup] || './images/default.png'; // Ensure correct default image path
}



document.querySelector('.search-weather').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getWeather();
        this.value = "";
    }
});




