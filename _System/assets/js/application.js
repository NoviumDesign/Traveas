$(function() {

    function fullScreen() {

        $('#intro').css({
            height: $(window).height() - 28
        });
        $('#case').css({
            height: $(window).height() - 28
        });
        $('.min-height-100').css({
            height: $(window).height() - 28
        });
        // $('.min-height-100').css('min-height', $(window).height() - 28);
    }

    $(window).resize(function() {
        fullScreen();         
    });

    fullScreen();

});

$( "#toggleMenu" ).click(function() {
  $( "#wrapper" ).toggleClass( "out" );
  $( "#mainMenu" ).toggleClass( "in" );
});

$( ".cardToggle" ).click(function() {
  $( this ).closest( ".card-container" ).toggleClass( "active" );
});

$( "#contactUsToggle" ).click(function() {
  $( "#contactUs" ).toggleClass( "active" );
});

$( document ).ready(function() {
    $('.auto-height').matchHeight();
});

$( "#navProductsToggle" ).click(function() {
  $( "#navProducts" ).toggleClass( "active" );
});

$( window ).load(function() {
  $.fn.matchHeight._update();
});
