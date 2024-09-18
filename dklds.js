// const apiKey = "e92b6e8e6c399e34af5334453142c5cf";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// const checkWeather = async (name) => {
//     // Construct the full API URL with the city name and API key
//     const res = await fetch(`${apiUrl}&q=${name}&appid=${apiKey}`);
//     const data = await res.json();

//     // Call the function to display the weather data
//     displayCheckWeather(data);
// }

// const displayCheckWeather = (data) => {
//     console.log(data);  // Log the data for debugging

//     // Get the DOM elements where the weather information will be displayed
//     const temperature = document.getElementById("Temperature");
//     const cityName = document.getElementById("City-Name");
//     const humidity = document.getElementById("Humidity"); // Fixed typo: "Humadity" to "Humidity"
//     const windSpeed = document.getElementById("Wind-Speed");

//     // Update the text content of the elements with the fetched data
//     temperature.innerText = Math.round(data.main.temp);
//     cityName.innerText = data.name;
//     humidity.innerText = data.main.humidity;
//     windSpeed.innerText = data.wind.speed;
// }

// function SearchButton() {
//     // Get the input value from the input field
//     const inputArea = document.getElementById("Input-Area");
//     const name = inputArea.value;

//     // Call the checkWeather function with the city name from the input
//     checkWeather(name);
// }

// // Call checkWeather with an initial empty string (you can remove this if not needed)
// checkWeather(name);