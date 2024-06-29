async function Init(){
   let date = getDate();
   let location = 'Melbourne'

   
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

