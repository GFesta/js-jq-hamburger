

$( "i.fas.fa-bars" ).click(function() {
    $(".hamburger-menu").show(500);
});

$("i.fas.fa-times").click( function() {
    $(".hamburger-menu").hide("fast");
});


//con rotazione della X

// $("i.fas.fa-bars").click(function() {
//     $(".hamburger-menu").fadeIn(500);
//     $("#iconaX").removeClass("rotate-center");
// });

// $("i.fas.fa-times").click(function() {
//     $(".hamburger-menu").fadeOut("3000");
//     $("#iconaX").addClass("rotate-center");
// });