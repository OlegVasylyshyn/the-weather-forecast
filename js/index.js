$(function(){
    
    $('#country-select').on('change', function(){
        // $('body, html').addClass('overflow-hidden');
        $('#country-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#city-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
        // $('body, html').removeClass('overflow-hidden');
    });
    
    $('#city-select').on('change', function(){
        // $('body, html').addClass('overflow-hidden');
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
        // $('body, html').removeClass('overflow-hidden');
    });
    
});