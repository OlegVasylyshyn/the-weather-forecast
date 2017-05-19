$(function(){
    
    $.getScript('./js/countries/country.js', function(){
        console.log(countries);
        countries.forEach(function(country){
            $('#country-select').append('<option data-tokens="' + country + '" id="' + country + '">'+ country.capitalize() +'</option>');    
            console.log('created ' + country + ' option');
        });
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('refresh');
    });
    
 
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
});