const CURRENT_WEATHER_KEY = 'currentWeather';
const WEATHER_ID_KEY = 'weatherId';
const APPID = '1c850f75925b64208acceab7e4df52e6';
const URL = 'http://api.openweathermap.org/data/2.5/forecast';

$(function(){
    
    var weather = window.localStorage.getItem(CURRENT_WEATHER_KEY);  
    
    if(weather){
        console.log('Current weather was found', weather);
        setWeather(weather);
    } else {
        console.log('Current weather was not found');
        getWeather();
    }
    
});

function getWeather(){
    
    let weatherId = window.sessionStorage.getItem(WEATHER_ID_KEY);
    let requestParam = {};
    requestParam.id = weatherId;
    requestParam.APPID = APPID;
    
    console.log('WEATHER_ID_KEY', weatherId);

    $.ajax({
            method: 'GET',
            url: URL,
            data: requestParam
    }).done(function(response) {
            console.log('Response: ', response);
            setWeather(response.list[0]);  // first element it's the current weather
    });
    window.localStorage.setItem(CURRENT_WEATHER_KEY, JSON.stringify(toReturn));
}

function setWeather(weather){
    temperature.innerHTML = weather.main.temp - 273.15 + ' °C';
    pressure.innerHTML = weather.main.pressure;
    humidity.innerHTML = weather.main.humidity + ' %';
    wind.innerHTML = 'speed: ' + weather.wind.speed + ', deg: ' + weather.wind.deg + '°';
    clouds.innerHTML = weather.clouds.all && weather.clouds.all > 0 ? weather.clouds.all : 'none';
    rain.innerHTML = weather.rain;
    
    let city = weather.city.name;
    let generalWeather = weather.weather[0].main;
    
    mainHeader.innerHTML = 'The weather is ' + generalWeather + ' in ' + city;
}



// http://api.openweathermap.org/data/2.5/forecast?id=6542283&APPID=f6bd96535f3e918c7e0dc0d5b2eda409