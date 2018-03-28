$(function(){
    $(".menu li").each(function () {
        $this = $(this);
        $this.has( "ul" ).addClass( 'is-child' );
    })
});