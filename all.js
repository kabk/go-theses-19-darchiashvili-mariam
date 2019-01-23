$(document).ready(function(){
  // $('#topnav').onePageNav({
  //   currentClass: 'current',
  //     scrollOffset: 0
  // });





  var footnotediv = $( '#footnotes' );
  $( '.footnote-ref' ).click( function( event ) {
    event.preventDefault( );

    var link = $( this );
    var target = $( '#' + link.data( 'link' ) );

    footnotediv.scrollTop( footnotediv.scrollTop( )
         + target.position( ).top );

    footnotediv.find( '*' ).not( target ).css( 'color', '#fff' );
    target.css( 'color', '#FEE501' );
  } );

  $( '#main' ).scroll( function( ) {
    footnotediv.find( '*' ).css( 'color', '#fff' );
  } );






  function openLarge( ) {
    $( '#image-large' ).css( { 'background-image':
                               'url(' + $( this ).attr( 'src' ) + ')',
                              'display': 'inline-block' } );
  }
  $( '#images img' ).click( openLarge );


  function closeLarge( ) {
    $( '#image-large' ).css( 'display', '' );
  }

  $( '#image-large' ).click( closeLarge );

  $( document ).keyup( function( event ) {
    if ( event.keyCode == 27 ) closeLarge( );
  } );
});




//
//
//  $(".pic").wrap('<div class="alt-wrap"/>');
//
// $(".pic").each(function() {
//     $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
//   })
//


// $(function () {
//   $('img').live('mouseover', function () {
//     var img = $(this); // cache query
//     if (img.title) {
//       return;
//     }
//     img.attr('title', img.attr('alt'));
//   });
// });
//
//






function popup( mypage ) {
    var popup = document.getElementById( mypage );
    popup.classList.toggle("show");
}
function showPrintPreview ( event ) {
    event.preventDefault( );
    //
    // document.getElementById( 'myPopup' ).classList.remove("show");
    // document.getElementById( 'myPopup2' ).classList.remove("show");

    var printoverlay = document.getElementById( 'printoverlay' );
    printoverlay.classList.toggle( "show" );

    var printpreview = document.getElementById( 'printpreview' );
    printpreview.classList.toggle( "show" );
}
function hidePrintPreview ( ) {
    document.getElementById( 'printoverlay' ).classList.remove("show");
    document.getElementById( 'printpreview' ).classList.remove("show");
}
document.onkeyup = function ( event ) {
    if ( event.key.toLowerCase( ) == 'escape' )
        hidePrintPreview( );
}

document.getElementById( 'printoverlay' ).onclick = hidePrintPreview;
