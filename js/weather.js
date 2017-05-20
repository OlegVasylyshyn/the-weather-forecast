const WEATHER_ID_KEY = 'city';
const KEY = 'bf60adeff8674d99bef174414172005';
const URL = 'https://api.apixu.com/v1/current.json';

$(function(){
    getWeather();
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
    
    mainHeader.innerHTML = 'The weather is ' + generalWeather.toLowerCase() + ' in ' + city;
}

