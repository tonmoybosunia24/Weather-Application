const apiKey = "e92b6e8e6c399e34af5334453142c5cf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const checkWeather = async (name) =>{
       const res = await fetch(`${apiUrl}&q=${name}&appid=${apiKey}`);
       const data = await res.json();
       displayCheckWeather(data)
}
const displayCheckWeather = (data) =>{
       // console.log(data)
       const temperature = document.getElementById("Temperature")
       const cityName = document.getElementById("City-Name")
       const humadity = document.getElementById("Humadity")
       const windSpeed = document.getElementById("Wind-Speed")
       const temperatureImage = document.getElementById("Temperature-image")
       const temperatureImage2 = document.getElementById("Temperature-image2")
       temperature.innerText = Math.round(data.main.temp);
       if(temperature.innerText < 28){
              temperatureImage.classList.add("hidden")
              temperatureImage2.classList.remove("hidden")
              
       }
       else{
              temperatureImage.classList.remove("hidden")
              temperatureImage2.classList.add("hidden")
       }
       cityName.innerText = data.name;
       humadity.innerText = data.main.humidity;
       windSpeed.innerText = data.wind.speed
}
function SearchButton(){
       // console.log("clicked")
       const inputArea = document.getElementById("Input-Area")
       const name = inputArea.value;
       checkWeather(name)
}
checkWeather('dinajpur')