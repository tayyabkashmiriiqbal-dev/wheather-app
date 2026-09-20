let temp = document.querySelector(".temp");

let rain = document.querySelector(".rain");
let humidity = document.querySelector(".humidity");
let time =document.querySelector(".time");
let img=document.querySelector("#weather-icon")
let feelslike=document.querySelector(".feels-like")
let condition=document.querySelector(".condition");
let country =document.querySelector(".country");


async function addwheather(event) {
  event.preventDefault();

  let city = document.querySelector(".input").value.trim();


   if (!city) {
    alert("Please enter a city name");
    return;
  }
  try {
  let output = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );

  img.src = "https:" + output.data.current.condition.icon;
  condition.innerHTML="Condition : "+output.data.current.condition.text; 
  temp.innerHTML=output.data.current.temp_c+"°C";
  rain.innerHTML = "Rain: " + output.data.current.precip_mm + " mm";
  humidity.innerHTML="Humidity :"+output.data.current.humidity+"%"
  time.innerHTML = "Local Time: " + output.data.location.localtime;
  feelslike.innerHTML="Feels Like: "+output.data.current.feelslike_c+"°C"; 
  country.innerHTML="Country :"+output.data.location.country 
  } catch (error) {
     console.error("Error fetching weather data:", error);
    alert("City nahi mili ya koi error aaya hai");
  }


}
