async function fetchData() {
  const weatherLink =
    "http://api.openweathermap.org/data/2.5/weather?q=helsingborg&units=metric&appid=d5ba9f2693943e9925890cc40b9f742a";

  const response = await fetch(weatherLink);
  const data = await response.json();

  console.log("The weather data", data);

  if (response.ok) {
    const dataIcon = data.weather[0].icon;

    const dataIconUrl = await fetch(
      `http://openweathermap.org/img/w/${dataIcon}.png`
    );

    document.getElementById("weather").textContent = data.main.temp;
    document.getElementById("weathermin").textContent = data.main.temp_min;
    document.getElementById("weathermax").textContent = data.main.temp_max;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("des").textContent = data.weather[0].description;
    document.getElementById("city").textContent = data.name;

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", dataIconUrl.url);
    document.getElementById("des").appendChild(imageElement);
  } else {
    console.log("Något fel");
  }
}

fetchData();

var currentdate = new Date();
var datetime =
  "Last Sync: " +
  currentdate.getDay() +
  "/" +
  currentdate.getMonth() +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

document.getElementById("date").innerHTML = currentdate.toLocaleString();
