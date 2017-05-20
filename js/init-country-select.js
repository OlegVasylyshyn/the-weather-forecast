$(function(){
    
    var selectedCities;
    
    $.getScript('./js/countries/country.js', function(){
        countries.forEach(function(country){
            $('#country-select').append('<option data-tokens="' + country + '" id="' + country + '">'+ country.capitalize() +'</option>');    
        });
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('refresh');
        
        setLoadBsSelectCountry();

        
    });
    
 
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
});

var setLoadBsSelectCountry = function(){
    $("#country-dropdown div div ul li").unbind('click').on('click', function(e){
        
        $('#country-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#city-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');

        let cityName = e.target.text ? e.target.text : e.target.value ? e.target.value : e.target.textContent;
        let cityJSON = './js/cities/' + cityName.toLowerCase()  + '-cities.js';
        $.getScript(cityJSON, function(){
            selectedCities = cities;
            for(var cityName in selectedCities) {
                $('#city-select').append('<option data-tokens="' + cityName + '" id="' + cityName + '">'+ cityName.capitalize() +'</option>');    
            }
            $('.selectpicker').selectpicker();
            $('.selectpicker').selectpicker('refresh');
            
            setLoadBsSelectCity();
            
        });
        
        
    });
};

var setLoadBsSelectCity = function(){
    $("#city-dropdown div div ul li").unbind('click').on('click', function(e){
        $('#city-select').change();
    });
};