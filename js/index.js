$(function(){
    
    
    var selectedCity;
    
    $('#city-select').on('change', function(e){
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
        selectedCity = e.target.text ? e.target.text : e.target.value ? e.target.value : e.target.textContent;
    });

    $('#reset-button').on('click', function(e) {
        e.preventDefault(); 
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#country-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
        
        $('#city-select option').remove();
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('refresh');
        
        setLoadBsSelectCountry();
        
    });
    
    $('#weather-button').on('click', function() {
        // let id = selectedCities['' + selectedCity.toLowerCase()];
        window.sessionStorage.setItem('city', selectedCity.toLowerCase());
        window.location='./weather.html';
    });
    
});

