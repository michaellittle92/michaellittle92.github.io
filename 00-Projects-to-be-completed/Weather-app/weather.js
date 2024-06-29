async function Init(){
   let date = getDate();
   let location = 'Melbourne'

   const res = await fetch(buildDailyForcastApiString(date, location, apiKey));
   const resObj = await res.json();  
   let maxTempFromApi = (resObj.forecast.forecastday[0].day.maxtemp_c); 
   let minTempFromApi = (resObj.forecast.forecastday[0].day.mintemp_c); 

   let maxTemp = document.getElementById('max-temp');
   maxTemp.innerText = maxTempFromApi;

   let minTemp = document.getElementById('min-temp');
   minTemp.innerText = minTempFromApi

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

