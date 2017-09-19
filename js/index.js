$('.nav').click(function() {
    var id = $(this).attr('id');
    $('html, body,section').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1500);
});

$( '.nav' ).click(function() {
    $( this ).addClass( 'fa-spin' );

    //Trying to use setTimeout, but doesn't seem to work either.
    var $el = $(this);
    setTimeout(function() { $el.removeClass( 'fa-spin' ); }, 2000);
});

document.getElementById("dateTime").innerHTML = Date();