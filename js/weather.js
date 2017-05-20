const CURRENT_WEATHER_KEY = 'currentWeather';
const WEATHER_ID_KEY = 'city';
const KEY = 'bf60adeff8674d99bef174414172005';
const URL = 'https://api.apixu.com/v1/current.json';

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
    
    let city = window.sessionStorage.getItem(WEATHER_ID_KEY);
    let requestParam = {};
    requestParam.q = city;
    requestParam.key = KEY;
    
    console.log('WEATHER_ID_KEY', city);

    $.ajax({
            method: 'GET',
            url: URL,
            data: requestParam
    }).done(function(response) {
            console.log('Response: ', response);
            setWeather(response);  
            window.localStorage.setItem(CURRENT_WEATHER_KEY, JSON.stringify(response));
    });
    
}

function setWeather(weather){
    temperature.innerHTML = weather.current.temp_c + ' °C';
    pressure.innerHTML = weather.current.pressure_mb;
    humidity.innerHTML = weather.current.humidity + ' %';
    wind.innerHTML = 'speed: ' + weather.current.wind_kph + ', deg: ' + weather.current.wind_degree + '°';
    clouds.innerHTML = weather.current.cloud > 0 ? weather.current.cloud : 'none';
    general.innerHTML = weather.current.condition.text;
    
    let city = weather.location.name;
    let generalWeather = weather.current.condition.text;
    
    mainHeader.innerHTML = 'The weather is ' + generalWeather + ' in ' + city;
}



// http://api.openweathermap.org/data/2.5/forecast?id=6542283&APPID=f6bd96535f3e918c7e0dc0d5b2eda409