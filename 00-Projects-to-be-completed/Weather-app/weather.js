

let apiKey = '73057ea301005fa9e9fc682b33dde1d1';
let lat = -37; 
let lon = 140;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function init(){
    const currentTemp = await getCurrentTemp();
    console.log(currentTemp + '°');
}

async function getCurrentTemp(){
    const res = await fetch(apiUrl);
    const resObj = await res.json();
    return convertKelvinToCelsius(resObj.main.temp);
}

function convertKelvinToCelsius(tempKelvin){
    return tempKelvin -273.15;
}
init();