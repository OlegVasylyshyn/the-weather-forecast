$(function(){
    
    $('#country-select').on('change', function(){
        $('#country-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#city-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('#country-dropdown').on('loaded.bs.select', function() {
        $("#country-dropdown div div ul li").click(function(e){
            $('#country-select').change();
        });
    });
    
    $('#city-select').on('change', function(){
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('#city-dropdown').on('loaded.bs.select', function() {
        $("#city-dropdown div div ul li").click(function(e){
            $('#city-select').change();
        });
    });
    
    $('#reset-button').on('click', function(e) {
        console.log("CLICK");
        e.preventDefault(); 
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#country-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('#weather-button').on('click', function() {
        // TODO 
        // 1) Take all parameters from selected options
        // 2) Persist them in sessionStorage
        // 3) Change page and use these parameters on weather page
        
        window.location='./weather.html';
        
    })
    
});