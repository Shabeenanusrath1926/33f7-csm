<<<<<<< HEAD
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};

// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.trim().toLowerCase();

  if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠ Error fetching weather.";
    });
});
=======
//print statement
console.log("SRIT")

//Data types in js

num=12;
str="hi";
bo1=true;
BigInt=752085208528520520;
//undefined
//var,let,const

var name1="srit";
console.log(name1)
var name1="hi";
console.log(name1)
let course="csm";
let age=20;
console.log(age)
age=21;
console.log(age)
const givenname="srinivasa srit";
console.log(givenname)

>>>>>>> 007926e (second commit)
