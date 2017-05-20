$(function(){
    
    var selectedCities;
    
    $('#country-select').on('change', function(e){
        $('#country-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#city-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
        
        let cityJSON = './js/cities/' + e.target.value.toLowerCase()  + '-cities.js';
        $.getScript(cityJSON, function(){
            console.log(cities);
            selectedCities = cities;
            for(var cityName in selectedCities) {
                $('#city-select').append('<option data-tokens="' + cityName + '" id="' + cityName + '">'+ cityName.capitalize() +'</option>');    
                console.log('created ' + cityName + ' option');
            }
            $('.selectpicker').selectpicker();
            $('.selectpicker').selectpicker('refresh');
            
            setLoadBsSelectCity();
            setLoadBsSelectCountry();
            
        });
    });
    
    $('#country-dropdown').on('loaded.bs.select', function() {
        setLoadBsSelectCountry();
    });
    
    $('#city-select').on('change', function(){
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('#city-dropdown').on('loaded.bs.select', function() {
            setLoadBsSelectCity();
    });
    
    $('#reset-button').on('click', function(e) {
        e.preventDefault(); 
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#country-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
        
        $('#city-select option').remove();
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('refresh');
        
        
        setLoadBsSelectCity();
        setLoadBsSelectCountry();
        
    });
    
    $('#weather-button').on('click', function() {
        // TODO 
        // 1) Take all parameters from selected options
        // 2) Persist them in sessionStorage
        // 3) Change page and use these parameters on weather page
        
        window.location='./weather.html';
        
    });
    
    
});


var setLoadBsSelectCountry = function(){
        $("#country-dropdown div div ul li").click(function(e){
            $('#country-select').change();
        });
};

var setLoadBsSelectCity = function(){
    $("#city-dropdown div div ul li").click(function(e){
        $('#city-select').change();
    });
};