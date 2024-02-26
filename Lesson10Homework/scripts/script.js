async function weatherInfo(lat, lon, town) {
  let longitute = document.getElementById("longitute").value;
  let latitute = document.getElementById("latitute").value;
  let result = document.getElementById("result");

  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${
      latitute || lat
    }&longitude=${longitute || lon}&current_weather=true`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((weatherInfo) => {
      !town
        ? (result.innerHTML = `
        <p> Temerature at the longitute of ${longitute} and at the latitute of ${latitute} is: ${weatherInfo.current_weather.temperature} </p>`)
        : (document.getElementById(
            "result2"
          ).textContent = `Temperature in ${town} is ${weatherInfo.current_weather.temperature}`);

      if (weatherInfo.current_weather.windspeed < 20) {
        this.windSpeed.innerHTML = `Wind speed is ${weatherInfo.current_weather.windspeed}`;
        this.windPhoto.src = "images/wind.png";
      } else if (
        weatherInfo.current_weather.windspeed > 20 &&
        weatherInfo.current_weather.windspeed < 40
      ) {
        this.windSpeed.innerHTML = `Wind speed is ${weatherInfo.current_weather.windspeed}`;
        this.windPhoto.src = "images/wind2.png";
      } else if (weatherInfo.current_weather.windspeed > 40) {
        this.windSpeed.innerHTML = `Wind speed is ${weatherInfo.current_weather.windspeed}`;
        this.windPhoto.src = "images/wind3.png";
      }
    });
}

async function weatherByTown() {
  let town = document.getElementById("town").value;
  let result2 = document.getElementById("result2");

  fetch(`https://geocode.maps.co/search?q=${town}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((infoByTown) => {
      weatherInfo(infoByTown[0].lat, infoByTown[0].lon, town);
    });
}
