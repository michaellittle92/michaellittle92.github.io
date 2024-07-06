async function Init(){
    let location = 'Melbourne';
    await getWeather(location);
}

async function getWeather( location){
    const res = await fetch(buildDailyForcastApiString(location, apiKey));
    const resObj = await res.json();  
    console.log(resObj);
    let weather = [resObj.forecast.forecastday[0].day.maxtemp_c, resObj.forecast.forecastday[0].day.mintemp_c, resObj.forecast.forecastday[0].day.condition.text];
    
    let minTemp = document.getElementById('min-temp');
    let maxTemp = document.getElementById('max-temp');
    let weatherIcon = document.getElementById("weather-icon");

    maxTemp.innerText = weather[0];
    minTemp.innerText = weather[1];
    //weekly forcast - should probably be its own function
    for(let i = 0; i <= resObj.forecast.forecastday.length-1; i++){
        dayDate = document.getElementById(`forecast-day-${i}-date`);
        dayDate.innerText = resObj.forecast.forecastday[i].date; 
        //forecastImage = console.log(resObj.forecast.forecastday[i].day.condition.text);
         //TODO imliment image assignment method - should use the static version of the nicer images 
        forecastImage = document.getElementById(`forecast-day-${i}-image`);
        forecastImage.src = resObj.forecast.forecastday[i].day.condition.icon
        
        forcastMaxTemp = document.getElementById(`forecast-day-${i}-maxtemp`);
        forcastMaxTemp.innerText = resObj.forecast.forecastday[i].day.maxtemp_c;
        forcastMinTemp = document.getElementById(`forecast-day-${i}-mintemp`);
        forcastMinTemp.innerText = resObj.forecast.forecastday[i].day.mintemp_c;
    }
    //image selection should probably be its own function, one for animated (main) and one static (weekly view)
    if(weather[2].toLowerCase() === 'patchy rain nearby'){
        weatherIcon.src = "images/rainy-1.svg";
    }
    if(weather[2].toLowerCase() === 'sunny'){
        weatherIcon.src = "images/clear-day-cropped.svg";
    }
    else if (weather[2].toLowerCase().includes('rain')){
        weatherIcon.src = "images/rainy-3.svg";
    
    }
    else{
        weatherIcon.src = "images/cloudy-1-day.svg";
    };

}

function buildDailyForcastApiString(location, apiKey){
let apiString = `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=7&key=${apiKey}`
return apiString;
}

Init()

