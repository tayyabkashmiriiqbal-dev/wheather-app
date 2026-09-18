let temp = document.querySelector(".temp");

let rain = document.querySelector(".rain");
let humidity = document.querySelector(".humidity");
let time =document.querySelector(".time");
let Time=
async function addwheather(event) {
  event.preventDefault();

  let city = document.querySelector(".input").value.trim();


   if (!city) {
    alert("Please enter a city name");
    return;
  }
  let output = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );

  temp.innerHTML=output.data.current.temp_c+"°C";
  rain.innerHTML="Chances of raining : " + output.data.current.precip_mm + " mm"
  humidity.innerHTML="Humidity :"+output.data.current.humidity+"%"
  time.innerHTML="Time :"+Time

}
