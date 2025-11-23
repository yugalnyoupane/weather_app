const apiKeyWeather = 'caa075262ec8f05e3679e8de330804d8';


window.onload =()=>{
    const cityInput = document.querySelector(".cityInput");
    const searchBtn = document.querySelector(".searchBtn")

    searchBtn.addEventListener("click",()=>{
        const city = cityInput.value;

        //to convert input to lat and long
        const urlCityConverter = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKeyWeather}`
    
        const fetchConverter = async()=>{
            try{
                const res = await fetch(urlCityConverter);
                const converterData = await res.json();

                console.log(converterData);
                const lat = converterData[0].lat;
                const lon = converterData[0].lon;
                const urlWeather = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`
                const fetchWeather = async() => {
                    try {
                        const res = await fetch(urlWeather);
                        const weatherData = await res.json();
                        console.log(weatherData);
                        temperature = document.getElementById("temperature");
                        temperature.innerHTML="";
                        temperature.innerHTML=`Temperature: ${weatherData.main.temp}`
                        description = document.getElementById("description")
                        description.innerHTML = `Weather: ${weatherData.weather[0].main}`
                    }catch(err){
                        console.log("fetch error",err);
                    }
                }
                fetchWeather();

            }catch(err){
                console.log("Error: ",err);
            }
        }
        fetchConverter();
        
        
    })
}


