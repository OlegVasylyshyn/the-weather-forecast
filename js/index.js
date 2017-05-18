$(function(){
    
    $('#country-select').on('change', function(){
        $('#country-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#city-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('option').on('click', function(){
        console.log('click');
        $('#country-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#city-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('#city-select').on('change', function(){
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
    $('#home-li').on('click', function(e) {
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#country-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
});