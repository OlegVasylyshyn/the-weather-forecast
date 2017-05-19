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
    
    $('#home-li').on('click', function(e) {
        e.preventDefault(); 
        $('#city-dropdown').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#button-main-div').hide("slide", { direction: "left", distance: 2000 }, 1000);
        $('#country-dropdown').show("slide", { direction: "right", distance: 2000 }, 1000).addClass('center');
    });
    
});