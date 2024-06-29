async function Init(){
    let minTemp = document.getElementById('min-temp');
    let maxTemp = document.getElementById('max-temp');
    let weatherIcon = document.getElementById("weather-icon");
    let date = getDate();
    let location = 'Melbourne';

    let todayWeather = (await getTodayWeather(date, location));
    maxTemp.innerText = todayWeather[0];
    minTemp.innerText = todayWeather[1];
    if (todayWeather[2].toLowerCase().includes('rain')){
        weatherIcon.src = "images/rainy-3.svg";
        
    }
    else{
        weatherIcon.src = "images/cloudy-1-day.svg";
    };

}

async function getTodayWeather(date, location){
    const res = await fetch(buildDailyForcastApiString(date, location, apiKey));
    const resObj = await res.json();  
    let weather = [resObj.forecast.forecastday[0].day.maxtemp_c, resObj.forecast.forecastday[0].day.mintemp_c, resObj.forecast.forecastday[0].day.condition.text];
    return weather
}

function getDate(){
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (mm < 10){
        mm = '0' + mm;
    }
    if (dd < 10){
        dd = '0' + dd;
    }
    let date = `${yyyy}-${mm}-${dd}`;
    return date;
}

function buildDailyForcastApiString(date, location, apiKey){
let apiString = `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=1&dt=${date}&key=${apiKey}`
return apiString;
}

Init()

