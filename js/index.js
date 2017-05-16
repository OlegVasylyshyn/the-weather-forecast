$(function(){
    
    $('#country-select').on('change', function(){
        console.log('click');
        $('#country-dropdown').toggle();
        $('#city-dropdown').toggle().addClass('center');
    });
    
    $('#city-select').on('change', function(){
        console.log('click');
        $('#city-dropdown').toggle();
        $('#wheather-button').toggle().addClass('center');
    });
    
});